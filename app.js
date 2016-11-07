var lb = '</br>';

var q1 = 'what is a great bike?';
var q2 = 'what\'s hardest trick on a bike?';
var q3 = 'who is cam mccual?';

var p1 = q1 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';
var p2 = q2 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';
var p3 = q3 + lb + 'a:fixie' + lb + 'b:hardtail' + lb + 'c: motobecane';

var problems = [p1, p2, p3];

function problemOne(){
$('.question1').html(p1);
}

function problemTwo(){
$('.question2').html(p2);
}

function problemThree(){
$('.question3').html(p3);
}

problemOne();
problemTwo();
// problemThree();

$("input[type='radio']").on('click', function(event) {
	var counter = 0;
	var rightOrWrongValue = $(this).val();	
	for (var i = 0; i < 10; i++){
	try {	
			if (counter === 4) {
				$('#3').hide();
				$('#4').show();
				break;
			}
			
			else if (counter === 1) {
				$('#2').hide();
				$('#3').show();
				counter += 1;
				console.log('second');
			}

			else if (counter === 0) {
				$('#1').hide();
				$('#2').show();
				counter += 1;
				console.log('first');
				
			}
			
		
	
		}
	finally {
			
			if (rightOrWrongValue === '1') {
				alert("i am sorry but you are wrong");

			} 
			else {
				alert("you are correct!");
			}
			
		}

	}
	console.log(counter);

});

//counter will be incremented everytime radio button is clicked





