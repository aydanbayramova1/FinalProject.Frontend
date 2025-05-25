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
  
    const topLinks = document.querySelectorAll("a[href='#top']")
    if (topLinks.length) {
      topLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
          return false
        })
      })
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      const heroSliderContainer = document.querySelector(".hero-slider-layout .swiper")
      if (heroSliderContainer && typeof Swiper === "function") {
        const heroSlider = new Swiper(heroSliderContainer, {
          effect: "fade",
          slidesPerView: 1,
          speed: 1000,
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: ".hero-pagination",
            clickable: true,
          },
        })
      }
    })
  

  
    document.addEventListener("DOMContentLoaded", () => {
      const testimonialSliderContainer = document.querySelector(".testimonial-slider .swiper")
      if (testimonialSliderContainer && typeof Swiper === "function") {
        const testimonialSlider = new Swiper(testimonialSliderContainer, {
          slidesPerView: 1,
          speed: 1000,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: ".testimonial-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".testimonial-btn-next",
            prevEl: ".testimonial-btn-prev",
          },
          breakpoints: {
            768: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 1,
            },
          },
        })
      }
    })
  
    document.addEventListener("DOMContentLoaded", () => {
      const skillsProgressBar = document.querySelector(".skills-progress-bar")
      if (skillsProgressBar) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const skillbars = document.querySelectorAll(".skillbar")
                skillbars.forEach((skillbar) => {
                  const countBar = skillbar.querySelector(".count-bar")
                  const percent = skillbar.getAttribute("data-percent")
  
                  if (countBar) {
                    countBar.style.transition = "width 2s ease-in-out"
                    countBar.style.width = percent
                  }
                })
  
                observer.disconnect()
              }
            })
          },
          {
            threshold: 0.5, 
          },
        )
  
        observer.observe(skillsProgressBar)
      }
    })
  })()
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-list-item")
  
    const categoryButtons = document.querySelectorAll(".nav-item button")
    let currentCategory = "all" 
  
    categoryButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-bs-target").replace("#", "")
        currentCategory = targetId
  
        document.querySelectorAll(".menu-size-options").forEach((el) => el.remove())
  
        if (currentCategory === "see-food") {
          addSizeOptionsToHotCoffees()
        }
      })
    })
  
   
  
        const menuItemContent = menuItem.querySelector(".menu-item-content")
        if (menuItemContent) {
          menuItemContent.insertAdjacentHTML("beforebegin", sizeOptionsHTML)
        }
  
        const sizeOptions = menuItem.querySelectorAll(".size-option")
        sizeOptions.forEach((option) => {
          option.addEventListener("click", function () {
            sizeOptions.forEach((opt) => opt.classList.remove("active"))
  
            this.classList.add("active")
  
            const priceModifier = Number.parseFloat(this.getAttribute("data-price-modifier"))
  
            const newPrice = (basePrice + priceModifier).toFixed(2)
  
            priceElement.classList.add("price-change")
  
            setTimeout(() => {
              priceElement.textContent = `$${newPrice}`
  
              setTimeout(() => {
                priceElement.classList.remove("price-change")
              }, 500)
            }, 250)
          })
        })
      })
    
  
    const interactiveElement = document.querySelector(".interactive")
  
    if (interactiveElement && interactiveElement.classList.contains("interactive-process-layout")) {
      const items = interactiveElement.querySelectorAll(".interactive-inner-process")
  
      if (items.length) {
        items.forEach((item) => {
          item.addEventListener("mouseenter", function () {
            const index = this.dataset.index
            const targetImg = interactiveElement.querySelector(`.interactive-process-image.img-${index}`)
  
            if (this.classList.contains("activate")) return
  
            items.forEach((el) => {
              el.classList.remove("activate")
            })
  
            this.classList.add("activate")
  
            const allImages = interactiveElement.querySelectorAll(".interactive-process-image")
            allImages.forEach((img) => {
              img.classList.remove("show")
            })
  
            if (targetImg) {
              targetImg.classList.add("show")
            }
          })
        })
      }
    }
  
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
    const teaMoreButton = document.querySelector('button[data-bs-target="#tea-more"]')
    const icedCoffeeButton = document.querySelector('button[data-bs-target="#iced-coffee"]')
  
    function setupSpecialCategoryLayout(categoryId) {
      const categoryPane = document.querySelector(categoryId)
      if (!categoryPane) return
  
      const rowElement = categoryPane.querySelector(".row")
      if (!rowElement) return
  
      const imageColumn = rowElement.querySelector(".col-lg-6:first-child")
      if (imageColumn) {
        imageColumn.style.display = "block"
      }
    }
  
    if (teaMoreButton) {
      teaMoreButton.addEventListener("click", () => {
        setupSpecialCategoryLayout("#tea-more")
      })
    }
  
    if (icedCoffeeButton) {
      icedCoffeeButton.addEventListener("click", () => {
        setupSpecialCategoryLayout("#iced-coffee")
      })
    }
  
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((item, index) => {
      const button = item.querySelector("button")
      if (!button) return
  
      if (button.textContent.trim() === "Tea & More") {
        button.setAttribute("id", "tea-more-tab")
        button.setAttribute("data-bs-target", "#tea-more")
        button.setAttribute("aria-selected", "false")
      }
        if (button.textContent.trim() === "Iced Coffees") {
        button.setAttribute("id", "iced-coffee-tab")
        button.setAttribute("data-bs-target", "#iced-coffee")
        button.setAttribute("aria-selected", "false")
      }
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




document.addEventListener("DOMContentLoaded", () => {
  const teaMoreButton = document.querySelector("#tea-more")
  const icedCoffeeButton = document.querySelector("#iced-coffee")

  if (teaMoreButton) {
    teaMoreButton.setAttribute("data-bs-target", "#tea-more")
  }

  if (icedCoffeeButton) {
    icedCoffeeButton.setAttribute("data-bs-target", "#iced-coffee")
  }

  const tabButtons = document.querySelectorAll(".nav-item button")

  let currentCategory = "all"

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-bs-target")
      if (targetId) {
        currentCategory = targetId.replace("#", "")
      }

      document.querySelectorAll(".menu-size-options").forEach((el) => el.remove())

      setTimeout(() => {
        if (currentCategory === "see-food") {
          addSizeOptionsToItems("#see-food")
        } else if (currentCategory === "iced-coffee") {
          addSizeOptionsToItems("#iced-coffee")
        } else if (currentCategory === "tea-more") {
          addSizeOptionsToItems("#tea-more")
        } else if (currentCategory === "all") {
          addSizeOptionsToAllMenuItems()
        }
      }, 100)
    })
  })

  function addSizeOptionsToItems(categorySelector) {
    const categoryItems = document.querySelector(categorySelector).querySelectorAll(".menu-list-item")

    categoryItems.forEach((menuItem) => {
      addSizeOptionsToItem(menuItem)
    })
  }

  function addSizeOptionsToAllMenuItems() {
    const allMenuItems = document.querySelector("#all").querySelectorAll(".menu-list-item")

    allMenuItems.forEach((menuItem) => {
      const titleElement = menuItem.querySelector(".menu-item-title h3")
      if (!titleElement) return

      const itemTitle = titleElement.textContent.trim().toLowerCase()

      const coffeeTeaKeywords = [
        "coffee",
        "espresso",
        "latte",
        "cappuccino",
        "americano",
        "mocha",
        "macchiato",
        "tea",
        "chai",
        "matcha",
        "iced",
      ]

      const isCoffeeOrTea = coffeeTeaKeywords.some((keyword) => itemTitle.includes(keyword))

      if (isCoffeeOrTea) {
        addSizeOptionsToItem(menuItem)
      }
    })
  }

  function addSizeOptionsToItem(menuItem) {
    const priceElement = menuItem.querySelector(".menu-item-title span")
    if (!priceElement) return

    const basePrice = Number.parseFloat(priceElement.textContent.replace("$", ""))
    if (isNaN(basePrice)) return

    if (menuItem.querySelector(".menu-size-options")) return

    const sizeOptionsHTML = `
      <div class="menu-size-options">
        <div class="menu-size-label">Size:</div>
        <div class="size-options">
          <div class="size-option active" data-size="s" data-price-modifier="0">S</div>
          <div class="size-option" data-size="m" data-price-modifier="2">M</div>
          <div class="size-option" data-size="l" data-price-modifier="4">L</div>
        </div>
      </div>
    `

    const menuItemContent = menuItem.querySelector(".menu-item-content")
    if (menuItemContent) {
      menuItemContent.insertAdjacentHTML("beforebegin", sizeOptionsHTML)
    }

    const sizeOptions = menuItem.querySelectorAll(".size-option")
    sizeOptions.forEach((option) => {
      option.addEventListener("click", function () {
        sizeOptions.forEach((opt) => opt.classList.remove("active"))

        this.classList.add("active")

        const priceModifier = Number.parseFloat(this.getAttribute("data-price-modifier"))

        const newPrice = (basePrice + priceModifier).toFixed(2)

        priceElement.classList.add("price-change")

        setTimeout(() => {
          priceElement.textContent = `$${newPrice}`

          setTimeout(() => {
            priceElement.classList.remove("price-change")
          }, 500)
        }, 250)
      })
    })
  }

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

  const activeButton = document.querySelector(".nav-item button.active")
  if (activeButton) {
    activeButton.click()
  } else {
    const firstButton = document.querySelector(".nav-item button")
    if (firstButton) {
      firstButton.click()
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const targetId = this.getAttribute("data-bs-target")
      if (!targetId) return

      const targetPane = document.querySelector(targetId)
      if (!targetPane) return

      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })

      this.classList.add("active")
      this.setAttribute("aria-selected", "true")

      document.querySelectorAll(".pricing-boxes").forEach((pane) => {
        pane.classList.remove("show", "active")
      })

      targetPane.classList.add("show", "active")
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const teaMoreButton = document.querySelector("#tea-more")
  const icedCoffeeButton = document.querySelector("#iced-coffee")

  if (teaMoreButton) {
    teaMoreButton.setAttribute("data-bs-target", "#tea-more")
  }

  if (icedCoffeeButton) {
    icedCoffeeButton.setAttribute("data-bs-target", "#iced-coffee")
  }

  const tabButtons = document.querySelectorAll(".nav-item button")

  let currentCategory = "all"

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-bs-target")
      if (targetId) {
        currentCategory = targetId.replace("#", "")
      }

      document.querySelectorAll(".menu-size-options").forEach((el) => el.remove())

      setTimeout(() => {
        if (currentCategory === "see-food") {
          addSizeOptionsToItems("#see-food")
        } else if (currentCategory === "iced-coffee") {
          addSizeOptionsToItems("#iced-coffee")
        } else if (currentCategory === "tea-more") {
          addSizeOptionsToItems("#tea-more")
        } else if (currentCategory === "all") {
          addSizeOptionsToAllMenuItems()
        }
      }, 100) 
    })
  })

  function addSizeOptionsToItems(categorySelector) {
    const categoryItems = document.querySelector(categorySelector).querySelectorAll(".menu-list-item")

    categoryItems.forEach((menuItem) => {
      addSizeOptionsToItem(menuItem)
    })
  }

  function addSizeOptionsToAllMenuItems() {
    const allMenuItems = document.querySelector("#all").querySelectorAll(".menu-list-item")

    allMenuItems.forEach((menuItem) => {
      const titleElement = menuItem.querySelector(".menu-item-title h3")
      if (!titleElement) return

      const itemTitle = titleElement.textContent.trim().toLowerCase()

      const beverageKeywords = [
        "coffee",
        "espresso",
        "latte",
        "cappuccino",
        "americano",
        "mocha",
        "macchiato",
        "tea",
        "chai",
        "matcha",
        "iced",
        "lemonade",
        "juice",
        "smoothie",
        "soda",
        "water",
        "drink",
        "frappe",
        "brew",
        "hot chocolate",
        "cocoa",
      ]

      const descriptionElement = menuItem.querySelector(".menu-item-content p")
      let descriptionText = ""
      if (descriptionElement) {
        descriptionText = descriptionElement.textContent.trim().toLowerCase()
      }

      const isBeverage = beverageKeywords.some((keyword) => itemTitle.includes(keyword))

      const descriptionKeywords = ["drink", "beverage", "sip", "cup", "glass", "ice", "hot", "cold", "water"]
      const descriptionSuggestsBeverage = descriptionKeywords.some((keyword) => descriptionText.includes(keyword))

      if (isBeverage || descriptionSuggestsBeverage || itemTitle.includes("lemonade")) {
        addSizeOptionsToItem(menuItem)
      }
    })
  }

  function addSizeOptionsToItem(menuItem) {
    const priceElement = menuItem.querySelector(".menu-item-title span")
    if (!priceElement) return

    const basePrice = Number.parseFloat(priceElement.textContent.replace("$", ""))
    if (isNaN(basePrice)) return

    if (menuItem.querySelector(".menu-size-options")) return

    const sizeOptionsHTML = `
      <div class="menu-size-options">
        <div class="menu-size-label">Size:</div>
        <div class="size-options">
          <div class="size-option active" data-size="s" data-price-modifier="0">S</div>
          <div class="size-option" data-size="m" data-price-modifier="2">M</div>
          <div class="size-option" data-size="l" data-price-modifier="4">L</div>
        </div>
      </div>
    `

    const menuItemContent = menuItem.querySelector(".menu-item-content")
    if (menuItemContent) {
      menuItemContent.insertAdjacentHTML("beforebegin", sizeOptionsHTML)
    }

    const sizeOptions = menuItem.querySelectorAll(".size-option")
    sizeOptions.forEach((option) => {
      option.addEventListener("click", function () {
        sizeOptions.forEach((opt) => opt.classList.remove("active"))

        this.classList.add("active")

        const priceModifier = Number.parseFloat(this.getAttribute("data-price-modifier"))

        const newPrice = (basePrice + priceModifier).toFixed(2)

        priceElement.classList.add("price-change")

        setTimeout(() => {
          priceElement.textContent = `$${newPrice}`

          setTimeout(() => {
            priceElement.classList.remove("price-change")
          }, 500)
        }, 250)
      })
    })
  }

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

  const activeButton = document.querySelector(".nav-item button.active")
  if (activeButton) {
    activeButton.click()
  } else {
    const firstButton = document.querySelector(".nav-item button")
    if (firstButton) {
      firstButton.click()
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const targetId = this.getAttribute("data-bs-target")
      if (!targetId) return

      const targetPane = document.querySelector(targetId)
      if (!targetPane) return

      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })

      this.classList.add("active")
      this.setAttribute("aria-selected", "true")

      document.querySelectorAll(".pricing-boxes").forEach((pane) => {
        pane.classList.remove("show", "active")
      })

      targetPane.classList.add("show", "active")
    })
  })
})



document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item")

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header")
    const button = item.querySelector(".accordion-button")
    const collapse = item.querySelector(".accordion-collapse")
    const collapseInner = item.querySelector(".accordion-body")

    if (header && button && collapse && collapseInner) {
      button.removeAttribute("data-bs-toggle")
      button.removeAttribute("data-bs-target")

      const buttonText = button.textContent.trim()
      button.innerHTML = ""

      const toggleIcon = document.createElement("span")
      toggleIcon.className = "accordion-toggle-icon"
      toggleIcon.innerHTML = collapse.classList.contains("show") ? "-" : "+"
      button.appendChild(toggleIcon)

      const textSpan = document.createElement("span")
      textSpan.className = "accordion-button-text"
      textSpan.textContent = buttonText
      button.appendChild(textSpan)

      button.classList.add("no-arrow")

      let contentHeight = collapseInner.offsetHeight

      if (collapse.classList.contains("show")) {
        collapse.style.height = contentHeight + "px"
      } else {
        collapse.style.height = "0px"
        button.classList.add("collapsed")
      }

      button.addEventListener("click", () => {
        button.classList.toggle("collapsed")

        toggleIcon.innerHTML = button.classList.contains("collapsed") ? "+" : "-"

        button.setAttribute("aria-expanded", !button.classList.contains("collapsed") ? "true" : "false")

        if (button.classList.contains("collapsed")) {
          collapse.style.height = collapse.offsetHeight + "px" 
          setTimeout(() => {
            collapse.style.height = "0px"
            setTimeout(() => {
              collapse.classList.remove("show")
            }, 300)
          }, 10)
        } else {
          collapse.classList.add("show")
          collapse.style.height = "0px" 
          setTimeout(() => {
            contentHeight = collapseInner.offsetHeight
            collapse.style.height = contentHeight + "px"
          }, 10)

          const parentAccordion = item.closest(".offers-accordion")
          if (parentAccordion) {
            const otherItems = parentAccordion.querySelectorAll(".accordion-item")

            otherItems.forEach((otherItem) => {
              if (otherItem !== item) {
                const otherButton = otherItem.querySelector(".accordion-button")
                const otherCollapse = otherItem.querySelector(".accordion-collapse")
                const otherIcon = otherItem.querySelector(".accordion-toggle-icon")
                const otherCollapseInner = otherItem.querySelector(".accordion-body")

                if (otherButton && otherCollapse && otherIcon) {
                  otherButton.classList.add("collapsed")
                  otherButton.setAttribute("aria-expanded", "false")

                  otherCollapse.style.height = otherCollapse.offsetHeight + "px"
                  setTimeout(() => {
                    otherCollapse.style.height = "0px"
                    setTimeout(() => {
                      otherCollapse.classList.remove("show")
                    }, 300) 
                  }, 10)

                  otherIcon.innerHTML = "+"
                }
              }
            })
          }
        }
      })

      window.addEventListener("resize", () => {
        if (!button.classList.contains("collapsed")) {
          contentHeight = collapseInner.offsetHeight
          collapse.style.height = contentHeight + "px"
        }
      })
    }
  })

  const style = document.createElement("style")
  style.textContent = `
    .accordion-button {
      position: relative;
      padding-left: 50px !important;
      padding-right: 20px !important;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      color : #C9A581;
    }
    
    .accordion-toggle-icon {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 24px;
      font-weight: bold;
      width: 24px;
      height: 24px;
      line-height: 22px;
      text-align: center;
      transition: all 0.3s ease;
         color:#C9A581;
    }
    
    .accordion-button-text {
      flex: 1;
    }
    
    .accordion-button.no-arrow::after {
      display: none !important;
    }
    
    .accordion-collapse {
      transition: height 0.3s ease-in-out;
      overflow: hidden;
    }
    
    .accordion-button:hover .accordion-toggle-icon {
      color:#C9A581;
    }
    
    .accordion-button:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
    
    .accordion-button:not(.collapsed) {
      background-color: rgba(170, 5, 5, 0.05);
    }rgba(0, 0, 0, 0.05)rgba(203, 143, 31, 0.05)
  `
  document.head.appendChild(style)

})
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


function selectSize(element, itemName, newPrice) {
    const itemContainer = element.closest('.menu-list-item');
    const allSizeOptions = itemContainer.querySelectorAll('.size-option');
    
    allSizeOptions.forEach(function(option) {
        option.classList.remove('active');
    });
    
    element.classList.add('active');
    element.classList.add('selecting');
    
    setTimeout(function() {
        element.classList.remove('selecting');
    }, 300);
    
    const priceElement = itemContainer.querySelector('.item-price');
    if (priceElement) {
        priceElement.classList.add('price-change');
        
        setTimeout(function() {
            priceElement.textContent = '$' + newPrice.toFixed(2);
            
            setTimeout(function() {
                priceElement.classList.remove('price-change');
            }, 300);
        }, 150);
    }
    
    localStorage.setItem('size_' + itemName, element.dataset.size);
    
    const event = new CustomEvent('sizeSelected', {
        detail: {
            itemName: itemName,
            size: element.dataset.size,
            price: newPrice
        }
    });
    document.dispatchEvent(event);
}

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-list-item[data-item]');
    
    menuItems.forEach(function(item) {
        const itemName = item.dataset.item;
        const savedSize = localStorage.getItem('size_' + itemName);
        
        if (savedSize) {
            const sizeOption = item.querySelector('.size-option[data-size="' + savedSize + '"]');
            if (sizeOption) {
                const allOptions = item.querySelectorAll('.size-option');
                allOptions.forEach(function(opt) {
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

document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('size-option')) {
        const currentOption = e.target;
        const allOptions = currentOption.closest('.size-options').querySelectorAll('.size-option');
        const currentIndex = Array.from(allOptions).indexOf(currentOption);
        
        let nextIndex = currentIndex;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                nextIndex = currentIndex > 0 ? currentIndex - 1 : allOptions.length - 1;
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextIndex = currentIndex < allOptions.length - 1 ? currentIndex + 1 : 0;
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                currentOption.click();
                return;
        }
        
        if (nextIndex !== currentIndex) {
            allOptions[nextIndex].focus();
        }
    }
})



function setupFilterAndSort() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceSort = document.getElementById('priceSort');

    categoryFilter.addEventListener('change', applyFilters);
    priceSort.addEventListener('change', applySorting);

    function applyFilters() {
        const categoryValue = categoryFilter.value;
        const allSections = document.querySelectorAll('.menu-section');

        allSections.forEach(function(section) {
            const sectionCategory = section.dataset.category;
            
            if (categoryValue === 'all' || sectionCategory === categoryValue) {
                section.classList.remove('hidden');
                section.style.display = 'block';
                
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                
                setTimeout(function() {
                    section.style.transition = 'all 0.6s ease';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 100);
            } else {
                section.classList.add('hidden');
                section.style.display = 'none';
            }
        });

        applySorting();
        
        console.log('Filtered by category:', categoryValue);
    }

    function applySorting() {
        const sortValue = priceSort.value;
        const visibleSections = document.querySelectorAll('.menu-section:not(.hidden)');

        visibleSections.forEach(function(section) {
            const menuItems = Array.from(section.querySelectorAll('.menu-item'));
            const menuItemsContainer = section.querySelector('.menu-items');

            if (menuItems.length === 0) return;

            menuItems.sort(function(a, b) {
                switch (sortValue) {
                    case 'price-low':
                        return parseFloat(a.dataset.basePrice) - parseFloat(b.dataset.basePrice);
                    case 'price-high':
                        return parseFloat(b.dataset.basePrice) - parseFloat(a.dataset.basePrice);
                    case 'name-az':
                        const nameA = a.querySelector('.item-name').textContent;
                        const nameB = b.querySelector('.item-name').textContent;
                        return nameA.localeCompare(nameB);
                    case 'name-za':
                        const nameA2 = a.querySelector('.item-name').textContent;
                        const nameB2 = b.querySelector('.item-name').textContent;
                        return nameB2.localeCompare(nameA2);
                    default:
                        return 0;
                }
            });

            menuItems.forEach(function(item) {
                menuItemsContainer.appendChild(item);
            });

            menuItems.forEach(function(item, index) {
                item.style.animation = 'none';
                setTimeout(function() {
                    item.style.animation = `fadeInUp 0.4s ease-out ${index * 0.1}s both`;
                }, 50);
            });
        });

        console.log('Menu sorted by:', sortValue);
    }
}


function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
                
                const menuItems = entry.target.querySelectorAll('.menu-item');
                menuItems.forEach(function(item, index) {
                    setTimeout(function() {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    const menuSections = document.querySelectorAll('.menu-section');
    menuSections.forEach(function(section) {
        observer.observe(section);
        
        const menuItems = section.querySelectorAll('.menu-item');
        menuItems.forEach(function(item) {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s ease';
        });
    });
}



function setupMenuInteractions() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const itemName = this.querySelector('.item-name').textContent;
            console.log('Menu item clicked:', itemName);
        });
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
      
        item.addEventListener('mouseenter', function() {
          
        });
    });
}



document.getElementById("loadMore").addEventListener("click", function () {
    alert("More stories coming soon from Italy ☕🇮🇹");
  });
  
  // .story-card elementlərinə kliklənəndə uyğun detail səhifəsinə yönləndirilir
  // Məsələn: birinci karta klikləsən, detail1.html açılır
  const storyCards = document.querySelectorAll(".story-card");
  storyCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      window.location.href = `detail${index + 1}.html`;
    });
  });
  