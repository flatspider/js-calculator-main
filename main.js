
(function() {
    "use strict";

   // Empty array used for calculating answers
    const calculation = [];


console.log("HELLO");

const $clearButton = document.querySelector(".clear");

// const $positiveNegativeButton = document.querySelector(".plus-minus");

const $percentButton = document.querySelector(".percent");

const $equalityButton = document.querySelector('.equal-sign[value="="]');

const $decimalButton = document.querySelector('.decimal');


/*

const $divideButton = document.querySelector('.operator[value="/"]'); //May have issue with escaping slashes.
const $multiplyButton = document.querySelector('.operator[value="*"]');
const $subtractionButton = document.querySelector('.operator[value="-"]');
const $additionButton = document.querySelector('.operator[value="+"]');

*/




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
    console.log("clear");
    calculation.length = 0; // Empties out calculation bracket. Strict mode does not like setting array to [].
});

$percentButton.addEventListener('click', () => {
    console.log("percent");
    // Converts a fraction into a percentage.
});


$equalityButton.addEventListener('click', calculate());

function pushNumber() {
    // This function should alert()s the number associated with its event argument when called; 
    // add this function as an event listener for the number buttons

    let number = this.innerHTML;

    calculation.push(number);
    alert(number);
};

function pushOperator() {

    // Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; 
    // add this function as an event listener for the operator buttons

    let operatorValue = this.innerHTML;

    calculation.push(operatorValue);

    alert(operatorValue);
};

function calculate() {

    // Define a function named calculate that alerts() = when pressed;
    alert("=");

    let useOperator; // What function should be called? 

    let firstNumber; // The first number typed into calculator

    let secondNumber; // The second number typed in.

    let isSecondNumber = false; // Which number is this array being used for? 

    // Might need a little logic. 

    // Create a number tracker. 

    // Cycle through array. If number =0, and array element is number, add to firstNumber array. 

    // If array element = /+-*, add to operator array and set secondNumber to true.

    // Now add the array digits to second number array. 

    // Turn those arrays into strings with join!

    // Run logic to determine what function to call with the two numbers. return the result. 

    // Alert the result in the browser window.




    if (calculation.length === 0) { // Or if it does not have number, operator, number....What if 3456 then equal? Display it.
        alert("NO VALUES");
    } else {

        calculation.join();

        calculation.split()


        // Look at the array. [2,5,/,5] There is no equals sign pushed to the array. 

        // Split the array on a non number. 

        // May need to join the array to a string. 

        // String of first number.

        // Operator symbol.

        // String of second number.

        // If operator symbol equals /*-+, call the respective function, passing in the two numbers.
        
        // Alert the value to your browser and clear array?

        // Cycle through array. IF typeOf = number, add to firstNum array. 
        // If not a num, add to operator string. 




        for (let i = 0; i < calculation.length; i++){

            if (calculation[i].typeOf === "+") {
                sum()

            }




        }














    }

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2){
        return num1 - num2;
    }

    function divide(num1, num2){
        return num1 / num2;
    }



    
    // add this function as an event listener for the = button
    // Probably want an input for this? That calculates and returns a value?

    // For equals (=) button 
    // Using a for loop, alert() the calculation when = is pressed

    // Imagine an array of values loaded in. 

    // [5, +, 2]

    // How do you add in multiple digits? They will need to always concatenate until an operator is pressed.

    // When equals is pressed, calculate is triggered. 

    // Cycle through the array. 

    // If array[0] is a number, store it in a variable
    // If array[1] is a symbol, store it in a variable
    // Check what symbol it is. Use that to run the calculation.
    // Return the value.

    // How do I pass values into the array in a simple way? 


}


})();