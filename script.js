let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
  if(operator === '') {
    operand1 += number;
  } else {
    operand2 += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  operator = op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  operand1 = '';
  operand2 = '';
  updateDisplay();
}

function updateDisplay() {
  currentInput = operand1 + operator + operand2;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  let result = 0;
  let num1 = Number(operand1);
  let num2 = Number(operand2);
  
  if(num1 === 0 || num2 === 0) {
    alert("Операции с нулем не допустимы");
    return;
  }
  
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '**':
      result = num1 ** num2;
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = '';
  operand1 = currentInput;
  operand2 = '';
  updateDisplay();
}
