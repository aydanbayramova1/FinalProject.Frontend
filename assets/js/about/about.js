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

$(document).ready(function () {

	initMobileMenu('#menu', '.responsive-menu'); 
});


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
    const tabButtons = document.querySelectorAll(".nav-item button")
  
    const tabPanes = document.querySelectorAll(".pricing-boxes")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("data-bs-target").replace("#", "")
  
       
        tabButtons.forEach((btn) => {
          btn.classList.remove("active")
          btn.setAttribute("aria-selected", "false")
        })
  
        
        this.classList.add("active")
        this.setAttribute("aria-selected", "true")
  
     
        tabPanes.forEach((pane) => {
          pane.classList.remove("show", "active")
          pane.classList.add("fade")
        })
  
     
        const targetPane = document.getElementById(targetId)
        if (targetPane) {
          targetPane.classList.add("show", "active")
        }
      })
    })

    if (!document.querySelector(".nav-item button.active")) {
      const firstButton = document.querySelector(".nav-item button")
      if (firstButton) {
        
        firstButton.click()
      }
    }
  })
  
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
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".slicknav_menu i")
    const mobileMenu = document.querySelector(".slicknav_menu ul")
  
    if (menuIcon && mobileMenu) {
      menuIcon.addEventListener("click", function () {
        const menuParent = this.parentElement
        menuParent.classList.toggle("active")
      })
    }
    function handleResponsiveLayout() {
      const windowWidth = window.innerWidth
      const topbarContactInfo = document.querySelector(".topbar-contact-info ul")
  
      if (windowWidth <= 767) {
        if (topbarContactInfo) {
          const addressItem = topbarContactInfo.querySelector("li:nth-child(2)")
          if (addressItem) {
            const addressText = addressItem.textContent
            if (addressText.length > 40) {
              const truncatedText = addressText.substring(0, 40) + "..."
              addressItem.setAttribute("title", addressText) 
              addressItem.textContent = truncatedText
            }
          }
        }
      }
    }

    handleResponsiveLayout()
    window.addEventListener("resize", handleResponsiveLayout)
  })
  


;(() => {
    const body = document.body
    const window = self
  
    const slicknav = window.slicknav
    const Swiper = window.Swiper
    const magnificPopup = window.magnificPopup
  
    document.addEventListener("DOMContentLoaded", () => {
      if (typeof slicknav === "function") {
        slicknav(document.getElementById("menu"), {
          label: "",
          prependTo: ".responsive-menu",
          closedSymbol: "&#9658;",
          openedSymbol: "&#9660;",
        })
      } else if (window.SlickNav) {
        new window.SlickNav(document.getElementById("menu"), {
          label: "",
          prependTo: ".responsive-menu",
          closedSymbol: "&#9658;",
          openedSymbol: "&#9660;",
        })
      } 
       
    })
})