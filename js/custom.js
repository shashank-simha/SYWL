(function($) {
	'use strict';
	$(document).ready(function() {
		/*
		Jquery Mobile Menu
		============================*/
		$('#main-menu').meanmenu({
			meanScreenWidth: '767',
			meanMenuContainer: '.mobile-nav-menu'
		});
		/*
		Accordion Active JS
		============================*/
		$('.panel-heading a').on('click', function() {
			$('.panel-heading').removeClass('active');
			if (
				!$(this)
					.closest('.panel')
					.find('.panel-collapse')
					.hasClass('in')
			)
				$(this)
					.parents('.panel-heading')
					.addClass('active');
		});
		/*
		Testimonial Crousel
		============================*/

		$('.all-testimonial').owlCarousel({
			autoplay: false,
			pagination: false,
			nav: true,
			navText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
			dots: true,
			items: 1,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});

		/*
		Slider Crousel
		============================*/

		$('.all-slide').owlCarousel({
			items: 1,
			nav: false,
			dots: true,
			autoplay: true,
			loop: false,
			navText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
			mouseDrag: true,
			touchDrag: true
		});

		$('.all-slide').on('translate.owl.carousel', function() {
			$('.top-text')
				.removeClass('animated slideInLeft')
				.css('opacity', '0');
			$('.slider-text h1')
				.removeClass('animated lightSpeedIn')
				.css('opacity', '0');
			$('.slider-text p')
				.removeClass('animated slideInLeft')
				.css('opacity', '0');
			$('.slider-text ul')
				.removeClass('animated slideInRight')
				.css('opacity', '0');
		});

		$('.all-slide').on('translated.owl.carousel', function() {
			$('.top-text')
				.addClass('animated slideInLeft')
				.css('opacity', '1');
			$('.slider-text h1')
				.addClass('animated lightSpeedIn')
				.css('opacity', '1');
			$('.slider-text p')
				.addClass('animated slideInLeft')
				.css('opacity', '1');
			$('.slider-text ul')
				.addClass('animated slideInRight')
				.css('opacity', '1');
		});

		/*
		Scrolling Js
		============================*/

		$.scrollIt({
			upKey: 38, // key code to navigate to the next section
			downKey: 40, // key code to navigate to the previous section
			easing: 'swing', // the easing function for animation
			scrollTime: 600, // how long (in ms) the animation takes
			activeClass: 'active', // class given to the active nav element
			onPageChange: null, // function(pageIndex) that is called when page is changed
			topOffset: 0 // offste (in px) for fixed top navigation
		});

		/*
		scrollUp
		============================*/

		$.scrollUp({
			scrollText: '<i class="fa fa-arrow-circle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});

		/*
		Stikey Js
		============================*/

		(function() {
			var nav = $('.hd-sec');
			var scrolled = false;
			$(window).scroll(function() {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({
						'margin-top': '0px'
					});
					scrolled = true;
				}
				if (120 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css(
						'margin-top',
						'0px'
					);
					scrolled = false;
				}
			});
		})();

		/*
		Magnific Popup
		============================*/

		$('.view').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
		/*
		Google Map Js
		============================*/

		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);
		function init() {
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(55.378052, -3.435973),

				// How you would like to style the map.
				styles: [
					{
						featureType: 'all',
						elementType: 'labels.text.fill',
						stylers: [
							{ saturation: 36 },
							{ color: '#000000' },
							{ lightness: 40 }
						]
					},
					{
						featureType: 'all',
						elementType: 'labels.text.stroke',
						stylers: [
							{ visibility: 'on' },
							{ color: '#000000' },
							{ lightness: 16 }
						]
					},
					{
						featureType: 'all',
						elementType: 'labels.icon',
						stylers: [{ visibility: 'off' }]
					},
					{
						featureType: 'administrative',
						elementType: 'geometry.fill',
						stylers: [{ color: '#000000' }, { lightness: 20 }]
					},
					{
						featureType: 'administrative',
						elementType: 'geometry.stroke',
						stylers: [
							{ color: '#000000' },
							{ lightness: 17 },
							{ weight: 1.2 }
						]
					},
					{
						featureType: 'landscape',
						elementType: 'geometry',
						stylers: [{ color: '#000000' }, { lightness: 20 }]
					},
					{
						featureType: 'poi',
						elementType: 'geometry',
						stylers: [{ color: '#000000' }, { lightness: 21 }]
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.fill',
						stylers: [{ color: '#000000' }, { lightness: 17 }]
					},
					{
						featureType: 'road.highway',
						elementType: 'geometry.stroke',
						stylers: [
							{ color: '#000000' },
							{ lightness: 29 },
							{ weight: 0.2 }
						]
					},
					{
						featureType: 'road.arterial',
						elementType: 'geometry',
						stylers: [{ color: '#000000' }, { lightness: 18 }]
					},
					{
						featureType: 'road.local',
						elementType: 'geometry',
						stylers: [{ color: '#000000' }, { lightness: 16 }]
					},
					{
						featureType: 'transit',
						elementType: 'geometry',
						stylers: [{ color: '#000000' }, { lightness: 19 }]
					},
					{
						featureType: 'water',
						elementType: 'geometry',
						stylers: [{ color: '#000000' }, { lightness: 17 }]
					}
				]
			};

			// Get the HTML DOM element that will contain your map
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map_id');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			// Let's also add a marker while we're at it
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(55.378052, -3.435973),
				map: map,
				title: 'UK!'
			});
		}

		/*
		Preeloader
		============================*/
		$(window).on('load', function() {
			$('#preloader').fadeOut();
			$('#preloader-status')
				.delay(200)
				.fadeOut('slow');
			$('body')
				.delay(200)
				.css({ 'overflow-x': 'hidden' });
		});
		/*
		Countdown Menu
		============================*/
		const countdown = new Date('May 7, 2021');
		function getRemainingTime(endtime) {
			const milliseconds = Date.parse(endtime) - Date.parse(new Date());
			const seconds = Math.floor((milliseconds / 1000) % 60);
			const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
			const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
			const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
			return {
				total: milliseconds,
				seconds: seconds,
				minutes: minutes,
				hours: hours,
				days: days
			};
		}

		function initClock(id, endtime) {
			const counter = document.getElementById(id);
			const daysItem = counter.querySelector('.days');
			const hoursItem = counter.querySelector('.hours');
			const minutesItem = counter.querySelector('.minutes');
			const secondsItem = counter.querySelector('.seconds');

			function updateClock() {
				const time = getRemainingTime(endtime);
				daysItem.innerHTML = time.days;
				hoursItem.innerHTML = ('0' + time.hours).slice(-2);
				minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
				secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

				if (time.total <= 0) {
					clearInterval(timeinterval);
				}
			}
			updateClock();
			const timeinterval = setInterval(updateClock, 1000);
		}
		initClock('js-countdown', countdown);
	});
})(jQuery);
