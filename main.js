
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
const $divideButton = document.querySelector(".operator[value="/"]"); //May have issue with escaping slashes.
const $multiplyButton = document.querySelector(".operator[value="*"]");
const $subtractionButton = document.querySelector(".operator[value="-"]");
const $additionButton = document.querySelector(".operator[value="+"]");
const $equalityButton = document.querySelector(".operator[value="="]");






// Each query captures a numerical button.
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




// Action buttons
$clearButton.addEventListener('click', () => {
    console.log("TEST");
});


// For equals (=) button 
// Using a for loop, alert() the calculation when = is pressed




// Numerical input buttons

$button0.addEventListener('click', () => {
    console.log("Button 0");
});

$button1.addEventListener('click', () => {
    console.log("Button 1");
    pushNumber();
});

$button2.addEventListener('click', () => {
    console.log("Button 2");
});

$button3.addEventListener('click', () => {
    console.log("Button 3");
});

$button4.addEventListener('click', () => {
    console.log("Button 4");
});

$button5.addEventListener('click', () => {
    console.log("Button 5");
});

$button6.addEventListener('click', () => {
    console.log("Button 6");
});

$button7.addEventListener('click', () => {
    console.log("Button 7");
});

$button8.addEventListener('click', () => {
    console.log("Button 8");
});

$button9.addEventListener('click', () => {
    console.log("Button 9");
});


function pushNumber() {
    // This function should alert()s the number associated with its event argument when called; 
    // add this function as an event listener for the number buttons

    alert("WORLD");
};

function pushOperator(input){

    alert(input);

   // Define a function named pushOperator that alert()s the operator (+, -, *, /, C) associated with its event argument when called; 
   // add this function as an event listener for the operator buttons

};

function calculate() {
    // Define a function named calculate that alerts() = when pressed;
    // add this function as an event listener for the = button
    // Probably want an input for this? That calculates and returns a value?
}


})();