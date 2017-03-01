$(function(){
				var num=0;
				
				var timer2=null;
				startTimer2();
				
				var width=$('#gundong ul').css('width');
//				console.log(width);
				//点击last
				$('#gundong .g-left').click(function(){
					
					num=num-160;
					$('#gundong ul').css('left',num);
					
					
					
				});
				$('#gundong .g-right').click(function(){
					
					num=num+160;
					$('#gundong ul').css('left',num);
					
					
				});
				//开启时钟
				function startTimer2(){
					if(timer2==null){
						timer2=setInterval(function(){
							$('#gundong ul').css('left',num);
							
							num=num-160;
							if(num<=-1600){
								num=0;
							}

						},5000);
					}
				}
				// 关闭时钟
				function stopTimer2(){
					clearInterval(timer2);
					timer2 = null;
				}
});
