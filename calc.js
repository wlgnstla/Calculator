let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');


function updateScreen()
{

    const screen = document.querySelector('.text');
    screen.textContent = displayValue;
    if(displayValue.length > 16)
    {
        screen.textContent = displayValue.slice(0,16);
    }
}



updateScreen();


function clickButton()
{

    buttons.forEach(btn => btn.addEventListener('click', () => {

        if(btn.classList.contains('operand'))
        {
            inputOperand(btn.value);
            updateScreen();
        }
        else if(btn.classList.contains('operator'))
        {
            inputOperator(btn.value);
            updateScreen();
        }
        else if(btn.classList.contains('equals'))
        {
            inputEquals();
            updateScreen();
        }
        else if(btn.classList.contains('decimal'))
        {
            inputDecimal(btn.value)
            updateScreen();
        }
        else if(btn.classList.contains('percent'))
        {
            inputPercent(displayValue);
            updateScreen();
        }
        else if(btn.classList.contains('sign'))
        {
            inputSign(displayValue);
            updateScreen();
        }
        else if(btn.classList.contains('clear'))
        {
            clearDisplay();
            updateScreen();
        }
    }))
}

clickButton();


function inputOperand(operand) {
    if(firstOperator === null)
    
    {

        if(displayValue === '0' || displayValue === 0) 
        {
            //1st click - handles first operand input
            displayValue = operand;
        } 
        else if(displayValue === firstOperand) 
        {
            //starts new operation after inputEquals()
            displayValue = operand;
        } 
        else 
        {
            displayValue += operand;
        }
    }


     else 
    {
        //3rd/5th click - inputs to secondOperand
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }

}



function inputOperator(operator)
 {
    if(firstOperator != null && secondOperator === null) {
        //4th click - handles input of second operator
        //100     +    200      ( x)
        secondOperator = operator; // x 
        secondOperand = displayValue; // 200
        result = operate(firstOperator, Number(firstOperand), Number(secondOperand)); // 300
        displayValue = result.toString(); //300
        firstOperand = displayValue; //firstOperand = 300
        result = null;
    } 


    else if(firstOperator != null && secondOperator != null) 
    {
        //6th click - new secondOperator
        //100     + .      200      * .    5 .      +
        secondOperand = displayValue;//secondoperand = 5 --> 500
        result = operate(secondOperator, Number(firstOperand), Number(secondOperand));// * --> +
        secondOperator = operator;// secondOperator = (+) once again 
        displayValue = result.toString();
        firstOperand = displayValue;//firstOperand = 1500
        result = null;
    } 
    else 
    { 
        //2nd click - handles first operator input
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    //hitting equals doesn't display undefined before operate()
    if(firstOperator === null) 
    {
        displayValue = displayValue;
    } 
//////////////////

    else if(secondOperator != null)
     {
        //handles final result
        secondOperand = displayValue;
        result = operate(secondOperator, Number(firstOperand), Number(secondOperand));
        if(result === 'lmao') {
            displayValue = 'lmao';
        } 
        else {
            displayValue = result.toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } 
    
    else 
    {
        //handles first operation
        secondOperand = displayValue;
        result = operate(firstOperator, Number(firstOperand), Number(secondOperand));
        if(result === 'LOL') {
            displayValue = 'LOL';
        } 
        else {
            displayValue = result.toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function inputDecimal(dot) {
    if(displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if(!displayValue.includes(dot)) {
        displayValue += dot;
    } 
}


//EVERYTHING BELOW MAKES SENSE


function inputPercent(num) {
    displayValue = (num/100).toString();
}

function inputSign(num) {
    displayValue = (num * -1).toString();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}


function operate(op, a, b)
{

    if (op === "+")
    {
        return a + b;
    }
    else if(op === "-")
    {
        return a - b;
    }
    else if(op === "×")
    {
        return a * b;
    }
    else if(op === "÷")
    {
        if(b === 0)
        {
            return "LOL";
        }
        else
        {
            return a / b;
        }
    }
}
