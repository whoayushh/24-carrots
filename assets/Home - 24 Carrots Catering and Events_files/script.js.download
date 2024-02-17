jQuery(document).ready(function($) {


    (function () {
        $('.hamburger-menu').on('click', function() {
            $('.bar').toggleClass('animate');
            $('.mobile-menu').toggleClass('active');
            $('body').toggleClass('fixed');
            return false;
        })
        $('.mobile-menu .menu-item-has-children').hover(function() {
            $(this).children('ul').stop().slideDown('slow', 'swing');
            $(this).find('.icon-arrow').toggleClass('open');
        }, function() {
            $(this).children('ul').stop().slideUp('slow', 'swing');
            $(this).find('.icon-arrow').toggleClass('open');
        });
    })();


    // Sticky peekaboo Menu
    const body = document.body;

    let isMobile = window.innerWidth <= 768;

    let stickyMenu = (()=>{
        let header = document.querySelector('.site-header');

        if(!header) return;

        let state = {
            currentScroll: window.scrollY,
            lastCoord: window.scrollY,
            headerHeight: header.offsetHeight,
            buffer: 30,
            distanceTrigger: isMobile ? 400 : 600,
            revealAfter: 300,
            waypoint: 0,
            introMode: null,
        }

        //intro mode
        state.introMode = window.scrollY < state.headerHeight;

        setInterval(()=>{
            state.lastCoord = window.scrollY;
        }, 200);


        //do setup
        let onload = (()=>{
            state.currentScroll = window.scrollY;

            if(state.currentScroll > state.revealAfter){
                body.classList.add('scroll-down')
            }
        })();

        window.addEventListener("scroll", () => {

            state.currentScroll = window.scrollY;

            //show nav always at the top of scroll
            if(state.currentScroll < state.headerHeight){
                //if this is the case stop here
                return body.classList.remove("scroll-down");
            }

            //on scroll up
            if(state.currentScroll < state.lastCoord - state.buffer){
                //set waypoint only once
                if(!state.waypoint){
                    state.waypoint = state.currentScroll - state.distanceTrigger;
                }
            }

            //on scroll down
            if(state.currentScroll > state.lastCoord + state.buffer){
                if(state.currentScroll > state.revealAfter){
                    body.classList.add('scroll-down')
                }
            }

            //handle waypoint reached
            if(!state.waypoint) return;
            if(state.currentScroll <= state.waypoint){
                body.classList.remove("scroll-down");

                setTimeout(()=>{
                    state.waypoint = 0;
                }, 600);
            }
        });
    })();


    $('.venue-expand').click (function(){
        $(this).toggleClass('active');
    });

    // FAQ Block
    $('.faq-block-item').click(function(){
        $(this).toggleClass("active");
    });



    // Initialize the slider
    if ($('.testimonial-slider').length) {
        var mobileSlider = new Flickity('.testimonial-slider', {
            // Other Flickity options...
            adaptiveHeight: false,
            contain: true,
            prevNextButtons: true,
            draggable: true,
            pageDots: true,
            wrapAround: true,
            autoPlay: 6000 // Set to false by default
        });
    }

    function isMobileDevice() {
        return window.innerWidth <= 767;
    }

    function updateAdaptiveHeight() {
        // Check if the current device is a mobile

        if (isMobileDevice()) {
            // mobileSlider.options.adaptiveHeight = true;
            // mobileSlider.resize(); // Refresh the slider to update the height
        } else {
            // mobileSlider.options.adaptiveHeight = false;
            // mobileSlider.resize(); // Refresh the slider to update the height
        }
    }

    // Call the updateAdaptiveHeight function when the window is resized
    window.addEventListener('resize', updateAdaptiveHeight);

    // Update adaptiveHeight on initial load
    updateAdaptiveHeight();




    var removedItems;

    $('.video_select').click(function(event) {
        event.preventDefault();
        removedItems = $('.gimg').detach();
        $('.gvid').appendTo('.flex_container').show();
    });

    $('.image_select').click(function(event) {
        event.preventDefault();
        removedItems = $('.gvid').detach();
        $('.gimg').appendTo('.flex_container').show();
    });


    // gsap.to(".down-cheveron", {duration: .8, y:20, ease:"circ.in", repeat:-1, yoyo:true})



    document.addEventListener("DOMContentLoaded", function() {
        // Select the anchor link with the specific hash tag
        var anchor = document.querySelector('a[href="#gf_1"]');

        // Add click event listener to the anchor
        anchor.addEventListener("click", function(event) {
            // Scroll to the section without animation
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "instant"});
            // Prevent the default scroll behavior
            event.preventDefault();
        });
    });



});

