// Navbar color chnage on scroll	// 
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-dark");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });
  
// Get the current URL
var currentUrl = window.location.href;

// Get all the nav links
var navLinks = document.querySelectorAll(".navbar-nav a");

// Loop through each link and check if it matches the current URL
for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href") === currentUrl) {
        navLinks[i].classList.add("active");
    } else {
        navLinks[i].classList.remove("active");
    }
}


// Get the current URL of the webpage
// var currentUrl = window.location.href;

// Select the nav-link element that corresponds to the current URL
// var navLink = document.querySelector('a[href="'+currentUrl+'"]');

// Add the active class to the selected nav-link element
// if (navLink) {
    // navLink.classList.add('active');
// }

// Get the current URL
// var currentUrl = window.location.href;

// Get all the nav links
// var navLinks = document.querySelectorAll(".navbar-nav a");

// Loop through each link and check if it matches the current URL
// for (var i = 0; i < navLinks.length; i++) {
    // if (navLinks[i].getAttribute("href") === currentUrl) {
        // navLinks[i].classList.add("active");
    // } else {
        // navLinks[i].classList.remove("active");
    // }
// }
     
  Dropzone.options.myDropzone = {
  };

// Count up
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  animateValue(obj, 0, 100, 3000);
  
//   
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const objs = document.getElementById("value1");
  animateValue(objs, 0, 100, 3000);
 


// map


  
// carousel
var owl = $('.owl-carousel1');
$(document).ready(function(){
    $('.header-slider').owlCarousel({
        loop:true,
        nav:true,
        margin:150,
        pagination: true, 
        autoplay:false,
        animateOut: 'fadeOut',
        autoplayHoverPause: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:10,
                nav:true,
                dots: true, 
            },
            600:{
                items:2,
                margin:10,
            },
            1000:{
                items: 3,
                nav: true,
                dots: false, 
            }
        }
    })
    $( ".header-slider .owl-prev").html('<img class="left-dark" src="assets/images/arrow-left.png" alt="arrow-left">');
    $( ".header-slider .owl-next").html('<img class="right-dark" src="assets/images/arrow-right.png" alt="arrow-right">');

});

var owl = $('#explore-slide');
$(document).ready(function(){
    $('.explore-slide').owlCarousel({
        loop:true,
        nav:true,
        margin:150,
        pagination: true, 
        autoplay:false,
        animateOut: 'fadeOut',
        autoplayHoverPause: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin:10,
                nav:true,
                dots: true, 
            },
            600:{
                items:2,
                margin:10,
            },
            1000:{
                items: 3,
                nav: true,
                dots: false, 
            }
            1500:{
                items: 3,
                loop: true,
                nav: true,
                dots: true, 
            }
        }
    })
    $( ".explore-slide .owl-prev").html('<img class="left" src="assets/images/arrow-left-dark.png" alt="arrow-left">');
    $( ".explore-slide .owl-next").html('<img class="right" src="assets/images/arrow-right-dark.png" alt="arrow-right">');

});
// 

// $('.owl-carousel2').owlCarousel({
    // stagePadding: 50,
    // loop:true,
    // margin:10,
    // nav:true,
    // responsive:{
        // 0:{
            // items:1
        // },
        // 600:{
            // items:3
        // },
        // 1000:{
            // items:5
        // }
    // }
// })