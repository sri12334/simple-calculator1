/* eslint-disable no-unused-vars */
let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  // eslint-disable-next-line no-use-before-define
  updateDisplay();
}

// eslint-disable-next-line no-unused-vars
function clearDisplay() {
  displayValue = '';
  // eslint-disable-next-line no-use-before-define
  updateDisplay();
}

// eslint-disable-next-line no-unused-vars
function calculate() {
  try {
    // eslint-disable-next-line no-eval
    displayValue = eval(displayValue).toString();
    // eslint-disable-next-line no-use-before-define
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    // eslint-disable-next-line no-use-before-define
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
