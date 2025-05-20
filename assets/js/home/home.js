"use strict";

(function ($) {
   
	
	var $window = $(window); 
	var $body = $('body'); 

	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});

	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});

		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
	
		$window.on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}	
	
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
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


})(jQuery);