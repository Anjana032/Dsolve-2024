document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch selected items from the previous page
    function getSelectedItems() {
        // Replace this with your logic to fetch selected items from the previous page
        // For demonstration, I'm using an array of objects representing selected items
        return [
            { name: 'Veg Biryani', quantity: 2 },
            { name: 'Meals', quantity: 1 }
        ];
    }

    // Function to update order summary based on selected items
    function updateOrderSummary(selectedItems) {
        const selectedItemsContainer = document.querySelector('.selected-items');

        // Clear existing content
        selectedItemsContainer.innerHTML = '';

        // Loop through selected items and create HTML elements to display them
        selectedItems.forEach(item => {
            const selectedItemDiv = document.createElement('div');
            selectedItemDiv.classList.add('selected-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const itemQuantity = document.createElement('span');
            itemQuantity.textContent = 'Quantity: ' + item.quantity;

            selectedItemDiv.appendChild(itemName);
            selectedItemDiv.appendChild(itemQuantity);

            selectedItemsContainer.appendChild(selectedItemDiv);
        });
    }

    // Get selected items and update order summary on page load
    const selectedItems = getSelectedItems();
    updateOrderSummary(selectedItems);

    // Add event listener to Complete Order button
    const completeOrderBtn = document.getElementById('complete-order-btn');
    completeOrderBtn.addEventListener('click', function() {
        // Your code to complete the order
        // Example: Redirect to confirmation page
        window.location.href = 'confirmation.html';
    });
});
