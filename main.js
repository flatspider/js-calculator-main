(function() {
    "use strict";


// Empty array used for calculating answers
const calculation = []; // You can use const because the modification to the array (adding numbers) does not count as changing it.

const $clearButton = document.querySelector(".clear");
// const $positiveNegativeButton = document.querySelector(".plus-minus");
// const $percentButton = document.querySelector(".percent");
const $equalityButton = document.querySelector('.equal-sign[value="="]');

const $calculatorDisplay = document.querySelector(".calculator-screen");

//const $decimalButton = document.querySelector('.decimal');

// Numerical buttons
const $buttonPressDigit = document.querySelectorAll('.number');
for(let i = 0; i < $buttonPressDigit.length; i++){
    $buttonPressDigit[i].addEventListener('click', pushNumber);
};

// Operator buttons
const $operatorPress = document.querySelectorAll('.operator');
for(let i = 0; i < $operatorPress.length; i++){
    $operatorPress[i].addEventListener('click', pushOperator);
};

// Action buttons
$clearButton.addEventListener('click', () => {
    //console.log("clear");
    calculation.length = 0;
    $calculatorDisplay.value = 0; // Empties out calculation bracket. Strict mode does not like setting array to [].
});

/* Not currently active

$percentButton.addEventListener('click', () => {
    console.log("percent");
    // Converts a fraction into a percentage.
});
*/

$equalityButton.addEventListener('click', calculate);


// Functions below
function pushNumber() {
    // This function should alert()s the number associated with its event argument when called; 
    // add this function as an event listener for the number buttons

    let number = this.innerHTML; // If event is passed, can use event.target.value;
    calculation.push(number);
    //console.log(number);



    // If the number is zero, and length of value is 1, replace the number.
    // If there is any number other than zero in the calculator, stack the next digit onto it. 


    if ('0'.includes($calculatorDisplay.value) && $calculatorDisplay.value.length === 1) {
        $calculatorDisplay.value = number;
    } else if ('+-÷×'.includes($calculatorDisplay.value)) {
        $calculatorDisplay.value = number;
    } else {
        $calculatorDisplay.value = $calculatorDisplay.value + number;
    }

    //alert(number);
};

function pushOperator() {
    // Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; 
    // add this function as an event listener for the operator buttons
    let operatorValue = this.innerHTML;
    calculation.push(operatorValue);
    $calculatorDisplay.value = operatorValue;
    //alert(operatorValue);
};

function calculate() {

    // Define a function named calculate that alerts() = when pressed;
    //alert("=");

    // Can simplify this to initialize variables as empty strings instead of arrays. 

    const operatorArray = ['+', '-', 'x', '/', '÷', '×'];

    let useOperator = []; // What mathematical function should be used on this array? 

    let firstNumber = []; // The first number loaded into the math expression

    let secondNumber = []; // The second number loaded into the math expression

    let isSecondNumber = false; // This boolean determines which Number array to add the digits 
 
    for (let i = 0; i < calculation.length; i++){

        if (!operatorArray.includes(calculation[i]) && isSecondNumber == false) {
            //console.log("number");
            firstNumber.push(calculation[i]);
        } else if (operatorArray.includes(calculation[i])){
            //console.log("operator");
            useOperator.push(calculation[i]);
            isSecondNumber = true;
        } else {
            secondNumber.push(calculation[i]);
        }
    }

    //This is the divisor being passed.... ÷
    /*
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(useOperator);
    */

    let joinedNumber1 = firstNumber.join("");
    let joinedNumber2 = secondNumber.join("");
   /* let joinedOperator = */ useOperator.join("");


    /*
    console.log(joinedNumber1);
    console.log(joinedNumber2);
    console.log(joinedOperator);
    */


    let showCalculation = 0;

    if (useOperator == "+") {
        showCalculation = sum(joinedNumber1, joinedNumber2);
    } else if (useOperator == "-") {
        showCalculation = subtract(joinedNumber1, joinedNumber2);
    } else if (useOperator == "×") {
        showCalculation = multiply(joinedNumber1, joinedNumber2);
    } else {
        showCalculation = divide(joinedNumber1, joinedNumber2);
    }

    $calculatorDisplay.value = showCalculation;

    // If array element = /+-*, add to operator array and set secondNumber to true.

    // Now add the array digits to second number array. 

    // Turn those arrays into strings with join!

    // Run logic to determine what function to call with the two numbers. return the result. 

    // Alert the result in the browser window.

    }



    // Below are the mathematical operation functions

    // Will probably want to parseFloat to account for decimal usage.

    function sum(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    function subtract(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    function multiply(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }

    function divide(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }


})();