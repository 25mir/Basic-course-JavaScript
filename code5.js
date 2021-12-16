function addition (a, b){
	return a + b
}
function subtraction (a, b){
	return a - b
}
function multiplication (a, b){
	return a * b
}
function division (a, b){
	return a / b
}


function mathOperation(arg1, arg2, operation){
	switch (operation) {
		case addition: return addition(arg1, arg2)
		break;
		case subtraction: return subtraction(arg1, arg2)
		break;
		case multiplication: return multiplication(arg1, arg2)
		break;
		case division: return division(arg1, arg2)
		break;
	}
}

alert(mathOperation(35, 40, addition))
alert(mathOperation(35, 40, subtraction))
alert(mathOperation(35, 40, multiplication))
alert(mathOperation(35, 40, division))