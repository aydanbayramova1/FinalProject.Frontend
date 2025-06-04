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




// Fallback QR Code libraries
if (typeof QRCode === 'undefined') {
  console.log('Primary QRCode library failed, trying alternative...')
  const script1 = document.createElement('script')
  script1.src = 'https://unpkg.com/qrcode@1.5.3/build/qrcode.min.js'
  script1.onload = () => console.log('Alternative QRCode library loaded')
  script1.onerror = () => {
    console.log('Alternative QRCode library failed, trying third option...')
    const script2 = document.createElement('script')
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js'
    script2.onload = () => console.log('Third QRCode library loaded')
    script2.onerror = () => console.log('All QRCode libraries failed')
    document.head.appendChild(script2)
  }
  document.head.appendChild(script1)
}

        console.log("JavaScript loading in HEAD...")
        
        let cart = []
        let selectedPrices = {}
        let menuVisible = false
        let currentReservation = null

        const restaurantSchedule = {
          weekdays: { open: "09:00", close: "22:00" },
          weekend: { open: "09:00", close: "23:30" },
        }

        const tables = [
          { id: 1, capacity: 2, name: "Table 1 (Window)" },
          { id: 2, capacity: 4, name: "Table 2 (Corner)" },
          { id: 3, capacity: 6, name: "Table 3 (Center)" },
          { id: 4, capacity: 8, name: "Table 4 (Private)" },
          { id: 5, capacity: 10, name: "Table 5 (Large)" },
          { id: 6, capacity: 12, name: "Table 6 (Family)" },
          { id: 7, capacity: 15, name: "Table 7 (VIP)" },
        ]

const existingReservations = [
  { date: "2025-01-28", time: "19:00", tableId: 1, reservationId: "RES12345", customerName: "John Doe" },
  { date: "2025-01-28", time: "20:00", tableId: 3, reservationId: "RES12346", customerName: "Jane Smith" },
  { date: "2025-01-29", time: "18:30", tableId: 2, reservationId: "RES12347", customerName: "Mike Johnson" },
  { date: "2025-01-29", time: "19:00", tableId: 1, reservationId: "RES12348", customerName: "Sarah Wilson" },
  { date: "2025-01-30", time: "20:00", tableId: 4, reservationId: "RES12349", customerName: "David Brown" },
]

        window.toggleMenu = function() {
          console.log("toggleMenu function called!")
          
          const menuSection = document.getElementById("menuSection")
          const toggleBtn = document.getElementById("toggleMenu")

          if (!menuSection || !toggleBtn) {
            console.error("Menu elements not found!")
            return
          }

          console.log("Button disabled:", toggleBtn.disabled)

          if (toggleBtn.disabled) {
            alert("Please complete all required fields first!")
            return
          }

          menuVisible = !menuVisible
          console.log("Menu visible:", menuVisible)

          if (menuVisible) {
            menuSection.style.display = "block"
            menuSection.style.opacity = "1"
            menuSection.style.pointerEvents = "all"
            menuSection.classList.add("active")
            toggleBtn.textContent = " Hide Menu"
            console.log("Menu shown")
          } else {
            menuSection.style.opacity = "0.5"
            menuSection.style.pointerEvents = "none"
            menuSection.classList.remove("active")
            toggleBtn.textContent = " Select Menu Items"
            console.log("Menu hidden")
          }
        }

        window.filterCategory = function(category) {
          const filterBtns = document.querySelectorAll(".filter-btn")
          const menuItems = document.querySelectorAll(".menu-item")

          filterBtns.forEach((btn) => btn.classList.remove("active"))
          event.target.classList.add("active")

          menuItems.forEach((item) => {
            if (category === "all" || item.dataset.category === category) {
              item.classList.remove("hidden")
            } else {
              item.classList.add("hidden")
            }
          })
        }

        window.selectSize = function(button, itemId, price) {
          const sizeButtons = button.parentElement.querySelectorAll(".size-btn")
          sizeButtons.forEach((btn) => btn.classList.remove("active"))
          button.classList.add("active")

          selectedPrices[itemId] = price

          const priceDisplay = button.closest(".menu-item").querySelector(".menu-item-price")
          priceDisplay.textContent = `$${price.toFixed(2)}`
        }

        window.addToCart = function(name, defaultPrice, itemId) {
          const price = selectedPrices[itemId] || defaultPrice
          const size = getSelectedSize(itemId)

          const cartItemId = `${itemId}-${size || "default"}`
          const existingItem = cart.find((item) => item.id === cartItemId)

          if (existingItem) {
            existingItem.quantity += 1
          } else {
            cart.push({
              id: cartItemId,
              name: name,
              price: price,
              quantity: 1,
              size: size,
            })
          }

          updateCartDisplay()
        }

        window.updateQuantity = function(cartItemId, change) {
          const itemIndex = cart.findIndex((item) => item.id === cartItemId)
          if (itemIndex === -1) return

          cart[itemIndex].quantity += change

          if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1)
          }

          updateCartDisplay()
        }

        window.submitForm = function(event) {
  event.preventDefault()

  if (!validateForm()) {
    return
  }

  document.getElementById("loadingModal").style.display = "flex"

  const selectedTable = tables.find((table) => table.id == document.getElementById("tableSelect").value)
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value
  const selectedDate = document.getElementById("date").value
  const selectedTime = document.getElementById("time").value

  const conflictingReservation = existingReservations.find(res => 
    res.date === selectedDate && 
    res.time === selectedTime && 
    res.tableId === selectedTable.id
  )

  if (conflictingReservation) {
    document.getElementById("loadingModal").style.display = "none"
    alert(`Sorry! Table ${selectedTable.name} has just been reserved for ${selectedTime} on ${selectedDate}. Please select a different table or time.`)
    updateTableOptions() 
    return
  }

  const reservationData = {
    id: generateReservationId(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: selectedDate,
    time: selectedTime,
    guests: document.getElementById("guests").value,
    table: selectedTable,
    notes: document.getElementById("notes").value,
    paymentMethod: paymentMethod,
    cart: cart,
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    createdAt: new Date().toISOString(),
  }

  setTimeout(() => {
    existingReservations.push({
      date: reservationData.date,
      time: reservationData.time,
      tableId: selectedTable.id,
      reservationId: reservationData.id,
      customerName: reservationData.name,
      customerEmail: reservationData.email,
      customerPhone: reservationData.phone,
      createdAt: reservationData.createdAt
    })

    console.log("New reservation added:", reservationData.id)
    console.log("Updated reservations:", existingReservations)

    sendConfirmationEmail(reservationData)
    sendConfirmationSMS(reservationData)

    currentReservation = reservationData

    document.getElementById("loadingModal").style.display = "none"

    showSuccessModal(reservationData)

    resetForm()
  }, 2000)
}

        window.closeModal = function() {
          document.getElementById("successModal").style.display = "none"
        }

        window.cancelReservation = function() {
  if (!currentReservation) return

  const reservationDateTime = new Date(`${currentReservation.date}T${currentReservation.time}:00`)
  const now = new Date()
  const timeDifference = reservationDateTime.getTime() - now.getTime()
  const hoursUntilReservation = timeDifference / (1000 * 60 * 60)

  console.log("Hours until reservation:", hoursUntilReservation)

  if (hoursUntilReservation < 2) {
    alert(`Sorry! You can only cancel reservations at least 2 hours in advance. Your reservation is in ${hoursUntilReservation.toFixed(1)} hours.`)
    return
  }

  const confirmCancel = confirm(
    `Are you sure you want to cancel your reservation for ${currentReservation.date} at ${currentReservation.time}?\n\nCancellation is free since you're canceling more than 2 hours in advance.`
  )

  if (confirmCancel) {
    const index = existingReservations.findIndex((res) => res.reservationId === currentReservation.id)
    if (index > -1) {
      existingReservations.splice(index, 1)
    }

    sendCancellationEmail(currentReservation)
    sendCancellationSMS(currentReservation)

    alert("Your reservation has been cancelled successfully. Confirmation has been sent to your email and phone.")
    closeModal()
    currentReservation = null
  }
}

window.cancelReservationByEmail = function(reservationId) {
  const reservation = existingReservations.find(res => res.reservationId === reservationId)
  
  if (!reservation) {
    alert("Reservation not found or already cancelled.")
    return
  }

  const reservationDateTime = new Date(`${reservation.date}T${reservation.time}:00`)
  const now = new Date()
  const timeDifference = reservationDateTime.getTime() - now.getTime()
  const hoursUntilReservation = timeDifference / (1000 * 60 * 60)

  if (hoursUntilReservation < 2) {
    alert(`Sorry! You can only cancel reservations at least 2 hours in advance. Your reservation is in ${hoursUntilReservation.toFixed(1)} hours.`)
    return
  }

  const confirmCancel = confirm(
    `Cancel reservation for ${reservation.customerName}?\n\nDate: ${reservation.date}\nTime: ${reservation.time}\nTable: ${tables.find(t => t.id === reservation.tableId)?.name}`
  )

  if (confirmCancel) {
    const index = existingReservations.findIndex((res) => res.reservationId === reservationId)
    if (index > -1) {
      existingReservations.splice(index, 1)
    }

    sendCancellationEmail(reservation)
    sendCancellationSMS(reservation)

    alert("Reservation cancelled successfully!")
  }
}

        function getSelectedSize(itemId) {
          const menuItem = document.querySelector(`[data-item-id="${itemId}"]`)
          if (!menuItem) return null

          const activeSize = menuItem.querySelector(".size-btn.active")
          if (!activeSize) return null

          return activeSize.textContent.split(" - ")[0]
        }

        function updateCartDisplay() {
          const cartDisplay = document.getElementById("cartDisplay")
          const cartItems = document.getElementById("cartItems")
          const totalPrice = document.getElementById("totalPrice")

          if (cart.length === 0) {
            cartDisplay.style.display = "none"
            return
          }

          cartDisplay.style.display = "block"

          cartItems.innerHTML = cart
            .map(
              (item) => `
            <div class="cart-item">
              <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                ${item.size ? `<div class="cart-item-size">(${item.size})</div>` : ""}
              </div>
              <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          `,
            )
            .join("")

          const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
          totalPrice.textContent = `$${total.toFixed(2)}`
        }

        function checkFormCompletion() {
          const name = document.getElementById("name")?.value.trim() || ""
          const email = document.getElementById("email")?.value.trim() || ""
          const phone = document.getElementById("phone")?.value.trim() || ""
          const date = document.getElementById("date")?.value || ""
          const time = document.getElementById("time")?.value || ""
          const guests = document.getElementById("guests")?.value || ""
          const table = document.getElementById("tableSelect")?.value || ""

          const isFormComplete = name && email && phone && date && time && guests && table

          const toggleBtn = document.getElementById("toggleMenu")
          const submitBtn = document.getElementById("submitBtn")

          if (!toggleBtn || !submitBtn) return

          console.log("Form completion check:", {
            name: !!name,
            email: !!email,
            phone: !!phone,
            date: !!date,
            time: !!time,
            guests: !!guests,
            table: !!table,
            isComplete: isFormComplete,
          })

          if (isFormComplete) {
            toggleBtn.disabled = false
            toggleBtn.textContent = " Select Menu Items"
            toggleBtn.style.opacity = "1"
            toggleBtn.style.cursor = "pointer"
            toggleBtn.style.backgroundColor = "#e4ccb4"
            toggleBtn.style.color = "#121d23"
            submitBtn.disabled = false

            console.log(" Form complete! Menu button enabled")
          } else {
            toggleBtn.disabled = true
            toggleBtn.textContent = " Complete form first"
            toggleBtn.style.opacity = "0.5"
            toggleBtn.style.cursor = "not-allowed"
            toggleBtn.style.backgroundColor = "#666"
            toggleBtn.style.color = "#999"
            submitBtn.disabled = true

            console.log("Form incomplete! Please fill all fields")

            if (menuVisible) {
              const menuSection = document.getElementById("menuSection")
              if (menuSection) {
                menuSection.style.opacity = "0.5"
                menuSection.style.pointerEvents = "none"
                menuSection.classList.remove("active")
                menuVisible = false
              }
            }
          }

          const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || "online"
          const paymentSection = document.getElementById("paymentSection")

          if (paymentSection) {
            if (paymentMethod === "online" && isFormComplete) {
              paymentSection.style.display = "block"
            } else {
              paymentSection.style.display = "none"
            }
          }
        }

        function validateDate() {
          const dateInput = document.getElementById("date")
          if (!dateInput) return false

          const selectedDate = new Date(dateInput.value)
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          if (selectedDate < today) {
            return false
          } else {
            updateTimeOptions()
            updateTableOptions()
            checkFormCompletion()
            return true
          }
        }

        function updateTimeOptions() {
          const dateInput = document.getElementById("date")
          const timeInput = document.getElementById("time")

          if (!dateInput || !timeInput || !dateInput.value) return

          const selectedDate = new Date(dateInput.value)
          const today = new Date()
          const isToday = selectedDate.toDateString() === today.toDateString()
          const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6

          const schedule = isWeekend ? restaurantSchedule.weekend : restaurantSchedule.weekdays

          let minTime = schedule.open
          if (isToday) {
            const currentHour = today.getHours()
            const nextHour = currentHour + 1

            if (nextHour < 24) {
              minTime = `${nextHour.toString().padStart(2, "0")}:00`
            }
          }

          timeInput.setAttribute("min", minTime)
          timeInput.setAttribute("max", schedule.close)
        }

        function updateTableOptions() {
  const dateInput = document.getElementById("date")
  const timeInput = document.getElementById("time")
  const guestsInput = document.getElementById("guests")
  const tableSelect = document.getElementById("tableSelect")

  if (!dateInput || !timeInput || !guestsInput || !tableSelect) return

  if (!dateInput.value || !timeInput.value || !guestsInput.value) {
    tableSelect.innerHTML = '<option value="">Select date, time and guests first</option>'
    return
  }

  const guests = Number.parseInt(guestsInput.value)
  const selectedDate = dateInput.value
  const selectedTime = timeInput.value

  console.log(`Checking availability for ${selectedDate} at ${selectedTime} for ${guests} guests`)

  const suitableTables = tables.filter((table) => table.capacity >= guests)
  console.log("Suitable tables by capacity:", suitableTables.map(t => t.name))

  const reservedTableIds = existingReservations
    .filter(reservation => 
      reservation.date === selectedDate && 
      reservation.time === selectedTime
    )
    .map(reservation => reservation.tableId)

  console.log("Reserved table IDs for this time:", reservedTableIds)

  const availableTables = suitableTables.filter((table) => 
    !reservedTableIds.includes(table.id)
  )

  console.log("Available tables:", availableTables.map(t => t.name))

  if (availableTables.length === 0) {
    if (suitableTables.length === 0) {
      tableSelect.innerHTML = '<option value="">No tables available for this many guests</option>'
    } else {
      tableSelect.innerHTML = `<option value="">All suitable tables are reserved for ${selectedTime}</option>`
      
      showAlternativeTimes(selectedDate, guests, tableSelect)
    }
  } else {
    tableSelect.innerHTML =
      '<option value="">Select a table</option>' +
      availableTables
        .map((table) => {
          const reservedInfo = getTableReservationInfo(table.id, selectedDate)
          return `<option value="${table.id}">${table.name} - Up to ${table.capacity} people${reservedInfo}</option>`
        })
        .join("")
  }
}

function getTableReservationInfo(tableId, selectedDate) {
  const tableReservations = existingReservations.filter(res => 
    res.tableId === tableId && res.date === selectedDate
  )
  
  if (tableReservations.length > 0) {
    const times = tableReservations.map(res => res.time).join(", ")
    return ` (Reserved: ${times})`
  }
  return ""
}

function showAlternativeTimes(selectedDate, guests, tableSelect) {
  const allTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"]
  const suitableTables = tables.filter(table => table.capacity >= guests)
  
  const availableAlternatives = []
  
  allTimes.forEach(time => {
    const reservedTableIds = existingReservations
      .filter(res => res.date === selectedDate && res.time === time)
      .map(res => res.tableId)
    
    const availableTablesForTime = suitableTables.filter(table => 
      !reservedTableIds.includes(table.id)
    )
    
    if (availableTablesForTime.length > 0) {
      availableAlternatives.push({
        time: time,
        tables: availableTablesForTime
      })
    }
  })
  
  if (availableAlternatives.length > 0) {
    const alternativeOptions = availableAlternatives
      .slice(0, 3)
      .map(alt => 
        `<option value="" disabled> Available at ${alt.time}: ${alt.tables.map(t => t.name).join(", ")}</option>`
      )
      .join("")
    
    tableSelect.innerHTML += alternativeOptions
  }
}

function validateForm() {
  const name = document.getElementById("name")?.value.trim() || ""
  const email = document.getElementById("email")?.value.trim() || ""
  const phone = document.getElementById("phone")?.value.trim() || ""
  const date = document.getElementById("date")?.value || ""
  const time = document.getElementById("time")?.value || ""
  const guests = document.getElementById("guests")?.value || ""
  const tableId = document.getElementById("tableSelect")?.value || ""

  if (!name || !email || !phone || !date || !time || !guests || !tableId) {
    alert("Please fill in all required fields!")
    return false
  }

  const phoneRegex = /^(\+994|0)(50|51|55|70|77|99|10|12|18)\d{7}$/
  const cleanPhone = phone.replace(/[\s\-()]/g, '')
  if (!phoneRegex.test(cleanPhone)) {
    alert("Zəhmət olmasa düzgün Azərbaycan telefon nömrəsi daxil edin! (+994 XX XXX XX XX)")
    return false
  }

  const conflictingReservation = existingReservations.find(res => 
    res.date === date && 
    res.time === time && 
    res.tableId === parseInt(tableId)
  )

  if (conflictingReservation) {
    alert(`Sorry! This table has just been reserved by another customer. Please select a different table or time.`)
    updateTableOptions()
    return false
  }

  return true
}

        function generateReservationId() {
          return "RES" + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase()
        }

function sendConfirmationSMS(reservationData) {
  console.log("📱 Sending SMS to:", reservationData.phone)
  
  const smsMessage = `
 CAFFE LUNA Rezervasiya Təsdiqləndi!

 Tarix: ${reservationData.date}
 Saat: ${reservationData.time}
 Masa: ${reservationData.table.name}
Qonaq sayı: ${reservationData.guests}
 ID: ${reservationData.id}

${reservationData.cart.length > 0 ? ` Əvvəlcədən sifariş: ${reservationData.total.toFixed(2)} AZN` : ''}

 Ləğv qaydası: Rezervasiyanızdan 2 saat əvvəl pulsuz ləğv edə bilərsiniz.

 Ünvan: Nizami küç. 123, Bakı
 Əlaqə: +994 12 345 67 89

Caffe Luna seçdiyiniz üçün təşəkkür edirik! 
`.trim()

  console.log("SMS Content:", smsMessage)
  
  console.log(`
  ═══════════════════════════════════════
   SMS SENT TO: ${reservationData.phone}
  ═══════════════════════════════════════
  ${smsMessage}
  ═══════════════════════════════════════
  `)
  
  return true
}

function sendConfirmationEmail(reservationData) {
  console.log(" Sending email to:", reservationData.email)
  
  const emailContent = `

    <div class="container">
        <div class="header">
            <h1> Reservation Confirmed!</h1>
            <h2>CAFFE LUNA</h2>
        </div>
        
        <div class="content">
            <p>Dear ${reservationData.name},</p>
            <p>Thank you for choosing Caffe Luna! Your reservation has been confirmed.</p>
            
            <div class="reservation-details">
                <h3> Reservation Details</h3>
                <p><strong>Reservation ID:</strong> ${reservationData.id}</p>
                <p><strong>Date:</strong> ${reservationData.date}</p>
                <p><strong>Time:</strong> ${reservationData.time}</p>
                <p><strong>Table:</strong> ${reservationData.table.name}</p>
                <p><strong>Number of Guests:</strong> ${reservationData.guests}</p>
                
                ${reservationData.cart.length > 0 ? `
                <h4> Pre-ordered Items:</h4>
                <ul>
                    ${reservationData.cart.map(item => 
                        `<li>${item.name} ${item.size ? `(${item.size})` : ''} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`
                    ).join('')}
                </ul>
                <p><strong>Total Amount:</strong> $${reservationData.total.toFixed(2)}</p>
                ` : ''}
            </div>
            
            <h3> Cancellation Policy</h3>
            <p>You can cancel your reservation free of charge up to 2 hours before your scheduled time.</p>
            
            <a href="#" onclick="cancelReservationByEmail('${reservationData.id}')" class="cancel-button">
                Cancel Reservation
            </a>
            
            <h3> Location & Contact</h3>
            <p>
                <strong>Address:</strong> 123 Coffee Street, Downtown<br>
                <strong>Phone:</strong> +1 (555) 123-4567<br>
                <strong>Email:</strong> info@caffeluna.com
            </p>
            
            <p>We look forward to serving you! </p>
        </div>
        
        <div class="footer">
            <p>© 2025 Caffe Luna. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
  `
  
  console.log("Email Content Generated")
  console.log(`
  ═══════════════════════════════════════
   EMAIL SENT TO: ${reservationData.email}
  SUBJECT: Caffe Luna - Reservation Confirmed (${reservationData.id})
  ═══════════════════════════════════════
  `)
  
  return true
}

function sendCancellationSMS(reservationData) {
  console.log(" Sending cancellation SMS to:", reservationData.phone)
  
  const smsMessage = `
CAFFE LUNA Reservation Cancelled

Your reservation has been cancelled:

 Date: ${reservationData.date}
 Time: ${reservationData.time}
 Table: ${reservationData.table.name}
 ID: ${reservationData.id}

We're sorry to see you go. Feel free to make a new reservation anytime!

 Contact: +1 (555) 123-4567
 Website: www.caffeluna.com

Thank you for choosing Caffe Luna! 
  `.trim()

  console.log(`
  ═══════════════════════════════════════
  CANCELLATION SMS SENT TO: ${reservationData.phone}
  ═══════════════════════════════════════
  ${smsMessage}
  ═══════════════════════════════════════
  `)
  
  return true
}

function sendCancellationEmail(reservationData) {
  console.log("Sending cancellation email to:", reservationData.email)
  
  const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #121D23; color: #E4CCB4; border-radius: 12px; overflow: hidden; }
        .header { background-color: #ff6b6b; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .reservation-details { background-color: #1A2832; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { background-color: #0F1419; padding: 20px; text-align: center; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1> Reservation Cancelled</h1>
            <h2>CAFFE LUNA</h2>
        </div>
        
        <div class="content">
            <p>Dear ${reservationData.name},</p>
            <p>Your reservation has been successfully cancelled.</p>
            
            <div class="reservation-details">
                <h3> Cancelled Reservation Details</h3>
                <p><strong>Reservation ID:</strong> ${reservationData.id}</p>
                <p><strong>Date:</strong> ${reservationData.date}</p>
                <p><strong>Time:</strong> ${reservationData.time}</p>
                <p><strong>Table:</strong> ${reservationData.table.name}</p>
                <p><strong>Cancelled on:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p>We're sorry to see you go! Feel free to make a new reservation anytime.</p>
            
            <h3> Contact Us</h3>
            <p>
                <strong>Phone:</strong> +1 (555) 123-4567<br>
                <strong>Email:</strong> info@caffeluna.com<br>
                <strong>Website:</strong> www.caffeluna.com
            </p>
            
            <p>Thank you for choosing Caffe Luna! </p>
        </div>
        
        <div class="footer">
            <p>© 2025 Caffe Luna. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `
  
  console.log(`
  ═══════════════════════════════════════
   CANCELLATION EMAIL SENT TO: ${reservationData.email}
  SUBJECT: Caffe Luna - Reservation Cancelled (${reservationData.id})
  ═══════════════════════════════════════
  `)
  
  return true
}

        function generateQRCode(reservationData) {
  const canvas = document.getElementById("qrCode")
  if (!canvas) {
    console.error("QR Code canvas not found")
    return
  }

  const qrData = JSON.stringify({
    id: reservationData.id,
    name: reservationData.name,
    date: reservationData.date,
    time: reservationData.time,
    table: reservationData.table.name,
    guests: reservationData.guests,
    total: reservationData.total,
  })

  console.log("Attempting to generate QR code...")
  console.log("QRCode library available:", typeof QRCode)

  if (typeof QRCode !== "undefined") {
    try {
      QRCode.toCanvas(canvas, qrData, { 
        width: 200, 
        height: 200,
        margin: 2,
        color: {
          dark: '#121D23',
          light: '#E4CCB4'
        }
      }, (error) => {
        if (error) {
          console.error("QR Code generation error:", error)
          showQRCodeFallback(canvas, reservationData)
        } else {
          console.log("QR Code generated successfully!")
        }
      })
    } catch (error) {
      console.error("QR Code generation failed:", error)
      showQRCodeFallback(canvas, reservationData)
    }
  } else {
    console.error("QRCode library is not loaded.")
    showQRCodeFallback(canvas, reservationData)
  }
}

function showQRCodeFallback(canvas, reservationData) {
  console.log("Showing QR code fallback...")
  
  canvas.style.display = 'none'
  
  const qrSection = canvas.parentElement
  let fallbackDiv = qrSection.querySelector('.qr-fallback')
  
  if (!fallbackDiv) {
    fallbackDiv = document.createElement('div')
    fallbackDiv.className = 'qr-fallback'
    fallbackDiv.style.cssText = `
      background-color: #0f1419;
      border: 2px solid #e4ccb4;
      border-radius: 8px;
      padding: 1rem;
      margin: 1rem 0;
      text-align: center;
    `
    
    fallbackDiv.innerHTML = `
      <h4 style="color: #e4ccb4; margin-bottom: 0.5rem;">Reservation Details</h4>
      <p style="margin: 0.25rem 0;"><strong>ID:</strong> ${reservationData.id}</p>
      <p style="margin: 0.25rem 0;"><strong>Date:</strong> ${reservationData.date}</p>
      <p style="margin: 0.25rem 0;"><strong>Time:</strong> ${reservationData.time}</p>
      <p style="margin: 0.25rem 0;"><strong>Table:</strong> ${reservationData.table.name}</p>
      <p style="margin: 0.25rem 0;"><strong>Guests:</strong> ${reservationData.guests}</p>
      <p style="margin-top: 0.5rem; font-size: 0.875rem; opacity: 0.8;">
        Show this information to staff when you arrive
      </p>
    `
    
    qrSection.insertBefore(fallbackDiv, canvas.nextSibling)
  }
}

        function showSuccessModal(reservationData) {
  const modal = document.getElementById("successModal")
  const detailsDiv = document.getElementById("confirmationDetails")

  if (!modal || !detailsDiv) return

  const reservationDateTime = new Date(`${reservationData.date}T${reservationData.time}:00`)
  const cancellationDeadline = new Date(reservationDateTime.getTime() - (2 * 60 * 60 * 1000)) 
  
  detailsDiv.innerHTML = `
    <div class="confirmation-details">
      <h3>Reservation Details</h3>
      <p><strong>Reservation ID:</strong> ${reservationData.id}</p>
      <p><strong>Name:</strong> ${reservationData.name}</p>
      <p><strong>Email:</strong> ${reservationData.email}</p>
      <p><strong>Phone:</strong> ${reservationData.phone}</p>
      <p><strong>Date:</strong> ${reservationData.date}</p>
      <p><strong>Time:</strong> ${reservationData.time}</p>
      <p><strong>Table:</strong> ${reservationData.table.name}</p>
      <p><strong>Guests:</strong> ${reservationData.guests}</p>
      
      ${
        reservationData.cart.length > 0
          ? `
        <h4>Pre-ordered Items:</h4>
        <ul>
          ${reservationData.cart
            .map(
              (item) =>
                `<li>${item.name} ${item.size ? `(${item.size})` : ""} x${item.quantity} - $${(
                  item.price * item.quantity
                ).toFixed(2)}</li>`,
            )
            .join("")}
        </ul>
        <p><strong>Total:</strong> $${reservationData.total.toFixed(2)}</p>
      `
          : ""
      }
      
      <div class="notification-confirmation" style="background-color: #1f2a1f; border: 1px solid #4caf50; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
        <h4 style="color: #4caf50; margin-bottom: 0.5rem;"> Notifications Sent</h4>
        <p style="margin: 0.25rem 0;">Confirmation email sent to: ${reservationData.email}</p>
        <p style="margin: 0.25rem 0;"> SMS confirmation sent to: ${reservationData.phone}</p>
      </div>
      
      <div class="cancellation-policy" style="background-color: #2a1f1f; border: 1px solid #ff9800; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
        <h4 style="color: #ff9800; margin-bottom: 0.5rem;">Cancellation Policy</h4>
        <p style="margin: 0.25rem 0;">Free cancellation until: <strong>${cancellationDeadline.toLocaleString()}</strong></p>
        <p style="margin: 0.25rem 0; font-size: 0.875rem; opacity: 0.8;">
          After this time, cancellations are not permitted.
        </p>
      </div>
    </div>
  `

  generateQRCode(reservationData)
  modal.style.display = "flex"
}

        function resetForm() {
          const form = document.getElementById("reservationForm")
          if (form) form.reset()
          
          cart = []
          selectedPrices = {}
          updateCartDisplay()
          checkFormCompletion()

          menuVisible = false
          const menuSection = document.getElementById("menuSection")
          if (menuSection) menuSection.classList.remove("active")
          
          const toggleBtn = document.getElementById("toggleMenu")
          if (toggleBtn) toggleBtn.textContent = "Complete form first"
          
          const tableSelect = document.getElementById("tableSelect")
          if (tableSelect) tableSelect.innerHTML = '<option value="">Select date, time and guests first</option>'
          
          const paymentSection = document.getElementById("paymentSection")
          if (paymentSection) paymentSection.style.display = "none"
        }

        document.addEventListener("DOMContentLoaded", function() {
          console.log("DOM loaded, initializing...")
          
          const dateInput = document.getElementById("date")
          const timeInput = document.getElementById("time")
          const guestsInput = document.getElementById("guests")
          const tableSelect = document.getElementById("tableSelect")
          const nameInput = document.getElementById("name")
          const emailInput = document.getElementById("email")
          const phoneInput = document.getElementById("phone")
          const paymentRadios = document.querySelectorAll('input[name="payment"]')
          const toggleBtn = document.getElementById("toggleMenu")
          const form = document.getElementById("reservationForm")

          if (dateInput) {
            const today = new Date().toISOString().split("T")[0]
            dateInput.setAttribute("min", today)
          }

          if (dateInput) dateInput.addEventListener("change", validateDate)
          if (timeInput) timeInput.addEventListener("change", () => {
            updateTableOptions()
            checkFormCompletion()
          })
          if (guestsInput) guestsInput.addEventListener("input", () => {
            updateTableOptions()
            checkFormCompletion()
          })
          if (tableSelect) tableSelect.addEventListener("change", checkFormCompletion)
          if (nameInput) nameInput.addEventListener("input", checkFormCompletion)
          if (emailInput) emailInput.addEventListener("input", checkFormCompletion)
          if (phoneInput) phoneInput.addEventListener("input", checkFormCompletion)

          if (toggleBtn) {
            toggleBtn.addEventListener("click", function() {
              console.log("Toggle button clicked via addEventListener")
              window.toggleMenu()
            })
          }

          if (form) {
            form.addEventListener("submit", window.submitForm)
          }

          paymentRadios.forEach((radio) => {
            radio.addEventListener("change", checkFormCompletion)
          })

          updateTimeOptions()
          checkFormCompletion()

          console.log("JavaScript initialized successfully!")
          console.log("toggleMenu function available:", typeof window.toggleMenu)
        })

        console.log("JavaScript loaded in HEAD successfully!")
        console.log("toggleMenu function defined:", typeof window.toggleMenu)
  

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

})

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