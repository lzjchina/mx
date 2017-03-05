$(function(){
	
	$(document).scroll(function(){
		var H=$(document).scrollTop();
		
		
		if(H>=900){
			$('.Tab-buy').css('display','block');
			
		
			
		}else{
			$('.Tab-buy').css('display','none');
		}
	});
	
	$('.a1').click(function(){
		$(this).addClass('active');
		$('.a2').removeClass('active');
		$('#pssh').hide();
		$('#spxq').show();
	});
	$('.a2').click(function(){
		$(this).addClass('active');
		$('.a1').removeClass('active');
		$('#pssh').show();
		$('#spxq').hide();
	});
});
