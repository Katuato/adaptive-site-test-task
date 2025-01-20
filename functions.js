
function updateCartCount(count) {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = count;
}


let currentCount = 3; 
updateCartCount(currentCount);


function addToCart() {
    currentCount++;
    updateCartCount(currentCount);
}

function removeFromCart() {
    if (currentCount > 0) {
        currentCount--;
        updateCartCount(currentCount);
    }
}


addToCart();

removeFromCart();


