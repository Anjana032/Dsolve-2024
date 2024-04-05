
const quantityInputs = document.querySelectorAll('input[type="number"]');


quantityInputs.forEach(input => {
    input.addEventListener('input', function() {
        const quantity = parseInt(this.value);
        if (isNaN(quantity) || quantity < 0) {
            this.value = 0; 
        }
    });
});

const proceedBtn = document.getElementById('proceed-btn');
proceedBtn.addEventListener('click', function() {
    alert('Proceeding...'); 
});
