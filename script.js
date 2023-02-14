// Add smooth scrolling to anchor links
$('a[href^="#"]').on('click', function(event) {
	event.preventDefault();
	var target = this.hash;
	var $target = $(target);

	$('html, body').animate({
		scrollTop: $target.offset().top
	}, 1000);
});

// Toggle mobile navigation menu
$('.toggle-menu').on('click', function() {
	$('.menu').slideToggle();
});
