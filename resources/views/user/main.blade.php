@include('layouts.upnl.header')
<style>
	a:hover {
    text-decoration: none;
    list-style: none;
}
</style>
	@if(isset($page) && $page != '')
		@include($page)
	@endif
	<!--end page-wrapper-->
	@include('layouts.upnl.footer')