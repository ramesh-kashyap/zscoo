<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    .pagination {
  margin: 0;
  padding: 0;
  text-align: center
}
.pagination li {
  display: inline
}
.pagination li a {
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
  color: #000
}

/* Active and Hoverable Pagination */
.pagination li a {
  border-radius: 5px;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s
    
}
.pagination li a.active {
  background-color: #4caf50;
  color: #fff
}
.pagination li a:hover:not(.active) {
  background-color: #ddd;
} 

.pagination .page-item .page-link:hover {
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    border-radius: .125rem;
    background-color: #eee;
}
.pagination.pg-blue .page-item.active .page-link:hover {
    background-color: #2bbbad;
}
.pagination .page-item.active .page-link {
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
    border-radius: .125rem;
    background-color: #8855ff;
    color: #fff;
}
.pagination .page-item .page-link {
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    outline: 0;
    border: 0;
    background-color: transparent;
    font-size: 11px;
    color: black;
}
.pagination .page-item.active .page-link{
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    padding: 7px;
}
.page-link{
  border:none!important;
}
.page-link:focus {
    z-index: 2;
    outline: 0;
    box-shadow: 0;
}


</style>