// @import "js/scrolltop.js";

$(function(){

	$('#backtop').on('click',move);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	checkPosition($(window).height());

	function move(){
		$('html,body').animate({
			'scrollTop':0
		},800);
	};

	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#backtop').fadeIn();
		}else{
			$('#backtop').fadeOut();
		}
	};
});