$(function (){
	var clickedTopic,
		currentTeamTopic,
		tap = ("ontouchstart" in document.documentElement);

	$("li").filter(".checked").on("click", function(){
		$(this).addClass("checked-color");
	});

	if(!tap){
		$(document).on("mouseenter", ".topic-inner-wrapper", function(){
			currentTeamTopic = $(this);
			currentTeamTopic.find(".enter-topic").nextAll().fadeIn(200);
		});
		$(document).on("mouseleave", ".topic-inner-wrapper", function(){
			currentTeamTopic.find(".enter-topic").nextAll().fadeOut(200);		
		});
		$(document).on("click", ".topic-list", function(){
			clickedTopic = $(this).text();
			currentTeamTopic.find(".enter-topic").nextAll().fadeOut(200);
			currentTeamTopic.find(".enter-topic").empty().css({"padding-top":"5px",
																"background":"#363636"}).text(clickedTopic);	
		});
	}
	else{
		$(document).on("click", ".enter-topic", function(){
			currentTeamTopic = $(this);
			currentTeamTopic.nextAll().fadeIn(200);
		});
		$(document).on("click", ".topic-list", function(){
			clickedTopic = $(this).text();
			currentTeamTopic.nextAll().fadeOut(200);
			currentTeamTopic.empty().css({"padding-top":"5px",
																"background":"#363636"}).text(clickedTopic);	
		});
	}

	$(document).on("click", ".topic-list", function(){
		clickedTopic = $(this).text();
		currentTeamTopic.find(".enter-topic").nextAll().fadeOut(200);
		currentTeamTopic.find(".enter-topic").empty().css({"padding-top":"5px",
															"background":"#363636"}).text(clickedTopic);	
	});
	
});