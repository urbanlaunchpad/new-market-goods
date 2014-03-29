$(document).ready(function(){


//On goods.html (Product page example for now)		
//Add click event when user selects popover size 
//until can link with ecommerce backend
	$('.sizing-chart li').click(function() {
    $('.sizing-chart li').css({'background-color':'#ffffff', 'color':'#009DDC'});
		$(this).css({'background-color':'#009DDC', 'color':'white'});
	});

});