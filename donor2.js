function openDialog() {
    var dialog = document.getElementById('dialog');
    dialog.style.display = 'block';
}

function addFoodItem() {
    var foodItem = document.getElementById('foodItem').value;
    var quantity = document.getElementById('quantity').value;

    var foodItemsContainer = document.getElementById('foodItems');

    // Create food item element
    var foodItemElement = document.createElement('div');
    foodItemElement.classList.add('food-item');

    var foodName = document.createElement('span');
    foodName.innerHTML = '<strong>' + foodItem + '</strong>';
    foodItemElement.appendChild(foodName);

    var quantityBox = document.createElement('span');
    quantityBox.classList.add('quantity-box');
    quantityBox.innerText = quantity;
    foodItemElement.appendChild(quantityBox);

    // Create remove button
    var removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.onclick = function() {
        if (confirm('Are you sure you want to remove this food item?')) {
            foodItemsContainer.removeChild(foodItemElement);
            // If you want to remove the item from the server, you can do it here using AJAX or other methods.
        }
    };
    foodItemElement.appendChild(removeButton);

    // Append to food items container
    foodItemsContainer.appendChild(foodItemElement);

    // Clear form inputs
    document.getElementById('foodItem').value = '';
    document.getElementById('quantity').value = '';

    // Close dialog
    var dialog = document.getElementById('dialog');
    dialog.style.display = 'none';
}
