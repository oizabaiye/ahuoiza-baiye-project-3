$(document).ready(function(){

	$('form').on('submit', function (event) {
		event.preventDefault();
		const optimistAnswer = $('input[name="optimist"]:checked').val();
		const outdoorsyAnswer = $('input[name="outdoorsy"]:checked').val();
		const dramaticAnswer = $('input[name="dramatic"]:checked').val();

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

		$('#submit-btn').hide();

		// scroll to results on submit 

		document.querySelector('.results').scrollIntoView({ 
			behavior: 'smooth' 
		});
		event.preventDefault();
	});
});
