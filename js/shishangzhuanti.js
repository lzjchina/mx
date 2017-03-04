$.ajax({
					type: "get",
					url: "json/shishangzhuanti.json",
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
								var div1 = $('<div></div>').addClass('shopNews').appendTo(Msection);
								
								//遍历shop
								$(_value.Shop).each(function(_num,_element){
//									alert(_element);
									var divM=$('<li></li>').addClass('M1').appendTo(div1);
									var a=$('<a></a>').prop('href',_element.href).appendTo(divM);
									var img=$('<img />').prop('src',_element.src).appendTo(a);
									var p=$('<p></p>').html(_element.p).appendTo(divM);
								});
								$('#main').append(Msection);

						});
						}
					});