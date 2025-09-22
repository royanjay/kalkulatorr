document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultElement = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    
    const addButton = document.getElementById('add-btn');
    const subtractButton = document.getElementById('subtract-btn');
    const multiplyButton = document.getElementById('multiply-btn');
    const divideButton = document.getElementById('divide-btn');
    
    function hideError() {
        errorMessage.style.display = 'none';
    }
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    
    function calculate(operation) {
        hideError();
        
        const num1Value = num1Input.value.trim();
        const num2Value = num2Input.value.trim();
        
        // Cek apakah input pertama kosong
        if (num1Value === '') {
            showError('Input tidak valid. Harap masukkan angka yang benar pada input pertama');
            return;
        }
        
        // Cek apakah input kedua kosong
        if (num2Value === '') {
            showError('Input tidak valid. Harap masukkan angka yang benar pada input kedua');
            return;
        }
        
        const num1 = parseFloat(num1Value);
        const num2 = parseFloat(num2Value);
        
        // Cek apakah input adalah angka yang valid
        if (isNaN(num1) || isNaN(num2)) {
            showError('Input tidak valid. Harap masukkan angka yang benar');
            return;
        }
        
        let result;
        
        switch(operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    showError('Tidak dapat membagi dengan nol');
                    return;
                }
                result = num1 / num2;
                break;
            default:
                showError('Operasi tidak valid');
                return;
        }
        
        // Handle floating point precision
        if (result % 1 !== 0) {
            resultElement.textContent = result.toFixed(2);
        } else {
            resultElement.textContent = result;
        }
    }
    
    addButton.addEventListener('click', function() {
        calculate('add');
    });
    
    subtractButton.addEventListener('click', function() {
        calculate('subtract');
    });
    
    multiplyButton.addEventListener('click', function() {
        calculate('multiply');
    });
    
    divideButton.addEventListener('click', function() {
        calculate('divide');
    });
});