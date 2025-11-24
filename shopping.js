// Get all buy now buttons
const buyNowButtons = document.querySelectorAll('.buy-now');

// Add event listener to each button
buyNowButtons.forEach(button => {
    button.addEventListener('click', buyItem);
});

// Buy item function
function buyItem(event) {
    // Get the product details
    const product = event.target.parentNode.parentNode;
    const productName = product.querySelector('h5').textContent;
    const productPrice = product.querySelector('h4').textContent;

    // Create a confirmation message
    const confirmationMessage = `Are you sure you want to buy ${productName} for ${productPrice}?`;

    // Confirm the purchase
    if (confirm(confirmationMessage)) {
        // Simulate a purchase (e.g., send a request to the server)
        console.log(`Purchased ${productName} for ${productPrice}`);
        // Remove the item from the cart
        product.remove();
    }
}