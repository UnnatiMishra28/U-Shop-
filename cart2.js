// Get the cart count element
const cartCount = document.getElementById('cart-count');

// Update the cart count
function updateCartCount() {
    // Get the cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Update the cart count
    cartCount.textContent = cartItems.length;
}

// Call the updateCartCount function on page load
updateCartCount();