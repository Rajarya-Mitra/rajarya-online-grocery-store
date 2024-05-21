document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-btn");
    const cartBtn = document.getElementById("cart-btn");
    const loginBtn = document.getElementById("login-btn");
    const menuBtn = document.getElementById("menu-btn");
    const searchForm = document.querySelector(".search-form");
    const shoppingCart = document.querySelector(".shopping-cart");
    const loginForm = document.querySelector(".login-form");
    const navbar = document.querySelector(".navbar");

    // Function to hide all forms except the navbar
    function hideAllForms() {
        searchForm.style.display = "none";
        shoppingCart.style.display = "none";
        loginForm.style.display = "none";
    }

    // Toggle search form visibility when the search icon is clicked
    searchBtn.addEventListener("click", function () {
        if (getComputedStyle(searchForm).display === "none") {
            hideAllForms();
            searchForm.style.display = "flex";
        } else {
            searchForm.style.display = "none";
        }
    });

    // Toggle shopping cart visibility when the cart icon is clicked
    cartBtn.addEventListener("click", function () {
        if (getComputedStyle(shoppingCart).display === "none") {
            hideAllForms();
            shoppingCart.style.display = "block";
        } else {
            shoppingCart.style.display = "none";
        }
    });

    // Toggle login form visibility when the login icon is clicked
    loginBtn.addEventListener("click", function () {
        if (getComputedStyle(loginForm).display === "none") {
            hideAllForms();
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });

    // Toggle navbar visibility when the menu icon is clicked in mobile view
    menuBtn.addEventListener("click", function () {
        if (getComputedStyle(navbar).display === "none") {
            navbar.style.display = "block";
        } else {
            navbar.style.display = "none";
        }
    });
    var swiper = new Swiper(".product-slider", {
        loop:true, 
        spaceBetween: 20,
    
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          540: {
            slidesPerView: 2,
          },
          1486: {
            slidesPerView: 3,
          },
        },
    });
    var swiper = new Swiper(".review-slider", {
        loop:true,
        spaceBetween: 20,
    
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          540: {
            slidesPerView: 2,
          },
          1486: {
            slidesPerView: 3,
          },
        },
    });
});
