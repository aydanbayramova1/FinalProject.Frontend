"use strict";

function handlePreloader() {
    var $preloader = $(".preloader");

    $(window).on("load", function () {
        setTimeout(function () {
            $preloader.fadeOut(600);
        }, 3000);
    });

    setTimeout(function () {
        if ($preloader.is(":visible")) {
            $preloader.fadeOut(600);
        }
    }, 1000);
}

$(document).ready(function () {
    handlePreloader();
});


function initStickyHeader() {
    if ($('.active-sticky-header').length) {
        const $window = $(window);

        function setHeaderHeight() {
            $("header.main-header").css("height", $('header .header-sticky').outerHeight());
        }

        $window.on('resize', function () {
            setHeaderHeight();
        });


        $window.on("scroll", function () {
            var fromTop = $window.scrollTop();
            setHeaderHeight();
            var headerHeight = $('header .header-sticky').outerHeight();

            $("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
            $("header .header-sticky").toggleClass("active", (fromTop > 600));
        });
    }
}

$(document).ready(function () {
    initStickyHeader();
});


function initMobileMenu(menuSelector, targetSelector, labelText = '') {
    $(menuSelector).slicknav({
        label: labelText,
        prependTo: targetSelector
    });
}

function counterUp(elementsSelector, delay, duration) {
    const elements = document.querySelectorAll(elementsSelector);

    elements.forEach(element => {
        let start = 0;
        let end = parseInt(element.textContent, 10);
        let range = end - start;
        let increment = end / (duration / delay);
        let current = start;
        let timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = end;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, delay);
    });
}

counterUp('.counter', 6, 3000);



document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style")
    style.textContent = `
      .pricing-boxes {
        transition: opacity 0.3s ease;
        opacity: 0;
        display: none;
      }
      .pricing-boxes.show {
        opacity: 1;
        display: block;
      }
      .btn-highlighted {
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .btn-highlighted.active {
        background-color: #d97706;
        color: white;
      }
    `
    document.head.appendChild(style)
})

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-anime img")

    images.forEach((img) => {
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)"
            this.style.transition = "transform 0.5s ease"
        })

        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)"
        })
    })
})


const style = document.createElement("style")
style.textContent = `
      .price-change {
        animation: priceChange 0.75s ease;
      }
      
      @keyframes priceChange {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      .menu-size-options {
        margin: 10px 0;
      }
      
      .menu-size-label {
        font-weight: bold;
        margin-bottom: 5px;
      }
      
      .size-options {
        display: flex;
        gap: 10px;
      }
      
      .size-option {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .size-option.active {
        background-color: #8B5A2B;
        color: white;
        border-color: #8B5A2B;
      }
    `
document.head.appendChild(style)

if (document.querySelector("#see-food.active")) {
    addSizeOptionsToHotCoffees()
}


document.addEventListener("DOMContentLoaded", () => {
    const allButtons = document.querySelectorAll(".nav-item button")

    let teaMoreButton = null
    let icedCoffeeButton = null

    allButtons.forEach((button) => {
        const text = button.textContent.trim()
        if (text === "Tea & More") {
            teaMoreButton = button
        } else if (text === "Iced Coffees") {
            icedCoffeeButton = button
        }
    })


    const firstButton = document.querySelector(".nav-item button")
    if (firstButton) {
        setTimeout(() => {
            firstButton.click()
        }, 100)
    }
})



document.querySelectorAll('[data-bs-toggle="tab"]').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-bs-target');
        document.querySelectorAll('.tab-pane').forEach(tab => {
            tab.classList.remove('show', 'active');
        });
        document.querySelector(targetId).classList.add('show', 'active');

        document.querySelectorAll('[data-bs-toggle="tab"]').forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
        });
        button.setAttribute('aria-selected', 'true');
    });
});

const images = document.querySelectorAll(".image-anime img");

images.forEach((img) => {
    img.style.transition = "transform 5s ease-in-out";

    img.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
    });

    img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});

const form = document.getElementById("searchForm");
const searchInput = document.getElementById("menuSearch");

if (form && searchInput) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const keyword = searchInput.value.trim().toLowerCase();
        const activeTab = document.querySelector('.tab-pane.active');
        const items = activeTab.querySelectorAll(".menu-item");

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(keyword)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
}

const tabButtons = document.querySelectorAll('.nav-tabs button');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        searchInput.value = '';
        setTimeout(() => {
            const activeTab = document.querySelector('.tab-pane.active');
            const items = activeTab.querySelectorAll(".menu-item");
            items.forEach(item => item.classList.remove("hidden"));
        }, 200);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-list-item[data-item]');

    menuItems.forEach(function (item) {
        const itemName = item.dataset.item;
        const savedSize = localStorage.getItem('size_' + itemName);

        if (savedSize) {
            const sizeOption = item.querySelector('.size-option[data-size="' + savedSize + '"]');
            if (sizeOption) {
                const allOptions = item.querySelectorAll('.size-option');
                allOptions.forEach(function (opt) {
                    opt.classList.remove('active');
                });

                sizeOption.classList.add('active');

                const price = parseFloat(sizeOption.dataset.price);
                const priceElement = item.querySelector('.item-price');
                if (priceElement && !isNaN(price)) {
                    priceElement.textContent = '$' + price.toFixed(2);
                }
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const titles = document.querySelectorAll(".text-anime-style-3, .section-title");

    titles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const userIconBtn = document.querySelector(".user-icon-btn")
    const dropdownMenu = document.querySelector(".dropdown-menu")

    if (userIconBtn && dropdownMenu) {
        userIconBtn.addEventListener("click", (e) => {
            e.preventDefault()
            dropdownMenu.classList.toggle("show")

            document.addEventListener("click", function closeDropdown(event) {
                if (!event.target.closest(".user-account-dropdown")) {
                    dropdownMenu.classList.remove("show")
                    document.removeEventListener("click", closeDropdown)
                }
            })
        })
    }

    const mobileMenu = document.querySelector(".responsive-menu #menu")

    if (mobileMenu) {
        const loginItem = document.createElement("li")
        loginItem.className = "user-menu-item"
        loginItem.innerHTML = '<a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>'

        const registerItem = document.createElement("li")
        registerItem.className = "user-menu-item"
        registerItem.innerHTML = '<a href="register.html"><i class="fas fa-user-plus"></i> Register</a>'

        mobileMenu.appendChild(loginItem)
        mobileMenu.appendChild(registerItem)
    }

    const mobileMenuToggle = document.querySelector(".fa-bars")

})

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}

document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.slicknav-menu');
    if (!menuIcon.contains(e.target)) {
        menu.classList.remove('show');
    }
});

