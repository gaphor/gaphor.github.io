/**
 *	jQuery Document Ready
 */
jQuery(document).ready(function ($) {

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

	// Called Functions
	$(function () {
		smoothScrollAnchors();
		openResponsiveMenu();
	});

});
