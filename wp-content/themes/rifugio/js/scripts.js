jQuery(window).on("load", function() {
	"use strict";


	/* -----------------------------------------
	 Reservation Datepicker
	 ----------------------------------------- */
	var resDate = jQuery('#ci_date');
	var resInlineDate = jQuery('.inline-datepicker');
	if ( resDate.length || resInlineDate.length ) {
		if( jQuery( window ).width() < 767 ) {
			resInlineDate.datetimepicker({
				ampm: true,
				dateFormat: 'DD, MM d, yy',
				timeFormat: 'hh:mm tt',
				stepMinute: 5,
				separator : ' @ ',
				altField  : resDate,
				altFieldTimeOnly: false
			});
		} else {
			resDate.datetimepicker({
				ampm: true,
				dateFormat: 'DD, MM d, yy',
				timeFormat: 'hh:mm tt',
				stepMinute: 5,
				separator : ' @ '
			});

		}
	}

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	var homeSlider = jQuery('.home-slider');
	if ( homeSlider.length ) {
		homeSlider.flexslider({
			controlNav: true,
			directionNav: false,
			prevText: '',
			nextText: '',
			animation: ThemeOption.slider_effect,
			direction: ThemeOption.slider_direction,
			slideshow: Boolean(ThemeOption.slider_autoslide),
			slideshowSpeed: Number(ThemeOption.slider_speed),
			animationSpeed: Number(ThemeOption.slider_duration),
			start: function(slider) {
				slider.removeClass('loading');
			}
		});
	}

	var testimonialSlider = jQuery('.testimonials');
		if ( testimonialSlider.length ) {
			testimonialSlider.flexslider({
				directionNav: false,
				prevText: '',
				nextText: ''
			});
		}

	// CI Carousel
	var ciCarousel = jQuery('.ci-carousel'),
			ciCarouselNav = jQuery('.ci-carousel-nav'),
			$window = jQuery(window);

	function getItemSize() {
    if ( $window.innerWidth() < 992 ) {
			return 100;
		} else {
			return 260;
		}
  }

	if ( ciCarousel.length ) {
		ciCarouselNav.flexslider({
			controlNav: false,
			animation: "slide",
			animationLoop: false,
			slideshow: false,
			itemWidth: getItemSize(),
			asNavFor: '.ci-carousel',
			nextText: '',
			prevText: ''
		});

		ciCarousel.flexslider({
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			sync: ".ci-carousel-nav",
			prevText: "",
			nextText: "",
			start: function(slider) {
				slider.removeClass('loading');
			}
		});
	}

	/* -----------------------------------------
	 Parallax
	 ----------------------------------------- */
	function initParallax() {
		jQuery('.parallax').each(function() {
			var $self = jQuery(this),
				offsetCoords = $self.offset(),
				yPos = 0,
				topOffset = offsetCoords.top,
				speed = jQuery(this).data('speed');

			$self.css('backgroundPosition', '50% 0');
			var lastScrollTop = 0,
				$window = jQuery(window);

			$window.scroll(function() {
				// If this section is in view
				if ( ($window.scrollTop() + $window.height()) > (topOffset) && (( topOffset + $self.height()) > $window.scrollTop() )) {

					var current = $self.css('backgroundPosition').split(" ");
					current = current[1].replace('px', '');

					var st = jQuery(this).scrollTop();
					if (st > lastScrollTop) {
						// Down
						yPos = (parseInt(current, 10) - speed);
						if ( yPos > $self.height() ) { yPos = $self.height(); }
					} else {
						// Up
						yPos = (parseInt(current, 10) + speed);
						if ( yPos > 0 ) { yPos = 0; }
					}
					lastScrollTop = st;

					var coords = '50% '+ yPos + 'px';

					// Move the background
					$self.css({ backgroundPosition: coords });
				}
			});
		});
	}

	if ( jQuery(window).width() > 767 ) {
		initParallax();
	}
});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Responsive Menus Init with mmenu
	 ----------------------------------------- */
	var mainNav = $("#navigation"),
			mobileNav = $("#mobilemenu");
	mainNav.clone().removeAttr('id').removeClass().appendTo(mobileNav);
	mobileNav.find('li').removeAttr('id');

	mobileNav.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		}
	});

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('#navigation').superfish({
		delay:       300,
		animation:   { opacity:'show', height:'show' },
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Responsive Videos with fitVids
	 ----------------------------------------- */
	$('body').fitVids();

	/* -----------------------------------------
	 Fancybox
	 ----------------------------------------- */
	$('a[data-rel^="fancybox"]').fancybox();

});