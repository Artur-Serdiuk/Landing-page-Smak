$(document).ready(function() {

    /*MOBILE MENU*/
    if (window.screen.width < 1224) {
        $(".hamburger").click(function(){
            $(this).toggleClass("is-active");
            $(".mobile_menu").toggle();
        });

        $(".mobile_menu>li>a").click(function(){
            $(".mobile_menu").toggle();
            $('.hamburger').toggleClass("is-active");

        });
    }
    /*MOBILE MENU*/

    $(".nav-tabs>li>a").click(function (e) {
        e.preventDefault();
    });

    var mixer = mixitup('.gallery_container');

    $('body').scrollspy({ target: '#menu' });

    /*SLIDER INITIALIZATION*/
    var swiper = new Swiper('.swiper-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
    });
    /*SLIDER INITIALIZATION*/

    /*SVG COUNTERS START*/
    (function () {
        function svgGenerator() {
            var circleLength = 628.318;
            var myCircleBox = $('.circle-box');
            var nullPercent = 0;
            var mySVG = '<svg viewBox="-10 -10 240 240">' +
                        '<circle class="circle__b" cx="110" cy="110" r="110"/>' +
                        '<circle class="circle__a" cx="110" cy="110" r="110"/>' +
                         '</svg>';
            var myDivPercent = '<div class="percent"></div>';

            myCircleBox.html(mySVG + myDivPercent);
            $('.percent').text(nullPercent + '%');
            $('.circle__a').css({
                'stroke-dasharray' : circleLength,
                'stroke-dashoffset' : circleLength
            });

            myCircleBox.each(function(index) {
                var that = $(this);
                var myPercent = +that.attr('data-percent');
                var myTime = +that.attr('data-time');
                var toPercent = circleLength - circleLength / 100 * myPercent;
                that.find('.percent').animate(
                    {num: myPercent},
                    {duration: myTime,
                    step: function (num){
                        $(this).text((num).toFixed(0) + '%');
                    }
                });
                that.find('.circle__a').animate({'stroke-dashoffset' : toPercent}, myTime);
            });
        }

        var flag = true;

        $(window).scroll(function () {
            if ( flag === true && $(this).scrollTop() >= 5100) {
                svgGenerator();
                flag = false;
            }
        });})();
    /*SVG COUNTERS END*/


    /*STICKY NAV*/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
            $('.bg_block').addClass('sticky_block');
        } else {
            $('.bg_block').removeClass('sticky_block');
        }
    });
    /*STICKY NAV*/

    /*SCROLL TO BLOCK START*/
    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    /*SCROLL TO BLOCK END*/

    /*VALIDATION START*/
    $("#contact_form").validate({
        rules: {
            userName: {
                required: true,
                minlength: 2,
                maxlength: 16
            },
            userEmail: {
                required: true,
                email: true,
                minlength: 6,
                maxlength: 16
            },
            messageSubject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            userName: {
                required: "This field is required",
                minlength: "Login must be at least 2 characters",
            },
            userEmail: {
                required: "This field is required",
                email: "Enter valid address",
                minlength: "Email must be at least 6 characters",
                maxlength: "The maximum number of characters is 16"
            },
            messageSubject: {
                required: "This field is required"
            },
            message: {
                required: "This field is required"
            }
        }
    });
    /*VALIDATION END*/

});