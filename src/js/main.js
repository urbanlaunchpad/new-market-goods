$(document).ready(function(){

//=============HOMEPAGE ANIMATIONS==============
	//FABRIC02
	$('#fabric02').hover(function () {
			// $('#fabric02_text').css({'bottom':'0%', 'padding-top':'.5em'});
			$('#fabric02_text').slideToggle('slow');

			// console.log('foo');	
	});



//On goods.html (Product page example for now)		
//Add click event when user selects popover size 
//until can link with ecommerce backend
	$('.sizing-chart li').click(function() {
    $('.sizing-chart li').css({'background-color':'#ffffff', 'color':'#009DDC'});
		$(this).css({'background-color':'#009DDC', 'color':'white'});
	});

});