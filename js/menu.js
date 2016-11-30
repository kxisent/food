$(function(){
	var menu_choice = $('#menu-select').find('li');
	menu_choice.mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');

		var index = menu_choice.index(this);
		var menu_list = $('#menu-list').find('ul');
		menu_list.eq(index).show()
				 .siblings().hide();
	})
});