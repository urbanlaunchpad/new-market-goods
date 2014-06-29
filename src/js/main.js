$(document).ready(function(){

	//=============MOBILE MENU==============
	var navClone = $('nav').clone();

	$('#mobile-nav').click(function(){
		mobileMenu();
	});

	function mobileMenu() {
		$('nav').append($('#nav-left'));
		// $('#nav-right').remove('#nav-right-text');
		// $('#nav-right-text').show();
		$('#nav-left').removeClass('nav_span5').addClass('nav_span12').append($('#nav-right-text')).slideToggle("slow");
		
		//Reset mobile menu on brower window resize
		//Not quite functional yet
		$(window).resize(function(navClone){	
			if ($('#mobile-nav').css('display') == "none" ){
				$('#nav-left').removeClass('nav_span12').addClass('nav_span5').remove('#nav-right-text');
				$('nav').prepend($('#nav-left'));
				$('#nav-right').prepend($('#nav-right-text'));
				// $('nav').replaceWith(navClone.clone());

			}
			else {
				// $('#nav-left, #nav-right').hide();
			}
		});
	}


	// function adaptMenu() {
	// 	$('.rmm').each(function() {
	// 		var $width = $(this).css('max-width');
	// 		$width = $width.replace('px', ''); 
	// 		if ( $(this).parent().width() < $width*1.05 ) {
	// 			$(this).children('.rmm-main-list').hide(0);
	// 			$(this).children('.rmm-toggled').show(0);
	// 		}
	// 		else {
	// 			$(this).children('.rmm-main-list').show(0);
	// 			$(this).children('.rmm-toggled').hide(0);
	// 		}
	// 	});	
	// }



	//On goods.html (Product page example for now)		
	//Add click event when user selects popover size 
	//until can link with ecommerce backend
	$('.sizing-chart li').click(function() {
	  $('.sizing-chart li').css({'background-color':'#ffffff', 'color':'#009DDC'});
		$(this).css({'background-color':'#009DDC', 'color':'white'});
	});

});