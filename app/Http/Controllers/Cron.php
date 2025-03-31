<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investment;
use App\Models\Income;
use App\Models\User;
use App\Models\Contract;
use App\Models\User_trade;
use App\Models\Reward;
use App\Models\Withdraw;
use Illuminate\Support\Facades\URL;
use App\Models\Trade;
use Illuminate\Support\Facades\Http;
use DateTime;
use DateInterval;
use DatePeriod;
use Carbon\Carbon;
use Helper;
use Plisio\PlisioSdkLaravel\Payment;

class Cron extends Controller
{
    
public function __construct()
{
date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
}
public function tradeAmt()
{
  User::where('id','>=',0)->update(['tradeAmt' => 0]);
}


public function releasefund()
{

$allResult=Investment::where('status','Pending')->get();
$todays=Date("Y-m-d");
if ($allResult)
{
 foreach ($allResult as $key => $value)
 {

  $userID=$value->user_id;
   $joining_amt = $value->amount;
   date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)

  $user_detail=User::where('id',$userID)->first();
  $today=date("Y-m-d H:i:s");
   $previous_date =date('Y-m-d',(strtotime ( '-1 day' , strtotime ( $today) ) ));
  $newTime = date("Y-m-d H:i:s",strtotime($value->created_at." +15 minutes"));
  

  
  if($today>=$newTime)
  {
       Investment::where('id',$value->id)->delete();  
  }


 }
}




}



function manage_trade() 
{
 $trade =\DB::table('contract')->where('c_status',1)->orderBy('created_at','DESC')->first();
$status = false;
$tcoins_arr  = coinrates();
if (!$trade) {
  $status = true;
}
if ($status == true) {
  $data = array(
    'status' => $status,
  );
} else {

  $btc = "";
  $side = $trade->c_buy;
  $entry_price = round($tcoins_arr[$trade->c_name],5);
  $position = $trade->qty;

  $action = "incre";
  $profit = $position + rand(1, 21);
  $entry_price = $entry_price + rand(0.1 ,0.9);
  if ($profit % 2 != 0) {
    $action = "decre";
    $profit = $position - rand(1, 11);
    $entry_price = $entry_price - rand(0.1 ,0.9);
  }

  $data = array(
    'profit' => $profit,
    'action' => $action,
    'btc_price' => $entry_price,
    'status' => $status,
  );
}

// Encode the object as JSON
$jsonData = json_encode($data);
header('Content-Type: application/json');
echo  $jsonData;

}


public function generate_roi()
{

$allResult=Contract::where('c_status','-1')->get();
$todays=Date("Y-m-d");
$day=Date("l");

if ($allResult)
{

 foreach ($allResult as $key => $contract)
 {

  $userID=$contract->user_id;
  
  $userDetails=Income::where('invest_id',$contract->id)->where('remarks','Quantify Income')->first();
  
  if (!$userDetails)
  {
     $userDetail=User::where('id',$userID)->where('active_status','Active')->first(); 
     
     if($userDetail)
     {
        echo "ID:".$userDetail->username." Roi:".$contract->profit."<br>";
     
      $data['remarks'] = 'Quantify Income';
      $data['comm'] = $contract->profit;
      $data['amt'] = $contract->c_ref;
      $data['invest_id']=$contract->id;
      $data['level']=0;
      $data['ttime'] = $contract->ttime;
      $data['created_at'] = $contract->created_at;
      $data['updated_at'] = $contract->updated_at;
      $data['user_id_fk'] = $userDetail->username;
      $data['user_id']=$userDetail->id;
     $income = Income::create($data);   
     }
    


      

  }

 }
 
}




}






  public function leadership_rank()

    {  

    date_default_timezone_set("Asia/Kolkata"); 
//   User::where('id',20)->update(['name' =>'Rameshk']);
    $allResult=User::where('active_status','Active')->orderBy('id','ASC')->cursor();

    if ($allResult) 
    {
       $counter=1;
     foreach ($allResult as $key => $value) 
     {
      
     $userID=$value->id;
     $userName=$value->username;
     $adate_date =$value->adate;

      $ids=$this->my_level_team($userID);
        
    
    $totalrecharge=Investment::whereIn('user_id',(!empty($ids)?$ids:array()))->where('status','Active')->sum("amount");
  
  
     $require_power_bunsess=array('0','5000','10000','20000');
     $require_bonus=array('0','50','100','400');
 
 
  for($p=1;$p<4;$p++)
      {
        $my_gen_busniess=$require_power_bunsess[$p];
  
        $bonus=$require_bonus[$p];
        
        $check_level=Reward::where('remarks','Reward Income')->where('user_id',$userID)->where('level',$p)->count("id");
      
        if($check_level<=0)
        {
         $goalstatus=( $totalrecharge >= $my_gen_busniess? 'Achieved':'Pending');
           if ($goalstatus=='Achieved')
               {
                   
                  echo "<br>";
          echo "ID : ".$userName."<br>";
          echo "Level : ".$p;
         
    
            $data['remarks'] = 'Reward Income';
            $data['amount'] = $bonus;
            $data['total_business'] = $my_gen_busniess;
            $data['level']=$p;
            $data['tdate'] = date("Y-m-d");
            $data['user_id_fk'] =$userName;
            $data['user_id']=$userID; 
            $data['status']='Approved'; 
          $income = Reward::firstOrCreate(['remarks' => 'Reward Bonus','level'=>$p,'user_id'=>$userID],$data);   
          
          
    
               }
               
        }

    
      }
 
   
     $counter++;   
     }
    } 
    
    
    

}


  public function my_level_team($userid,$level=3){
      $arrin=array($userid);
      $ret=array();

      $i=1;
      while(!empty($arrin)){
          $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
          if(!empty($alldown)){
              $arrin = array_column($alldown,'id');
              $ret[$i]=$arrin;
              $i++;

              if ($i>$level) {
               break;
              }


          }else{
              $arrin = array();
          }
      }

      $final = array();
      if(!empty($ret)){
          array_walk_recursive($ret, function($item, $key) use (&$final){
              $final[] = $item;
          });
      }


      return $final;

  }





 public function reward_bonus()
    {  

    $allResult=User::where('active_status','Active')->get();
// print_r($allResult);die;
    if ($allResult) 
    {
     foreach ($allResult as $key => $value) 
     {
      
      $user_id=$value->id;
      $username=$value->username;
      $Power_leg=$value->power_leg;
      $Vicker_leg=$value->vicker_leg;
      
        // $tolteam=$this->my_level_team_count($user_id);


      $investment=Investment::where('user_id',$user_id)->where('status','Active')->sum("amount");
    User::where('id', $user_id)
           ->update([
               'package' => $investment
            ]);
       
    //   $total_team=(!empty($tolteam)?count($tolteam):0);
     
       $directUser=User::where('sponsor',$user_id)->where('package','>=',100)->where('active_status','Active')->count();

     $require_power_bunsess=array('0','1','6','16','36');
     $require_bonus=array('0','5','30','120','220');
 
     
     for($p=1;$p<5;$p++)
      {
        $my_gen_busniess=$require_power_bunsess[$p];
  
        $bonus=$require_bonus[$p];
 
       
        // $power_leg=$my_gen_busniess*50/100;
        // $vicker_leg=$my_gen_busniess*50/100;
        
        // $Require_power_leg=$my_gen_busniess*60/100;
        // $Require_vicker_leg=$my_gen_busniess*40/100;
        
        $check_level=Income::where('remarks','Task Income')->where('user_id',$user_id)->where('level',$p)->count("id");
      
        if($check_level<=0)
        {
         $goalstatus=( $directUser >= $my_gen_busniess? 'Achieved':'Pending');
           if ($goalstatus=='Achieved')
               {
                   
                  echo "<br>";
          echo "ID : ".$username."<br>";
          echo "Level : ".$p;
          User::where('id', $user_id)
           ->update([
               'rank' => $p
            ]);
            
            $data['remarks'] = 'Task Income';
            $data['comm'] = $bonus;
            $data['amt'] = $bonus;
            $data['level']=$p;
            $data['ttime'] = date("Y-m-d");
            $data['user_id_fk'] =$username;
            $data['user_id']=$user_id; 
          $income = Income::firstOrCreate(['remarks' => 'Task Income','level'=>$p,'user_id'=>$user_id],$data);   
    
    
               }
               
        }

          
      }
             
     
      
     
     }
    } 
    
    
      $allResult = Contract::where('c_status', 1)->get();
        if ($allResult) 
    {
        
            foreach ($allResult as $key => $contract) 
     {
         
         
         
          $user = User::where('id',$contract->user_id)->first();
          $contract->c_status = -1;
              $contract->save();
      
              $ref = $contract->c_ref;
              $user_id = $user->id;
              
              $data['remarks'] = 'Quantify Income';
              $data['comm'] = $contract->profit;
              $data['amt'] = $ref;
              $data['invest_id']=$contract->id;
              $data['level']=0;
              $data['ttime'] = date("Y-m-d");
              $data['user_id_fk'] = $user->username;
              $data['user_id']=$user->id;
             $income = Income::create($data);

              add_level_income($user_id,$contract->profit);

      
     }
     
    }
        
   
     

}




 
 public function dltPayout()
 {
     \DB::statement("SET SQL_MODE=''");
     $data = \DB::select("SELECT * , COUNT(id) AS DuplicateRanks FROM incomes WHERE `remarks`='Leadership Ranks and Rewards' GROUP BY user_id HAVING COUNT(id)>1;");
     
         if ($data) 
    {
       $counter=1;
     foreach ($data as $key => $value) 
     {
        
        //  dd($value->id);
        Income::where('id',$value->id)->delete();    
     }
     
     
    }
    
     
     
 }
  


public function dailyIncentive()
{


    $allResult=User::where('active_status','Active')->get();
    $todays=Date("Y-m-d");


    if ($allResult)
    {
        foreach ($allResult as $key => $value)
        {
        $userID=$value->id;
        $userName = $value->username;
        $userRank = $value->rank;
        $endDate=Date("Y-m-d");
        $rewardDetail = Reward::where('user_id',$userID)->orderBy('id','DESC')->limit(1)->first();
         
        if($rewardDetail)
        {
        
        $Checkincome = Income::where('user_id',$userID)->where('remarks','Leadership Ranks and Rewards')->where('level',$rewardDetail->level)->first(); 
        $days=0;
        if(!$Checkincome)
        {
          $days=15;  
        }
        else
        {
          $days = (strtotime($endDate) - strtotime($Checkincome->ttime)) / (60 * 60 * 24);   
        }
        
                 echo "<br>";
          echo "ID : ".$userName."<br>";
          echo "Days : ".$days;
        
          if($days>=15)
          {
               $data['remarks'] = 'Leadership Ranks and Rewards';
            $data['comm'] = $rewardDetail->amount;
            $data['level'] = $rewardDetail->level;
            $data['amt'] = $rewardDetail->amount;
            $data['invest_id']=$rewardDetail->id;
            $data['ttime'] = date("Y-m-d");
            $data['user_id_fk'] = $userName;
            $data['user_id']=$userID; 
          $income = Income::firstOrCreate(['remarks' => 'Leadership Ranks and Rewards','ttime'=>date("Y-m-d"),'user_id'=>$userID],$data);  
          }

         
           
        }
        
        
   


        }
    }
}




public function dynamicupicallback()
{
    
 
  
//   echo "Hello";
//   print_r($response);die();
         $response = file_get_contents('php://input');
          date_default_timezone_set('Asia/Kolkata');
          $day=date('l');
          $todays=date("Y-m-d");
         $result = json_decode($response, true);
           
         \DB::table('activities')->insert(['data' =>$response]);  
         if(!empty($result))
         {
             
             if($result['status']=="completed")
             {
                 
              $orderId= $result['order_number'];
              $username= $result['order_name'];
              $amount= $result['source_amount'];
              $updateTrue = Investment::where('orderId',$orderId)->where('status','Pending')->update(['status' => 'Active']);
           
           if($updateTrue)  
           {
            
             $user_detail=User::where('username',$username)->first();
              if ($user_detail->active_status=="Pending")
              {   
              $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$amount);
              User::where('id',$user_detail->id)->update($user_update);
            \DB::table('general_settings')->where('id',1)->update(['people_online'=>generalDetail()->people_online+1]);
            \DB::table('general_settings')->where('id',1)->update(['our_investors'=>generalDetail()->our_investors+1]);
             }
             else
             {
               $total=$user_detail->package+$amount;
                $user_update=array('package'=>$total,'active_status'=>'Active');
              User::where('id',$user_detail->id)->update($user_update); 
             }
                
                  
             \DB::table('general_settings')->where('id',1)->update(['total_fund_invested'=>generalDetail()->total_fund_invested+$amount]);
                  $plan ='BEGINNER';
   

                    
           }
           
                 
             }
             else
             {
                if($result['status']=="mismatch" && $result['amount'] >= $result['invoice_total_sum']) 
                {
                    
                         
              $orderId= $result['order_number'];
              $username= $result['order_name'];
              $amount= $result['source_amount'];
              $updateTrue = Investment::where('orderId',$orderId)->where('status','Pending')->update(['status' => 'Active']);
           
           if($updateTrue)  
           {
            
             $user_detail=User::where('username',$username)->first();
              if ($user_detail->active_status=="Pending")
              {   
              $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$amount);
              User::where('id',$user_detail->id)->update($user_update);
            \DB::table('general_settings')->where('id',1)->update(['people_online'=>generalDetail()->people_online+1]);
            \DB::table('general_settings')->where('id',1)->update(['our_investors'=>generalDetail()->our_investors+1]);
             }
             else
             {
               $total=$user_detail->package+$value->amount;
                $user_update=array('package'=>$total,'active_status'=>'Active');
              User::where('id',$user_detail->id)->update($user_update); 
             }
                
                  
             \DB::table('general_settings')->where('id',1)->update(['total_fund_invested'=>generalDetail()->total_fund_invested+$amount]);
                  $plan ='BEGINNER';
                

                    
           }
           
           
                    
                }
             }
             
         }
        
            
         
        
           
}


        public  function my_binary($userid){
        $arrin=array($userid);
        $ret=array();
        // print_r($arrin);die();
        while(!empty($arrin)){
         $alldown= User::select('id')->whereIn('Parentid',$arrin)->get()->toArray();
         if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[]=$arrin;
              
              
            }else{
                $arrin = array();
            } 
        }
        // continue;    
        $final = array();         
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }

        return $final;
        
    }  

        public  function team_by_position($userid,$position){
        $ret=array();
        $get_position_user=User::where('Parentid',$userid)->where('position',$position)->first();
        if($get_position_user){
        
            $ret=$this->my_binary($get_position_user->id);
            $ret[]=$get_position_user->id;
        }
       
        return $ret;
    }







   public function my_level_team_count($userid,$level=10){
        $arrin=array($userid);
        $ret=array();

        $i=1;
        while(!empty($arrin)){
            $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
            if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[$i]=$arrin;
                $i++;


            }else{
                $arrin = array();
            }
        }

        $final = array();
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }


        return $final;

    }

}
