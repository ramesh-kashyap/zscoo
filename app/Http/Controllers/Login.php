<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Redirect;
use App\Models\PasswordReset;
use App\Models\User;
use App\Models\UserLogin;

use DB;
class Login extends Controller
{


    public function login(Request $request)
    {

            $validation =  Validator::make($request->all(), [
                'phone' => 'required|unique:users',
                'password' => 'required|string',

            ]);

       
          if (isset($request->captcha)) {
                if (!captchaVerify($request->captcha, $request->captcha_secret)) {
                    $notify[] = ['error', "Invalid Captcha"];
                    return back()->withNotify($notify)->withInput();
                }
            }
            
            $post_array  = $request->all();
            $credentials = $request->only('phone', 'password');



            if (Auth::attempt($credentials)) {
                $user = Auth::user();

                if($user->active_status=="Block")
                {
                Auth::logout();
               return Redirect::back()->withErrors(array('You are Blocked by admin'));
                }
                
                if(empty($user->country))
                {
                     \DB::table('users')->where('id',$user->id)->update(['country' =>$request->country,'dialCode' =>$request->dialCode,'country_iso' =>$request->country_iso]);
                }

                return redirect()->route('user.dashboard');

              // echo "credentials are invalid"; die;
            }
            else
            {
                // echo "credentials are invalid"; die;
                return Redirect::back()->withErrors(array('Invalid Username & Password !'));
            }

        }



    public function forgot_password()
    {

    return view('auth.passwords.forgot-password');

    }

    public function logout()
    {
        Auth::logout();

        request()->session()->invalidate();

        $notify[] = ['success', 'You have been logged out.'];
        return redirect()->route('login')->withNotify($notify);
    }

    public function sendforgot(Request $request)
    {
        $code = verificationCode(6);
      
        $emailId = $request->emailId;
        
       
        PasswordReset::where('email', $emailId)->delete();

        $password = new PasswordReset();
        $password->email = $emailId;
        $password->token = $code;
        $password->created_at = \Carbon\Carbon::now();
        $password->save();

        //    sendEmail($emailId, 'Your One-Time Password', [
        //     'name' => $user->name,
        //     'code' => $code,
        //     'purpose' => 'Change Password',
        //     'viewpage' => 'one_time_password',

        //  ]);

       return true;
    }
   



    public function forgot_password_submit(Request $request)
    {
         $validation =  Validator::make($request->all(), [
                'phone' => 'required|unique:users',
                'email' => 'required',
                'code' => 'required',
                'password' => 'required|confirmed',

            ]);
            
        $credentials = User::where('phone',$request->phone)->where('email',$request->email)->first();

        if ($credentials)
        {

          
           $code = $request->code;

          
            if (PasswordReset::where('token', $code)->where('email', $request->email)->count() != 1) {
                $notify[] = ['error', 'Invalid token'];
                return redirect()->route('forgot-password')->withNotify($notify);
            }

            $password = password_hash($request->password, PASSWORD_DEFAULT);

            $credentials->password=$password;
            $credentials->PSR=$request->password;
            $credentials->save();
            $notify[] = ['success', 'Your Password change Successfully.'];
            return redirect()->route('login')->withNotify($notify);
        }
        else{
            $notify[] = ['error', 'Invalid Username '];
            return redirect()->route('forgot-password')->withNotify($notify);
        }



    }

    public function codeVerify(){
        $page_title = 'Account Recovery';
        $userID = session()->get('pass_res_mail');

        $user_name = session()->get('username');

        if (!$userID) {
            $notify[] = ['error','Opps! session expired'];
            return redirect()->route('forgot-password')->withNotify($notify);
        }

        return view('auth.passwords.confirm',compact('page_title','userID','user_name'));
    }


    public function verifyCode(Request $request)
    {
        $request->validate(['code' => 'required', 'userID' => 'required']);
        $code = $request->code;
        $userDetail=User::where('id',$request->userID)->first();

        if (PasswordReset::where('token', $code)->where('email', $userDetail->email)->count() != 1) {
            $notify[] = ['error', 'Invalid token'];
            return redirect()->route('forgot-password')->withNotify($notify);
        }
        $notify[] = ['success', 'You can change your password.'];
        session()->flash('fpass_email', $request->userID);
        session()->put('resetMail',$request->userID);
        return redirect()->route('resetPassword', $code)->withNotify($notify);
    }


    public function resetPassword()
    {
        $page_title = "Forgot Password";
    //   dd("hi");
        return view('auth.passwords.resetPassword', compact('page_title'));
    }

   public function loginPage()
    {
    
        return view('auth.login');
    }



    public function submitResetPassword(Request $request)
    {

    $request->validate(['password' => 'required|confirmed|min:5']);

       $userID = session()->get('resetMail');

    //    dd($userID);
    //    die;

       $user_name = session()->get('username');

       $user = User::where('id',$userID)->orderBy('id', 'DESC')->first();


       if (!$user) {
        $notify[] = ['error','Opps! session expired'];
        return redirect()->route('forgot-password')->withNotify($notify);
       }
       $password = password_hash($request->password, PASSWORD_DEFAULT);

       $user->password=$password;
       $user->PSR=$request->password;
       $user->save();
       $notify[] = ['success', 'Your Password change Successfully.'];
       return redirect()->route('login')->withNotify($notify);

    }



}
