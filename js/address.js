$(function(){
	$.validator.setDefaults({
				submitHandler: function() {
					alert("提交事件!");
				}
			});
			$().ready(function() {
				$("#commentForm").validate();
			});
			
	$('.sendOther').click(function(){
		$('.othersInfo').toggle();
	});
	
	$('.pack1').click(function(){
		$('.tu1').toggle();
		$('.tu2').hide();
		$('.tu3').hide();
	});
	$('.pack2').click(function(){
		$('.tu2').toggle();
		$('.tu1').hide();
		$('.tu3').hide();
	});
	$('.pack3').click(function(){
		$('.tu3').toggle();
		$('.tu2').hide();
		$('.tu1').hide();
	});
});
