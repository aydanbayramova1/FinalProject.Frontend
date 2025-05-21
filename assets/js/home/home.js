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



(function ($) {
   
	
	var $window = $(window); 
	var $body = $('body'); 
    
    $('#menu').slicknav({
        label: '',
        prependTo: '.responsive-menu', 
        closedSymbol: '&#9658;',      
        openedSymbol: '&#9660;'        
      });

	if($("a[href='#top']").length){
		$(document).on("click", "a[href='#top']", function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}


	const hero_slider_layout = new Swiper('.hero-slider-layout .swiper', {
		effect: 'fade',
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
	});

    $(document).ready(function () {
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });
    });
	
	
    // document.addEventListener("DOMContentLoaded", function () {
    //     let menuBtn = document.getElementById("menuBtn");
    //     let sidebar = document.getElementById("sidebar");
    //     let closeBtn = document.getElementById("closeBtn");
    
    //     let newMenuBtn = document.getElementById("searchIcon");
    //     let newSidebar = document.getElementById("newSidebar");
    //     let newCloseBtn = document.getElementById("newCloseBtn");
    
    
    //     menuBtn.addEventListener("click", function () {
    //         sidebar.classList.add("show");
    //         newSidebar.classList.remove("show");
    //     });
    
    //     closeBtn.addEventListener("click", function () {
    //         sidebar.classList.remove("show");
    //     });
    
    //     newMenuBtn.addEventListener("click", function () {
    //         newSidebar.classList.add("show");
    //         sidebar.classList.remove("show");
    //     });
    
    //     newCloseBtn.addEventListener("click", function () {
    //         newSidebar.classList.remove("show");
    //     });
    // });


    // document.getElementById("menuImg").addEventListener("click", function () {
    //     var offcanvasEl = document.getElementById("offcanvasRight");
    //     var bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);
    //     bsOffcanvas.show();
    // });

if ($('.testimonial-slider').length) {
    const testimonial_slider = new Swiper('.testimonial-slider .swiper', {
        slidesPerView : 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-btn-next',
            prevEl: '.testimonial-btn-prev',
        },
        breakpoints: {
            768:{
                slidesPerView: 1,
            },
            991:{
                slidesPerView: 1,
            }
        }
    });
}

if ($('.skills-progress-bar').length) {
    $('.skills-progress-bar').waypoint(function() {
        $('.skillbar').each(function() {
            $(this).find('.count-bar').animate({
            width:$(this).attr('data-percent')
            },2000);
        });
    },{
        offset: '50%'
    });
}


})(jQuery);