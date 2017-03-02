$(function() {
	//头部导航部分
	//鼠标输入
	$('.nav a').mouseover(function() {
		$('.menu').html('');
		$(this).css('background', '#8e0c3a').css('color', 'white').siblings().css('background', '').css('color', 'black');





		//菜单ajax
		$.ajax({
			url: "json/menu.json",
			success: function(response) {
				//			console.log(response);
				$(response).each(function(_index, _value) {
					//遍历组名
					$(_value.group).each(function(_num1, _group) {
						var dl = $('<dl></dl>').addClass('menu-con');
						var dt = $('<dt></dt>').appendTo(dl);

						//				console.log(_group);
						$(_group.groupName).each(function(_num2, _groupName) {
							//					console.log(_groupName);
							//					console.log(_groupName.name);

							var a1 = $('<a></a>').css('display', 'block').prop('href', _group.groupHref).html(_groupName.name).appendTo(dt);

						});
						$(_group.member).each(function(_num3, _member) {
							var dd = $('<dd></dd>').appendTo(dl);
							var a2 = $('<a></a>').prop('href', _member.memberHref).html(_member.memberName).appendTo(dd);

						});
						$('.menu').append(dl);
						//显示
						$('.menu').show();
						
					});
				});

			}

		});
		//鼠标移出
		$('.h-sec-three').mouseout(function() {
			$('.nav li a').css('background', '');
			$('.nav li a').css('color', 'black');
			
			$('.menu').hide();
		});
	});
	
	//移入菜单
	$('.menu').mouseover(function(){
			$('.menu').show();
			
	});
	//移出菜单
	$('.menu').mouseout(function(){
			$('.menu').hide();
			
	});
});