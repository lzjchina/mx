$(function(){
	// 顶部菜单
$.ajax({
	url:"../json/top-menu.json",
	success:function(response){
//		console.log(response);
		$(response).each(function(_index,_value){
			var dl=$('<dl></dl>');
			var dt=$('<dt></dt>').appendTo(dl);
			var a1=$('<a></a>').prop('href',_value.groupHref).html(_value.groupName).appendTo(dt);
			
			//遍历组成员
			$(_value.member).each(function(_num,_element){
//				console.log(_element);
				var dd=$('<dd></dd>').appendTo(dl);
				var a2=$('<a></a>').prop('href',_element.memberHref).html(_element.memberName).appendTo(dd);
				
			});
			$('.top-menu-con').append(dl);
			
		});
		
		//鼠标移入t-menu
		$('.t-menu ').mouseover(function(){
			
			$('.top-menu-con').css('display','block');
		});
		//鼠标移出t-menu
		$('.t-menu ').mouseout(function(){
			$('.top-menu-con').css('display','none');
		});
		$('.top-menu-con').mouseover(function(){
			$(this).show();
			
			
		});
		$('.top-menu-con').mouseout(function(){
			$(this).hide();
			
		});
		
	}
});

$(document).scroll(function(){
	//原点距离顶端位置
	var H = $(document).scrollTop();
	var top=$('#top-search').css('top');
	
//	console.log(top);
	if(H>200){
		$('#top-search').css('display','block').css('top',H);	
		
	}else{
		$('#top-search').css('display','none');
	}
});


});



