$.ajax({
	type:"get",
	url:"json/zhuyeshangpin.json",
	async:"true",
	success:function(response){
//		console.log(response);
		
		//遍历JSON
		$(response).each(function(_index0,_value0){
			var temp=response[_index0];
			console.log(temp);
			//遍历temp
			$(temp).each(function(_num1,_value1){
				//创建M-section
				var Msection=$('<div></div>').addClass('M-section');
				//创建标题
				var title=$('<div></div>').addClass('title').appendTo(Msection);
				var line=$('<div></div>').addClass('mid-line').appendTo(title);
				var p=$('<p></p>').html(_value1.title).appendTo(title);
				//创建shopNews
				var div1=$('<div></div>').addClass('shopNews').appendTo(Msection);
				//N1
				var N1=$('<div></div>').addClass('N1').appendTo(div1);
				var N1a1=$('<a></a>').appendTo(N1);
				var N1a2=$('<a></a>').appendTo(N1);
				var N1img1=$('<img/>').appendTo(N1a1);
				var N1img2=$('<img/>').appendTo(N1a2);
				
				
				//N2
				var N2=$('<div></div>').addClass('N2').appendTo(div1);
				//N3
				var N3=$('<div></div>').addClass('N3').appendTo(div1);
				var N3a1=$('<a></a>').appendTo(N3);
				var N3a2=$('<a></a>').appendTo(N3);
				
				
				
				var  N3img1=$('<img/>').appendTo(N3a1);
				var N3img2=$('<img/>').appendTo(N3a2);
				
				
				//遍历shop
				$(_value1.Shop).each(function(_num2,_element){
				
//				console.log(_element);
					
					
					
					//遍历N1src
					
					$(_element.N1src).each(function(_num3,_element3){
						
					N1img1.prop('src',_element3.src1);
					N1img2.prop('src',_element3.src2);
					N1a1.prop('href',_element3.href1);
					N1a2.prop('href',_element3.href2);	
						
					});
					//遍历N2src
					$(_element.N2src).each(function(_num4,_element4){
						var a1=$('<a></a>').prop('href',_element4.href1).appendTo(N2);
						
				var img1=$('<img/>').prop('src',_element4.src1).appendTo(a1);
				
						
						
					});
					//遍历N3src
					$(_element.N3src).each(function(_num5,_element5){
						
						N3img1.prop('src',_element5.src1);
						N3img2.prop('src',_element5.src2);
						N3a1.prop('href',_element5.href1);	
						N3a2.prop('href',_element5.href2);	
						
					});
				
				
				
				
				
			});
				
				$('#main').append(Msection);	
			});
			
			
			
		});
	}
});