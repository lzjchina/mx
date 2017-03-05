$(function(){
	$.ajax({
		type:"get",
		url:"../json/MyMC.json",
		async:"true",
		success:function(response){
			$(response).each(function(_index,_value){
				var dl=$('<dl></dl>');
				var dt=$('<dt></dt>').appendTo(dl);
				var a1=$('<a></a>').prop('href',_value.href).appendTo(dt);
				var img=$('<img />').prop('src',_value.img).appendTo(a1);
				var dd=$('<dd></dd>').appendTo(dl);
				var a2=$('<a></a>').prop('href',_value.href).html(_value.name).appendTo(dd);
				
				$('.likeShop').append(dl);
			});
		}
	});
});
