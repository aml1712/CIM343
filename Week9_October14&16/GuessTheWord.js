"use strict";

let textInput = document.getElementById("myText");
let textInputButton = document.getElementById("myButton");
let output = document.getElementsByClassName("output");
let incorrect = document.getElementById("incorrect");


let letters = ['i', 'b', 'i', 's'];
 

textInputButton.addEventListener("click", function() {
    console.log("textInput: " + textInput.value);
    let found = false;
    for (let i = 0; i < letters.length; i++) {
        if(textInput.value === letters[i]) {
            output[i].innerHTML = textInput.value;
            found = true;
        }
       
    }
    if(found == false) {
        incorrect.innerHTML = "Incorrect Guess, Try Again!";
        setTimeout(()=>{
        incorrect.innerHTML = "";
        }, 3000);
    } 

});