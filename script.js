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
  const cartItemsTable = document.getElementById('cartItems');
  const grandTotalSpan = document.getElementById('grandTotal');

  // Clear the existing cart items
  cartItemsTable.innerHTML = '';

  let grandTotal = 0; // Initialize the grand total

  // Add cart items to the table and calculate the grand total
  cart.forEach((item, index) => {
    const cartRow = document.createElement('tr');

    // Add S.No (index + 1)
    const cartSNo = document.createElement('td');
    cartSNo.textContent = index + 1;

    // Add item name
    const cartName = document.createElement('td');
    cartName.textContent = item.name;

    // Add item price
    const cartPrice = document.createElement('td');
    cartPrice.textContent = `NPR ${item.price}`;

    // Add a "Clear" button for each item
    const clearButton = document.createElement('td');
    const clearButtonElement = document.createElement('button');
    clearButtonElement.textContent = 'Clear';
    clearButtonElement.className = 'text-gray-500 hover:text-gray-700';
    clearButtonElement.onclick = () => {
      // Remove the item from the cart when the "Clear" button is clicked
      cart.splice(index, 1);
      // Update the cart slider
      updateCartSlider();
    };
    clearButton.appendChild(clearButtonElement);

    // Append all columns to the row
    cartRow.appendChild(cartSNo);
    cartRow.appendChild(cartName);
    cartRow.appendChild(cartPrice);
    cartRow.appendChild(clearButton);

    cartItemsTable.appendChild(cartRow);

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

  

// Thankyou Alert Message
  function showThankYouMessage() {
    const grandTotal = document.getElementById('grandTotal').textContent;
    alert(`Thank you for choosing us! Your order total is NPR ${grandTotal}. We hope you'll enjoy our delicious dishes.`);
  }


//Open the add to cart
// Get references to the cart slider and the shopping cart icon
const cartSlider = document.getElementById('cartSlider');
const openCartIcon = document.getElementById('open-cart');

// Add a click event listener to the shopping cart icon
openCartIcon.addEventListener('click', toggleCartSlider);

// Function to toggle the cart slider visibility
function toggleCartSlider() {
  if (cartSlider.style.transform === 'translateX(0)') {
    // If the cart slider is already open, close it
    cartSlider.style.transform = 'translateX(100%)';
  } else {
    // If the cart slider is closed, open it
    cartSlider.style.transform = 'translateX(0)';
  }
}



// Initialize a flag to track whether the discount has been applied
let discountApplied = false;

// Function to apply the discount code
function applyDiscountCode() {
  const discountCodeInput = document.getElementById('discountCode');
  const discountCode = discountCodeInput.value;

  if (!discountApplied && discountCode === 'Biwash07') {
    // Apply a 15% discount if the code is valid and the discount hasn't been applied yet
    const grandTotalSpan = document.getElementById('grandTotal');
    const grandTotal = parseFloat(grandTotalSpan.textContent.replace('NPR ', ''));

    const discountAmount = grandTotal * 0.15;
    const discountedTotal = grandTotal - discountAmount;

    // Update the grand total display with the discount applied
    grandTotalSpan.textContent = `NPR ${discountedTotal.toFixed(2)}`;

    // Optionally, you can disable the input field after applying the discount
    discountCodeInput.disabled = true;

    // Set the flag to indicate that the discount has been applied
    discountApplied = true;
  } else if (discountApplied) {
    alert('Discount has already been applied.');
  } else {
    alert('Invalid discount code. Please try again.');
  }
}



// Code For Copy Now Button
document.addEventListener("DOMContentLoaded", function () {
  const copyDiscountCodeBtn = document.getElementById("copyDiscountCodeBtn");

  copyDiscountCodeBtn.addEventListener("click", function () {
    const discountCode = "Biwash07";

    // Create a temporary input element to copy the text
    const tempInput = document.createElement("input");
    tempInput.value = discountCode;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide user feedback
    alert(`Discount code "${discountCode}" copied to clipboard!`);
  });
});


    

  
