
(function() {
    "use strict";


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

const $clearButton = document.querySelector(".clear");

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



$clearButton.addEventListener('click', () => {
    console.log("TEST");
});

$button1.addEventListener('click', () => {
    console.log("Button 1");
});


})();