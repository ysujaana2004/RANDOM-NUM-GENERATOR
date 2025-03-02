//MATH - BUIT-IN OBJECT THAT
//          PROVIDES A COLLECTION OF PROPERTIES AND METHODS

//RNDOM NUMBER GENERATOR

const RollButton = document.getElementById('RollButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3')
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

//when we click on the button, we will execute a function 

RollButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;   //will randomly select a number between 1 to 6
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}