		
$().ready(function(){
var numberA = null;
var numberB = null;
var op = " ";
var equalsJustPressed = false; 


function addNumber(displayNumber){
	if (equalsJustPressed == true) {
		equalsJustPressed = false;
		$("#input").val("0");
		numberA = null;
		numberB = null;
		op = " ";
	}
	var current = $("#input").val();
	
	if (current === "0" && displayNumber !== ".") {
		$("#input").val(displayNumber);
	}
	else {
		var newinput = current + displayNumber;
		$("#input").val(newinput);
	}
}

function opbutton(newOp) {
	equalsJustPressed = false;
	op = newOp;
	numberA = $("#input").val();
	numberB = null;
	$("#input").val("0");	
}


$("#button1").click(function(){
	addNumber(1);
});

$("#button2").click(function(){
	addNumber(2);
});

$("#button3").click(function(){
	addNumber(3);
});

$("#button4").click(function(){
	addNumber(4);
});

$("#button5").click(function(){
	addNumber(5);
});

$("#button6").click(function(){
	addNumber(6);
});

$("#button7").click(function(){
	addNumber(7);
});

$("#button8").click(function(){
	addNumber(8);
});

$("#button9").click(function(){
	addNumber(9);
});

$("#button-dot").click(function(){
	
	var current = $("#input").val();
	var indexOfDot = current.indexOf(".");
	if(indexOfDot == -1) {
		addNumber(".");
	}
});

$("#button0").click(function(){
	addNumber(0);
});


$("#button-plus").click(function(){
	// if numberA and numberB are already set then execute the calculation and display the result as numberA
	
	// then follow the operation button that was clicked and wait for the numberB input

	
	// if (numberA !== null && numberB !== null){
	// 	//doEqualsFunction
	// }
	opbutton("+");	

});

$("#button-minus").click(function(){
	opbutton("-");
	
	
});

$("#button-times").click(function(){
	// if numberA and numberB are already set then execute the calculation and display the result as numberA
	
	// the follow the operation button that was clicked and wait for the numberB input

	//else do this:
	opbutton("*");
	
	
});

$("#button-equals").click(function () {

	// if numberB is already set , then use it
	// otherwise set numberB to be what they have entered
	equalsJustPressed = true;
	if (numberB === null) {
		numberB = $("#input").val();
	}
	if (numberA != null) {
		// if numberA is a value as a result by entering any of the operaton buttons
			// then add numberB to numberA
		// otherwise return the original input 
		if (op == "+" ) {
			var A = parseFloat(numberA);
			var B = parseFloat(numberB);
			$("#input").val(A + B);
		}	
		else if (op == "-" ) {
			$("#input").val(numberA - numberB);
		}	
		else if (op == "*" ) {
			$("#input").val(numberA * numberB);
		}	
		
	}
	
	else {
		
	}
	
	var current = $("#input").val();
	numberA = current;
	
	
});

$("#clearbutton").click(function(){
	$("#input").val("0");
	numberA = null;
	numberB = null;
	op = " ";
});

	
});
