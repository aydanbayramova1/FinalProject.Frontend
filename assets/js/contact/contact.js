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

counterUp('.counter', 6, 3000);



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

//     const contactForm = document.getElementById('contactForm');
//     const submitBtn = document.getElementById('submitBtn');
//     const submitText = document.getElementById('submitText');
//     const successMsg = document.getElementById('msgSubmit');
//     const errorMsg = document.getElementById('msgError');

//     function validateAzerbaijaniPhone(phone) {
//         const phoneRegex = /^(\+994|0)(50|51|55|70|77|99|10|12|18)\d{7}$/;
//         const cleanPhone = phone.replace(/[\s\-()]/g, '');
//         return phoneRegex.test(cleanPhone);
//     }

//     function validateEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     async function sendContactEmail(formData) {
//         await new Promise(resolve => setTimeout(resolve, 2000));

//         console.log(' Sending contact email to admin...');
//         console.log('Form Data:', formData);

//         const emailContent = `
//         ═══════════════════════════════════════
//          NEW CONTACT FORM SUBMISSION
//         ═══════════════════════════════════════
        
//         Customer Information:
//         Name: ${formData.firstName} ${formData.lastName}
//         Email: ${formData.email}
//         Phone: ${formData.phone}
        
//         Message:
//         ${formData.message}
        
//          Submitted: ${new Date().toLocaleString()}
//          Source: Caffe Luna Website
        
//         ═══════════════════════════════════════
//         `;

//         console.log(emailContent);

//         const success = Math.random() > 0.1;
        
//         if (success) {
//             sendAutoReply(formData);
//             return { success: true };
//         } else {
//             throw new Error('Email sending failed');
//         }
//     }


//     function sendAutoReply(formData) {
//         const autoReplyContent = `
//         ═══════════════════════════════════════
//         AUTO-REPLY TO CUSTOMER: ${formData.email}
//         ═══════════════════════════════════════
        
//         Dear ${formData.firstName},
        
//         Thank you for contacting Caffe Luna! 
        
//         We have received your message and will respond within 24 hours.
        
//         Your message:
//         "${formData.message}"
        
//         Best regards,
//         Caffe Luna Team
        
//          +994 12 345 67 89
//          info@caffeluna.com
//          Nizami küçəsi 123, Bakı
        
//         ═══════════════════════════════════════
//         `;

//         console.log(autoReplyContent);
//     }

//     contactForm.addEventListener('submit', async function(e) {
//         e.preventDefault();

//         successMsg.style.display = 'none';
//         errorMsg.style.display = 'none';

//         const formData = {
//             firstName: document.getElementById('fname').value.trim(),
//             lastName: document.getElementById('lname').value.trim(),
//             email: document.getElementById('email').value.trim(),
//             phone: document.getElementById('phone').value.trim(),
//             message: document.getElementById('message').value.trim()
//         };

//         if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
//             errorMsg.textContent = 'Please fill in all required fields.';
//             errorMsg.style.display = 'block';
//             return;
//         }

//         if (!validateEmail(formData.email)) {
//             errorMsg.textContent = ' Please enter a valid email address.';
//             errorMsg.style.display = 'block';
//             return;
//         }

//         if (!validateAzerbaijaniPhone(formData.phone)) {
//             errorMsg.textContent = ' Please enter a valid Azerbaijani phone number (+994 XX XXX XX XX).';
//             errorMsg.style.display = 'block';
//             return;
//         }

//         submitBtn.disabled = true;
//         submitText.innerHTML = '<span class="loading-spinner"></span>Sending...';

//         try {
           
//             await sendContactEmail(formData);

           
//             successMsg.style.display = 'block';
//             contactForm.reset();

//             setTimeout(() => {
//                 submitBtn.disabled = false;
//                 submitText.textContent = 'submit message';
//                 successMsg.style.display = 'none';
//             }, 5000);

//         } catch (error) {
//             console.error('Error sending email:', error);
            
        
//             errorMsg.style.display = 'block';
            
            
//             submitBtn.disabled = false;
//             submitText.textContent = 'submit message';
//         }
//     });

//     document.getElementById('phone').addEventListener('input', function(e) {
//         let value = e.target.value.replace(/\D/g, '');
        
//         if (value.startsWith('994')) {
//             value = '+' + value;
//         } else if (value.startsWith('0')) {
//         } else if (value.length > 0) {
//             value = '+994' + value;
//         }
        
//         e.target.value = value;
//     });

   
// });

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
