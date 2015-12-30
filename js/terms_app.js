$(function (){
	$(document).on("click", ".terms-menu a", function(){
		if (!$(this).hasClass("active")) {
			$(".terms-menu a").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".terms-menu a").on("click", function(e){
		e.preventDefault();
		var url = this.href;

		$(".terms-menu a.active").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: url,
			dataType: "html",
			type: "GET",
			success: function(data){
				$(".bottom-main").html($(data).find(".bottom-inner-wrapper")).hide().fadeIn(500);
			}
		});
	});
});