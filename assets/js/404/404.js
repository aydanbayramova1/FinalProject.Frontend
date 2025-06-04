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

