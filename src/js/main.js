$(document).ready(function(){

	//=============MOBILE MENU==============
	$('#mobile-nav').click(function(){
		// console.log('hi');
		$('nav').append($('#nav-left'));
		$('#nav-right').remove('#nav-right-text');
		$('#nav-right-text').show();
		$('#nav-left').removeClass('span_5').addClass('span_12').append($('#nav-right-text')).slideToggle("slow");
	});


	//Reset mobile menu on brower window resize
	//NOT WORKING YET!
	function adaptMenu() {
		$('.rmm').each(function() {
			var $width = $(this).css('max-width');
			$width = $width.replace('px', ''); 
			if ( $(this).parent().width() < $width*1.05 ) {
				$(this).children('.rmm-main-list').hide(0);
				$(this).children('.rmm-toggled').show(0);
			}
			else {
				$(this).children('.rmm-main-list').show(0);
				$(this).children('.rmm-toggled').hide(0);
			}
		});	
	}

	$(window).resize(function() {
 		adaptMenu();
	});



	//On goods.html (Product page example for now)		
	//Add click event when user selects popover size 
	//until can link with ecommerce backend
	$('.sizing-chart li').click(function() {
	  $('.sizing-chart li').css({'background-color':'#ffffff', 'color':'#009DDC'});
		$(this).css({'background-color':'#009DDC', 'color':'white'});
	});

});