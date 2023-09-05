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



//OPen close clear button for add to cart
const Cart = [];


  function addToCart(itemName, itemPrice) {
    const item = {
      name: itemName,
      price: itemPrice,
    };
    cart.push(item);
    updateCartSlider();
  }

  function clearCartItem(index) {
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1); // Remove the item at the specified index
      updateCartSlider();
    }
  }

  function closeCart() {
    const cartSlider = document.getElementById('cartSlider');
    cartSlider.style.transform = 'translateX(100%)'; // Close the cart slider
  }

  function updateCartSlider() {
    const cartSlider = document.getElementById('cartSlider');
    const cartItemsList = document.getElementById('cartItems');

    cartItemsList.innerHTML = ''; // Clear existing cart items

    cart.forEach((item, index) => {
      const cartItem = document.createElement('li');
      cartItem.innerHTML = `${item.name} - NPR ${item.price}&nbsp;&nbsp;`; // Add a non-breaking space (&nbsp;) between price and Clear button

      // Create a "Clear" button for each item
      const clearButton = document.createElement('button');
      clearButton.textContent = 'Clear';
      clearButton.classList.add('text-red-500', 'hover:text-red-700');
      clearButton.onclick = () => clearCartItem(index);

      cartItem.appendChild(clearButton);
      cartItemsList.appendChild(cartItem);
    });

    if (cart.length > 0) {
      cartSlider.style.transform = 'translateX(0)'; // Show the cart slider
    } else {
      cartSlider.style.transform = 'translateX(100%)'; // Hide the cart slider if the cart is empty
    }
  }

// Code For GrandTotal
  function updateCartSlider() {
    const cartSlider = document.getElementById('cartSlider');
    const cartItemsList = document.getElementById('cartItems');
    const grandTotalSpan = document.getElementById('grandTotal');
  
    // Clear the existing cart items
    cartItemsList.innerHTML = '';
  
    let grandTotal = 0; // Initialize the grand total
  
    // Add cart items to the list and calculate the grand total
    cart.forEach((item) => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} - NPR ${item.price}`;
      cartItemsList.appendChild(cartItem);
  
      grandTotal += item.price; // Add item price to the grand total
    });
  
    // Update the grand total display
    grandTotalSpan.textContent = grandTotal;
    
    // Toggle the cart slider visibility
    if (cart.length > 0) {
      cartSlider.style.transform = 'translateX(0)';
    } else {
      cartSlider.style.transform = 'translateX(100%)';
    }
  }
  

    

  
