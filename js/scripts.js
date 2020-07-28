/**
 *	jQuery Document Ready
 */
jQuery(document).ready(function ($) {

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
		openResponsiveMenu();
	});

});
