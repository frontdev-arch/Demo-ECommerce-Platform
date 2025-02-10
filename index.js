 // Change main image when clicking a thumbnail
 const images = document.querySelectorAll(".img"); 
 const img1 = document.querySelector(".img1"); 
 images.forEach((img, index) => { 
   img.addEventListener("click", () => {
     img1.src = `./images/image-product-${index + 1}.jpg`;
   });
 });
 
 // Adjust the quantity
 const neg = document.querySelector(".decrease");
 const inc = document.querySelector(".increase");
 const quantity = document.querySelector(".quant");
 neg.addEventListener("click", () => {
   if (Number(quantity.textContent) > 0) {
     quantity.textContent = Number(quantity.textContent) - 1;
   }
 });
 inc.addEventListener("click", () => {
   quantity.textContent = Number(quantity.textContent) + 1;
 });
 
 // Cart Dropdown and "Add to Cart" functionality
 document.addEventListener("DOMContentLoaded", function () {
   const cartIcon = document.querySelector(".cart-icon");
   const cartDropdown = document.querySelector(".cart-dropdown");
   const cartItemsContainer = document.querySelector(".cart-items");
   const cartEmptyMessage = document.querySelector(".cart-empty");
   const checkoutButton = document.querySelector(".checkout-btn");
   const addToCartButton = document.querySelector(".add-to-cart");
   const quantityDisplay = document.querySelector(".quant");
   const productImageSrc = "./images/image-product-1-thumbnail.jpg";
   const productName = "Fall Limited Sneakers";
   const productPrice = 125.00;
   
   // Helper function to update the cart display
   function updateCartUI() {
     if(cartItemsContainer.children.length === 0) {
       cartEmptyMessage.style.display = "block";
       checkoutButton.style.display = "none";
     } else {
       cartEmptyMessage.style.display = "none";
       checkoutButton.style.display = "block";
     }
   }
   
   // Toggle dropdown when clicking the cart icon
   cartIcon.addEventListener("click", function (event) {
     cartDropdown.classList.toggle("show");
     event.stopPropagation();
     updateCartUI();
   });
   
   // Close the dropdown if clicking outside
   document.addEventListener("click", function () {
     cartDropdown.classList.remove("show");
   });
   
   // Prevent closing when clicking inside the dropdown
   cartDropdown.addEventListener("click", function (event) {
     event.stopPropagation();
   });
   
   // Add item to the cart on button click
   addToCartButton.addEventListener("click", function () {
     let quantityValue = parseInt(quantityDisplay.textContent, 10);
     if (quantityValue === 0) return; // Do nothing if quantity is zero
     
     // Check if the item already exists in the cart
     let existingCartItem = document.querySelector(".cart-item");
     if (existingCartItem) {
       let quantityElement = existingCartItem.querySelector(".cart-item-quantity");
       let totalPriceElement = existingCartItem.querySelector(".cart-item-total");
       let currentQuantity = parseInt(quantityElement.textContent, 10);
       let newQuantity = currentQuantity + quantityValue;
       quantityElement.textContent = newQuantity;
       totalPriceElement.textContent = `$${(newQuantity * productPrice).toFixed(2)}`;
     } else {
       // Create a new cart item
       const cartItem = document.createElement("div");
       cartItem.classList.add("cart-item");
       cartItem.innerHTML = `
         <img src="${productImageSrc}" alt="Product Image">
         <div class="cart-item-details">
           <p class="cart-item-name">${productName}</p>
           <p class="cart-item-price">$${productPrice.toFixed(2)} × <span class="cart-item-quantity">${quantityValue}</span> = <strong class="cart-item-total">$${(productPrice * quantityValue).toFixed(2)}</strong></p>
         </div>
         <button class="remove-item">✖</button>
       `;
       cartItemsContainer.appendChild(cartItem);
       
       // Allow removal of the cart item
       cartItem.querySelector(".remove-item").addEventListener("click", function () {
         cartItem.remove();
         updateCartUI();
       });
     }
     
     updateCartUI();
     cartDropdown.classList.add("show");
   });
 });