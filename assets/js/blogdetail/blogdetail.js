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

  
  const storyCards = document.querySelectorAll(".story-card");
  storyCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      window.location.href = `detail${index + 1}.html`;
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



function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.slicknav-menu');
  if (!menuIcon.contains(e.target)) {
      menu.classList.remove('show');
  }
});

  