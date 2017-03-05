$(function(){
	//点击单品
	$('.danpin').click(function(){
		$(this).addClass('onclick');
		$('.pinpai').removeClass('onclick');
		$('#dpcontent').show();
		$('#ppcontent').hide();
	});
	//点击品牌
	$('.pinpai').click(function(){
		$(this).addClass('onclick');
		$('.danpin').removeClass('onclick');
		$('#ppcontent').show();
		$('#dpcontent').hide();
	});
	
	//点击订阅全部
	$('.clickAll').click(function(){
		$('form input').prop('checked','checked');
		
	});
	//点击取消订阅
	$('.del').click(function(){
		$('form input').prop('checked','');
	});
});
