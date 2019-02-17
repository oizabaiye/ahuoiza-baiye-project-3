
//init - is most helpful with big applications and if you're doing namespacing

$(document).ready(function(){

	$('form').on('submit', function (event) {
		event.preventDefault();
		let optimistAnswer = $('input[name="optimist"]:checked').val();
		let outdoorsyAnswer = $('input[name="outdoorsy"]:checked').val();
		let dramaticAnswer = $('input[name="dramatic"]:checked').val();

		if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'false')){
			console.log('You are double rainbow!');
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'false')){
			console.log('You are double rainbow!');
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'true')){
			console.log('You are leave britney alone!');
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'false')){
			console.log('You are snow fail!');
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'true')){
			console.log('You are double rainbow!');
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'false')){
			console.log('You are snow fail!');		
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'true')){
			console.log('You are leave britney alone!');
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'false')){
			console.log('You are Snow Fail!');
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'true')){
			console.log('You are double rainbow!');
		}
	});
});
