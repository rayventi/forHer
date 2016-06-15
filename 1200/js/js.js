$(function() {
	$('li').bind('click', function(){
			$(this).addClass('select').siblings().removeClass('select');
	});
})
