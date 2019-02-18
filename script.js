
//init - is most helpful with big applications and if you're doing namespacing

$(document).ready(function(){

	$('form').on('submit', function (event) {
		event.preventDefault();
		let optimistAnswer = $('input[name="optimist"]:checked').val();
		let outdoorsyAnswer = $('input[name="outdoorsy"]:checked').val();
		let dramaticAnswer = $('input[name="dramatic"]:checked').val();

		if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'true')){
			$(".double-rainbow").removeClass("hidden").addClass("show");
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'false')){
			$(".double-rainbow").removeClass("hidden").addClass("show");
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'true')){
			$(".leave-britney").removeClass("hidden").addClass("show");
		} else if ((optimistAnswer === 'true') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'false')){
			$(".snow-fail").removeClass("hidden").addClass("show");
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'true')){
			$(".double-rainbow").removeClass("hidden").addClass("show");
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'true') && (dramaticAnswer === 'false')){
			$(".snow-fail").removeClass("hidden").addClass("show");		
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'true')){
			$(".leave-britney").removeClass("hidden").addClass("show");
		} else if ((optimistAnswer === 'false') && (outdoorsyAnswer === 'false') && (dramaticAnswer === 'false')){
			$(".snow-fail").removeClass("hidden").addClass("show");
		} 
	});
});

/* 
normal state - each div is on display: none. 
there is a class called .show{display: block}



*/