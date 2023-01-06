
(function() {
    "use strict";

   // Empty array used for calculating answers
    const calculation = [];


console.log("HELLO");

// Use event listeners to look for button clicks. 

// When button is click, load corresponding value onto an array. 

// Can use concatenation, or evaluate the expression. 

// 5 + 5 = 

// Input as a string. Then break apart the values. Can you chain them?

//There should be an array containing everything that is being calculated. 

// Pressing the clear button causes the array to be reset to empty.

// What if there is a plus? 

// How do you set the temporary result? 

// Identify the buttons

// Each query looks at an action button. 

const $clearButton = document.querySelector(".clear");
// const $positiveNegativeButton = document.querySelector(".plus-minus");

const $percentButton = document.querySelector(".percent");
const $divideButton = document.querySelector('.operator[value="/"]'); //May have issue with escaping slashes.
const $multiplyButton = document.querySelector('.operator[value="*"]');
const $subtractionButton = document.querySelector('.operator[value="-"]');
const $additionButton = document.querySelector('.operator[value="+"]');
const $equalityButton = document.querySelector('.equal-sign[value="="]');
const $decimalButton = document.querySelector('.decimal');






// Each query captures a numerical button.


let $buttonPressDigit = document.querySelectorAll('.number');


console.log($buttonPressDigit.length);

//Below returns the value. Add that value to the array!

console.log($buttonPressDigit[9].innerHTML);


for(let i = 0; i < $buttonPressDigit.length; i++){



    $buttonPressDigit[i].addEventListener('click', pushNumber);

    /*

    $buttonPressDigit[i].addEventListener('click', () => {
        //console.log($buttonPressDigit[i][value]);

        calculation.push($buttonPressDigit[i].innerHTML);

        console.log(calculation);


        //calculation = []; // Empties out calculation bracket.
    });

    */


};

/*

// I think it is possible to use an array here. Not sure how
const $button0 = document.querySelector('.number[value="0"]');
const $button1 = document.querySelector('.number[value="1"]');
const $button2 = document.querySelector('.number[value="2"]');
const $button3 = document.querySelector('.number[value="3"]');
const $button4 = document.querySelector('.number[value="4"]');
const $button5 = document.querySelector('.number[value="5"]');
const $button6 = document.querySelector('.number[value="6"]');
const $button7 = document.querySelector('.number[value="7"]');
const $button8 = document.querySelector('.number[value="8"]');
const $button9 = document.querySelector('.number[value="9"]');

*/

// Action buttons
$clearButton.addEventListener('click', () => {
    console.log("clear");
    calculation = []; // Empties out calculation bracket.
});

$percentButton.addEventListener('click', () => {
    console.log("percent");
    // Converts a fraction into a percentage.
});

$divideButton.addEventListener('click', () => {
    console.log("divide");
});

$multiplyButton.addEventListener('click', () => {
    console.log("multiply");
});

$subtractionButton.addEventListener('click', () => {
    console.log("subtract");
});

$additionButton.addEventListener('click', () => {
    console.log("addition");
});

$equalityButton.addEventListener('click', () => {
    console.log("equality");
    calculate(); // This should look at the current value of the array.
});





function pushNumber() {
    // This function should alert()s the number associated with its event argument when called; 
    // add this function as an event listener for the number buttons
    let number = this.innerHTML;

    calculation.push(number);

    console.log(calculation);

    alert(number);
};

function pushOperator(input){

    alert(input);

   // Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; 
   // add this function as an event listener for the operator buttons

};

function calculate() {

    // Define a function named calculate that alerts() = when pressed;
    alert("=");



    
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