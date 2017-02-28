$(function(){
	//头部导航部分
	$('.nav a').mouseover(function(){
		$(this).css('background','#8e0c3a').css('color','white').siblings().css('background','').css('color','black');
	});
	$('.h-sec-three').mouseout(function(){
		$('.nav li a').css('background','');
		$('.nav li a').css('color','black');
	});
});
