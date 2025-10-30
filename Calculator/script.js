let displayValue = '0';
let isScientific = false;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLastChar() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        // Count open and close parentheses
        let openCount = (displayValue.match(/\(/g) || []).length;
        let closeCount = (displayValue.match(/\)/g) || []).length;

        // Automatically close any unclosed open parentheses
        let expression = displayValue;
        for (let i = 0; i < (openCount - closeCount); i++) {
            expression += ')';
        }

        // Replace '^' with '**' for exponentiation
        expression = expression.replace(/\^/g, '**');
        displayValue = eval(expression).toString();

    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function toggleScientific() {
    isScientific = !isScientific;
    const scientificCalculator = document.getElementById('scientificCalculator');
    const toggleButton = document.getElementById('toggleSci');

    if (isScientific) {
        scientificCalculator.style.display = 'block';
        toggleButton.textContent = 'STD';
    } else {
        scientificCalculator.style.display = 'none';
        toggleButton.textContent = 'SCI';
    }
}
