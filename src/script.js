document.querySelectorAll('#calculator .btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const inputField = document.getElementById('input');
        
        console.log('Button clicked:', value);
        console.log('Current input value:', inputField.value);
        
        if (value === '=') {
            calculateResult(inputField);
        } else {
            inputField.value += value;
        }
    });
});

document.getElementById('delete').addEventListener('click', function() {
    const inputField = document.getElementById('input');
    inputField.value = inputField.value.slice(0, -1);
});

// Function to calculate result
function calculateResult(inputField) {
    try {
        const result = eval(inputField.value);
        document.getElementById('result').textContent = `Hasil: ${result}`;
    } catch (error) {
        document.getElementById('result').textContent = 'Input tidak valid';
    }
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const inputField = document.getElementById('input');
    if (event.key >= '0' && event.key <= '9' || ['+', '-', '*', '/'].includes(event.key)) {
        inputField.value += event.key;
    } else if (event.key === 'Enter') {
        calculateResult(inputField);
    } else if (event.key === 'Backspace') {
        inputField.value = inputField.value.slice(0, -1);
    }
});