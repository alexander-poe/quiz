// require ('content.js');
// trying to place content variables on external js

var lb = '</br>';

var q1 = 'what is a great bike?';
var q2 = 'what\'s hardest trick on a bike?';
var q3 = 'who is cam mccual?';

var p1 = q1 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';
var p2 = q2 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';
var p3 = q3 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';

var problems = [p1, p2, p3];

// function currentQuestion(){
// 	$('#test-container > #question').on('click', function(event) {
// 		$(this).hide();
// 	});
function problemOne(){
$('#test-container').html(p1);
}

function problemTwo(){
$('#test-container').html(p2);
}

function problemThree(){
$('#test-container').html(p3);
}

problemOne();
// $('div.question1').html(p2);
// $('div.question2 q').html(p2);
// $('div.question3 q').html(p3);

//grabs radio buttons 
//stores the value of the button that get clicked
//and saves it to rightOrWrongValue
$("input[type='radio']").on('click', function(event) {
	var rightOrWrongValue = $(this).val();	
	console.log(rightOrWrongValue);
	try {
			if (rightOrWrongValue === '1') {
				alert("i am sorry but you are wrong");

			} 
			else {
				alert("you are correct!");
			}
	
		}
	finally {
			
		


	}

});


	// for (var i = problems[i]; i < problems.length; i++) {
	// 			if (problems[i] < problems.length) {
	// 				$('div.question1').addClass('q');
	// 				$(problems[i]).html(problems[i]);
	// 				alert("hey");
				    
	// 		}










// var arrayVariable = [q2 + lb + a1,'two','three'];
//     arrayLength = arrayVariable.length;

// for (i = 0; i < arrayLength; i++) {
//   $('<div class="results" />').html(arrayVariable[i]).appendTo(' .questions');
// }

