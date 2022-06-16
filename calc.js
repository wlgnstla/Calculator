

let display = document.querySelector('.screen');
let text = document.querySelector('.text');

let notify = () => alert("woah a num has been pressed");

const buttons = Array.from(document.querySelectorAll('.num'));
buttons.forEach(button => button.addEventListener('click', ()=>
    
{

    text.textContent += button.textContent;


}

));



let ac_button = document.querySelector('.ac');
ac_button.addEventListener('click', () => 
{
    text.textContent = "";

});



//CALC FUNCTIONS 

let multiply = function(a,b)
{
    return a * b;
}

let divide = function(a,b)
{
    return a / b;
}

let add = function(a,b)
{
    return a + b;
}

let subtract = function(a,b)
{
    return a - b;
}