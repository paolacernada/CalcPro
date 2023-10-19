// Reference to the calculator display input element
const calc_display = document.querySelector('input[name="calc_display"]');

// Function to update the calculator display
function updateDisplay(value) {
    calc_display.value = value;
}

// Event listeners for the calculator buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = this.value;

        if (buttonValue === '=') {
            try {
                // Evaluate the expression
                const result = eval(calc_display.value);
                updateDisplay(result);
            } catch (error) {
                // Handle any errors
                updateDisplay('Error');
            }
        } else if (buttonValue === 'AC') {
            // Clear the calculator's display
            updateDisplay('');
        } else if (buttonValue === 'DEL') {
            // Delete the last character from the calculator's display
            updateDisplay(calc_display.value.slice(0, -1));
        } else {
            // Append the button value to the calculator display
            updateDisplay(calc_display.value + buttonValue);
        }
    });
});
