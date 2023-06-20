		$(window).scroll(function() {    
		    var scroll = $(window).scrollTop();    
		    if (scroll >= 0.6 * $(window).height()) {
		        $("#navbar").addClass('sticky');
		    } else {
		        $("#navbar").removeClass('sticky');
		    }
		});

		$(document).ready(function() {

	    	$(".about-us").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#about-us").offset().top
			    }, 600);
			});

			$(".services").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#services").offset().top
			    }, 600);
			});
			$(".portfolio").click(function() {
			    $('html, body').animate({
			        scrollTop: $("#portfolio").offset().top
			    }, 600);
			});
			$(".testimonials").click(function(){
				$('html, body').animate({
					scrollTop: $("#our-testimonials").offset().top
				}, 600);
			});
			$(".teams").click(function(){
				$('html, body').animate({
					scrollTop: $("#teams").offset().top
				}, 600);
			});
			$(".contact-us").click(function(){
				$('html, body').animate({
					scrollTop: $("#getintouch").offset().top
				}, 600);
			});
		});