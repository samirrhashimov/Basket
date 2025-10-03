function showBasket() {
    let basketElement = document.querySelector('.basket');
    let totalElement = document.querySelector('.total-price');
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users[0];
    let basketItems = currentUser ? currentUser.basket || [] : [];
    basketElement.innerHTML = '';
    let total = 0;
    
    basketItems.forEach(item => {
        total += item.price * item.count;
        basketElement.innerHTML += `
            <div class="basket-item" data-id="${item.id}">
                <div class="image">
                    <img src="${item.image}" alt="Product Image" />
                </div>
                <h6 class="title">${item.title}</h6>
                <p class="category">${item.category}</p>
                <p class="price">$${item.price}</p>
                <div class="count-area">
                    <button class="minus-btn" ${item.count === 1 ? 'disabled' : ''}>-</button>
                    <p class="count">${item.count}</p>
                    <button class="plus-btn">+</button>
                </div>
                <button class="btn btn-danger remove-btn">Remove</button>
            </div>
        `;
    });
    totalElement.textContent = total.toFixed(2);
}

function increment(productId) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users[0];
    
    if (currentUser && currentUser.basket) {
        let product = currentUser.basket.find(item => item.id === productId);
        if (product) {
            product.count++;
            localStorage.setItem("users", JSON.stringify(users));
            showBasket();
        }
    }
}


function decrement(productId) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users[0];
    
    if (currentUser && currentUser.basket) {
        let product = currentUser.basket.find(item => item.id === productId);
        if (product && product.count > 1) {
            product.count--;
            localStorage.setItem("users", JSON.stringify(users));
            showBasket();
        }
    }
}

function removeItem(productId) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users[0];
    
    if (currentUser && currentUser.basket) {
        currentUser.basket = currentUser.basket.filter(item => item.id !== productId);
        localStorage.setItem("users", JSON.stringify(users));
        showBasket();
    }
}

document.querySelector('.basket').addEventListener('click', function(e) {
    let basketItem = e.target.closest('.basket-item');
    if (!basketItem) return;
    
    let productId = Number(basketItem.dataset.id);
    
    if (e.target.classList.contains('plus-btn')) {
        increment(productId);
    }
    
    if (e.target.classList.contains('minus-btn')) {
        decrement(productId);
    }
    
    if (e.target.classList.contains('remove-btn')) {
        removeItem(productId);
    }
});

document.addEventListener('DOMContentLoaded', showBasket);