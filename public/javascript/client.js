var index = "http://localhost:3000";
$(document).ready(function(){
	

	$('button').click(function(){
		var url = './' + $(this).data('id') + '/' + $(this).attr('class');
		console.log(url);

		$.ajax({
			method: 'POST',
			url: url
		}).done(function(res) {
			if (!res) console.log('error');
			window.location = index;
		});

	});


})