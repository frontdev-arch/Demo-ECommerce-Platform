# Frontend Mentor - E-commerce product page solution
This is a solution to the Demo E-commerce product page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot
![image.alt](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## My process

- Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript for interactivity


## What I learned

In this project, I focused on integrating JavaScript for cart functionality and thumbnail switching. Here are a few snippets to highlight some of the key areas:

<!-- HTML snippet: The product display and thumbnail gallery -->
<div class="image-container">
  <img src="./images/image-product-1.jpg" class="img1" alt="Product Image" />
  <div class="image-thumbnail">
    <img class="img" src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail 1" />
    <img class="img" src="./images/image-product-2-thumbnail.jpg" alt="Thumbnail 2" />
    <img class="img" src="./images/image-product-3-thumbnail.jpg" alt="Thumbnail 3" />
    <img class="img" src="./images/image-product-4-thumbnail.jpg" alt="Thumbnail 4" />
  </div>
</div>

<!-- CSS snippet: Hover effect on thumbnails -->
.img:hover {
  border: 1px solid #ff7d1a;
  background-color: #fff;
  opacity: 0.3;
}

<!-- JS snippet: Switching main product image -->
const images = document.querySelectorAll(".img");
const img1 = document.querySelector(".img1");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    img1.src = `./images/image-product-${index + 1}.jpg`;
  });
});

These implementations allowed me to dynamically update the product image based on thumbnail clicks, which was one of the core requirements of the challenge.

## Continued development

In future projects, I plan to:

- Implement a lightbox modal for the product images.
- Refine responsive design techniques for different device sizes.
- Experiment more with frameworks like React or Vue for similar projects.
- Use local storage to persist cart data.


## Useful resources

- The Markdown Guide – Helpful for improving my README formatting.
- MDN Web Docs – General reference for HTML, CSS, and JavaScript best practices.


## Author

- Portfolio – Mohammed Amir Umar


## Acknowledgments

Special thanks to:

- Frontend Mentor for providing such engaging challenges.
