 // Initialize Font Awesome 
 window.FontAwesomeConfig = { autoReplaceSvg: 'nest' }
// Code For GoToUp Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var button = document.getElementById('goToTopButton');
    if (window.scrollY > 200) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});

// Code For scrollToMEnu
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Code for FooterYear
document.querySelector("footer .footer-year").textContent =
	new Date().getFullYear();



//Add to cart list
    let cart = [];

    function addToCart(itemName, itemPrice) {
      const item = {
        name: itemName,
        price: itemPrice,
      };
    
      cart.push(item);
    
      // Update the cart slider
      updateCartSlider();
    }
    
    function updateCartSlider() {
      const cartSlider = document.getElementById('cartSlider');
      const cartItemsList = document.getElementById('cartItems');
    
      // Clear the existing cart items
      cartItemsList.innerHTML = '';
    
      // Add cart items to the list
      cart.forEach((item) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - NPR ${item.price}`;
        cartItemsList.appendChild(cartItem);
      });
    
      // Toggle the cart slider visibility
      if (cart.length > 0) {
        cartSlider.style.transform = 'translateX(0)';
      } else {
        cartSlider.style.transform = 'translateX(100%)';
      }
    }


    

  
