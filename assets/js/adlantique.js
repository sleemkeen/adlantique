function listen (...args) {
	return $("body").on(...args);
}

function live (...args) {
	$(window).on(...args);
}

function getBackgroundSizes() {
	$("[data-background-size]").each(function(index, element) {
		var target = $(this).data("background-size");
		$(this).css({
			backgroundSize() {
				return  $(target).outerWidth();
			}
		});
	});
}

$(function() {

	var hash = window.location.hash;
	if (!!hash && $(".tab-pane").length) {
		$(hash).tab("show");
		$(`[href="${hash}"], [data-toggle="${hash}"]`).tab("show");
	}

	listen("shown.bs.tab", function(event) {
		window.location.hash = event.target.hash;
	});

	getBackgroundSizes();

	
	if ($.fn.select2) {
		$(".select2").select2({
			minimumResultsForSearch: -1,
			templateResult: state => state.text
		});	
	}
	
	

});

live("resize", function() {
	getBackgroundSizes()
});

live("scroll resize", function() {
	var navbar = $('.navbar');
	if ($(window).scrollTop() > 30) {
		navbar.addClass("navbar-sticky");
	} else {
		navbar.removeClass("navbar-sticky");
	}
});