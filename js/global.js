/* ************************************************
**************************************************

Website Name: BorderX Lab
Website URL: borderxlab.com
Website Author: Aaron Cheng
Author URL: chengfolio.com
Copyright 2014. All Rights Reserved.

************************************************ */

/* ***********************************************
*************************************************
0. General -------------------- All Files
*************************************************
*********************************************** */

$(document).ready(function(){	
/*----------------------------------------------
------------------------------------------------
0. General
------------------------------------------------
----------------------------------------------*/	
	$(".btn__menu_expand").on('tap', function(){


		if ($(".nav__menu--mobile").css("display") == "none") {
			$(".nav__menu--mobile").css("display","block");
		} else {
			$(".nav__menu--mobile").css("display","none");
		}
	});

	$(".privacy_policy__btn--close").on('tap', function(){

		$(".privacy_policy").css("display","none");

	});

	$(".privacy_policy__btn--open").on('tap', function(){
		
		$(".privacy_policy").css("display","block");

	});
/*----------------------------------------------
------------------------------------------------
1. Home Page js
------------------------------------------------
----------------------------------------------*/	

});