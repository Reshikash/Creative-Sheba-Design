(function ($) {
    "use strict";

	
    // Data-Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

    // sticky
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

    // preloader
    $(window).on("load", function () {
        $(".preloader").delay(350).fadeOut('slow');
    });

    // mobile menu
	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger-menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});

	// portfolio active
	$('.portfolio_active').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	// portfolio active
	$('.portfolio_active_2').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});

	// testimonial active
	$('.testimonial_active').owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	// brand active
	$('.brand_active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		dots:false,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:2
			},
			500:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			}
		}
	})

	// blog post active
	$('.gallery_post_active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			}
		}
	})

	// skill bar
	if ($("#bar1").length) {
		$('#bar1').barfiller();
	}
	if ($("#bar2").length) {
		$('#bar2').barfiller();
	}
	if ($("#bar3").length) {
		$('#bar3').barfiller();
	}
	
	$(function() {
		$(".progress").each(function() {
		  var value = $(this).attr('data-value');
		  var left = $(this).find('.progress-left .progress-bar');
		  var right = $(this).find('.progress-right .progress-bar');
		  if (value > 0) {
			if (value <= 50) {
			  right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
			} else {
			  right.css('transform', 'rotate(180deg)')
			  left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
			}
		  }
		})
		function percentageToDegrees(percentage) {
		  return percentage / 100 * 360
		}
	  });
	
    // WoW Js
	new WOW().init();
    
	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// isotop
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		}
		});

	// filter items on button click
		$('.masonry_active').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.masonry_active button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// back to top - start
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
		$('#backtotop:hidden').stop(true, true).fadeIn();
		} else {
		$('#backtotop').stop(true, true).fadeOut();
		}
	});
	$(function() {
		$("#scroll").on('click', function() {
		$("html,body").animate({
			scrollTop: $("#thetop").offset().top
		}, "slow");
		return false
		})
	});
	// back to top - end

	// quantity - start
	(function() {
		window.inputNumber = function(el) {
		var min = el.attr("min") || false;
		var max = el.attr("max") || false;

		var els = {};

		els.dec = el.prev();
		els.inc = el.next();

		el.each(function() {
			init($(this));
		});

		function init(el) {
			els.dec.on("click", decrement);
			els.inc.on("click", increment);

			function decrement() {
			var value = el[0].value;
			value--;
			if (!min || value >= min) {
				el[0].value = value;
			}
			}

			function increment() {
			var value = el[0].value;
			value++;
			if (!max || value <= max) {
				el[0].value = value++;
			}
			}
		}
		};
	})();
	inputNumber($(".input_number"));
	// quantity - end

	// Accordion Box
	if ($(".accordion-box").length) {
		$(".accordion-box").on("click", ".acc-btn", function () {
		var outerBox = $(this).parents(".accordion-box");
		var target = $(this).parents(".accordion");

		if ($(this).next(".acc-content").is(":visible")) {
			$(this).removeClass("active");
			$(this).next(".acc-content").slideUp(300);
			$(outerBox).children(".accordion").removeClass("active-block");
		} else {
			$(outerBox).find(".accordion .acc-btn").removeClass("active");
			$(this).addClass("active");
			$(outerBox).children(".accordion").removeClass("active-block");
			$(outerBox).find(".accordion").children(".acc-content").slideUp(300);
			target.addClass("active-block");
			$(this).next(".acc-content").slideDown(300);
		}
		});
	}


})(jQuery);