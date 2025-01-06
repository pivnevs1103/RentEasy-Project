/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    const create = document.getElementById("create");
    const login = document.getElementById("login");
    const signout = document.getElementById("signout");

    login.addEventListener("click", () => {
        alert("Success! You have logged In!");
        window.location.href="/index.html";
    });
    
    create.addEventListener("click", (event) => {
        alert("Success! You have created an account!");
        window.location.href="/index.html";
        event.stopImmediatePropagation();
    });

    login.addEventListener("click", () => {
        alert("Success! You have logged In!");
        window.location.href="/index.html";
    });


    signout.addEventListener("click", () => {
        alert("You have successfully signed out!");
    });

const priceSlider = document.getElementById("price");
const priceDisplay = document.getElementById("price-display");

// Add an event listener to the slider
priceSlider.addEventListener("input", () => {
    priceDisplay.textContent = priceSlider.value;
});