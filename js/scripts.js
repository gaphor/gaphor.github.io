/**
 *	jQuery Document Ready
 */
jQuery(document).ready(function ($) {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var documentWidth = $(document).width();
	var documentHeight = $(document).height();

	// If is IOS
	function isIsIOS() {
		$.browser.device = (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
		if ($.browser.device == true) {
			$('#counter').css('background-attachment', 'scroll');
			$('#testimonials').css('background-attachment', 'scroll');
		}
	}

	// Smooth Scroll Anchors
	function smoothScrollAnchors() {
		$('body:not(.single-product) a[href*="#"]:not([href="#"])').on('click', function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	}

	// Open Responsive Menu
	function openResponsiveMenu() {
		$('.open-responsive-menu').click(function () {
			$('.responsive-menu').toggle('slow', function () {
				$(this).toggleClass('active');
			});
		});
	}

	// Add Height To Front Page
	function addHeightToFrontPageProject() {
		var project = $('#projects .project');
		var projectWidth = $(project).width();

		$(project).css('height', projectWidth);
	}

	// Set Color on Front Page Service
	function setColorOnFrontPagePerson() {
		if ($('#team .section-content .person').length) {
			$('#team .section-content .person').each(function () {
				var person = $(this);
				var dataPersonColor = $(person).data('person-color');
				var personPosition = $(person).children('.person-content').children('.person-position');
				var personContentSocial = $(person).children('.person-content').children('.person-content-social.clearfix').children('li').children('a');

				$(personPosition).css('color', dataPersonColor);
				$(personContentSocial).css({ 'border-color': dataPersonColor, "color": dataPersonColor });
			});
		}
	}


	// Called Functions
	$(function () {
		isIsIOS();
		smoothScrollAnchors();
		openResponsiveMenu();
		addHeightToFrontPageProject();
		setColorOnFrontPagePerson();
	});

	// Window Resize
	$(window).resize(function () {
		// Called Functions
		$(function () {
			addHeightToFrontPageProject();
		});
	});
});

if (jQuery('.blog-carousel > .illdy-blog-post').length > 3) {
	jQuery('.blog-carousel').owlCarousel({
		'items': 3,
		'loop': true,
		'dots': false,
		'nav': true,
		'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		responsive: { 0: { items: 1 }, 480: { items: 2 }, 900: { items: 3 } }
	});
}
