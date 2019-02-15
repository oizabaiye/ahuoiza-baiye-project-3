

// $('form').on('submit', function (event) {
// 	event.preventDefault();
// 	let optimistAnswer = $('input[name="optimist"]:checked').val();
// 	console.log(optimistAnswer);
// })



//when user clicks submit
/* 
	check which button was clicked for Optimist, Outdoors and drama

	if Optimist radio is yes && outdoors is yes && drama is yes, console.log(double rainbow)

	if optimist.value === false, && outdoors.value === true, and drama.value === false,
	console.log(double rainbow)

	Seven more options
*/

//init - is most helpful with big applications and if you're doing namespacing

$(document).ready(function(){

	$('form').on('submit', function (event) {
		event.preventDefault();
		let optimistAnswer = $('input[name="optimist"]:checked').val();
		let outdoorsyAnswer = $('input[name="outdoorsy"]:checked').val();
		let dramaticAnswer = $('input[name="dramatic"]:checked').val();
		// console.log(optimistAnswer, outdoorsyAnswer, dramaticAnswer);

		if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'true')){
			console.log('You are double rainbow!');
		}


		//if true, true, true - double rainbow

		//if true, true, false - double rainbow

		//if true, false, true - leave britney

		//if true, false, false - snow fail

		//if false, true, true - double rainbow

		//false, false, true - leave britney

		//false, false, false - snow fail

		//fallback option(just in case)
	})
});
