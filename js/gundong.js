$(function() {

			$.ajax({
					type: "get",
					url: "../json/zhengbeixuangou.json",
					async: "true",
					success: function(response) {
						//						alert(response);
						$(response).each(function(_index, _value){
								//创建M-section
								var Msection = $('<div></div>').addClass('M-section');
								//创建标题
								var title = $('<div></div>').addClass('title').appendTo(Msection);
								var line = $('<div></div>').addClass('mid-line').appendTo(title);
								var p = $('<p></p>').html(_value.title).appendTo(title);
								//创建shopNews
								var div1 = $('<div></div>').addClass('gundong').appendTo(Msection);
								//创建ul
								var ul=$('<ul></ul>').appendTo(div1);
								//遍历shop
								$(_value.Shop).each(function(_num,_element){
//									alert(_element);
									var li=$('<li></li>').appendTo(ul);
									var a=$('<a></a>').prop('href',_element.href).appendTo(li);
									var img=$('<img />').prop('src',_element.src).appendTo(a);
								});
								$('#main').append(Msection);

						});
						}
					});

				var num = 0;

				var timer2 = null; startTimer2();

				var width = $('.gundong ul').css('width');
				//				console.log(width);
				//点击last
				$('.gundong .g-left').click(function() {

					num = num - 160;
					$('.gundong ul').css('left', num);

				}); $('.gundong .g-right').click(function() {

					num = num + 160;
					$('.gundong ul').css('left', num);

				});
				//开启时钟
				function startTimer2() {
					if(timer2 == null) {
						timer2 = setInterval(function() {
							$('.gundong ul').css('left', num);

							num = num - 160;
							if(num <= -1600) {
								num = 0;
							}

						}, 5000);
					}
				}
				// 关闭时钟
				function stopTimer2() {
					clearInterval(timer2);
					timer2 = null;
				}
				
				
				
			});