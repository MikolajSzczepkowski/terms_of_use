$(function (){
	$(document).on("click", ".terms-menu a", function(){
		if (!$(this).hasClass("active")) {
			$(".terms-menu a").removeClass("active");
			$(this).addClass("active");
		}
	});
});