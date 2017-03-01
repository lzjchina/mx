$(function() {
	//b01横幅
	$(document).ready(function(e) {

		var unslider01=$('#b01').unslider();
		data01 = unslider01.data('unslider');

	

	$('.unslider-arrow04').click(function() {

        var fn = this.className.split(' ')[1];

        data01[fn]();

    });

	});
		
});

