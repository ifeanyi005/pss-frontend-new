// $(document).ready(function(){
//     $('.testimonial-body').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
//   });

// $(document).ready(function(){
//     $(".testimonial-body").owlCarousel({
//         items: 3,
//         loop: true,
//         margin: 10px,
//         autoplay: true,
//     });
//   });

// Open and close hamburger nav
// function openNav() {
//     document.getElementById("mobileNav").style.width = "100%";
// }

// function closeNav() {
//     document.getElementById("mobileNav").style.width = "0%";
// }

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  document.getElementById("mobileNav").classList.toggle("nav-display");
});

// document.getElementById("mobileNav").style.display = "none";

// document.getElementById("mobileNav").style.display = "block";

// function toggle("mobileNav") {
// 	if (document.getElementById("mobileNav").style.display == 'none') {
// 		document.getElementById("mobileNav").style.display = '';
// 	} else {
// 		document.getElementById("mobileNav").style.display = 'none';
// 	}
// }

// Contact form input field script
$(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input, textarea").focus();
});

$(".field-wrapper input, .field-wrapper textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    if (value) {
        $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
        $(this).closest(".field-wrapper").removeClass("hasValue");
    }
});

// Check and remove error classes for full name field
function checkErrorFullName(value) {
     if(value.trim()=='') {
        var errorFullName = document.getElementById('errorFullName');
        var fullName = document.getElementById('fullName');
        errorFullName.classList.add('showElement');
        fullName.classList.add('invalidField');
     }    
}

function removeErrorFullName() {
    var errorFullName = document.getElementById('errorFullName');
    var fullName = document.getElementById('fullName');
    errorFullName.classList.remove('showElement');
    fullName.classList.remove('invalidField');
}

// Check and remove error classes for company name field
function checkErrorCompanyName(value) {
    if(value.trim()=='') {
       var errorCompanyName = document.getElementById('errorCompanyName');
       var companyName = document.getElementById('companyName');
       errorCompanyName.classList.add('showElement');
       companyName.classList.add('invalidField');
    }    
}

function removeErrorCompanyName() {
   var errorCompanyName = document.getElementById('errorCompanyName');
   var companyName = document.getElementById('companyName');
   errorCompanyName.classList.remove('showElement');
   companyName.classList.remove('invalidField');
}

// Check and remove error classes for email field
function checkErrorEmail(value) {
    if(value.trim()=='') {
       var errorEmail = document.getElementById('errorEmail');
       var email = document.getElementById('email');
       errorEmail.classList.add('showElement');
       email.classList.add('invalidField');
    }    
}

function removeErrorEmail() {
   var errorEmail = document.getElementById('errorEmail');
   var email = document.getElementById('email');
   errorEmail.classList.remove('showElement');
   email.classList.remove('invalidField');
}

// Check and remove error classes for message field
function checkErrorMessage(value) {
    if(value.trim()=='') {
       var errorMessage = document.getElementById('errorMessage');
       var message = document.getElementById('message');
       errorMessage.classList.add('showElement');
       message.classList.add('invalidField');
    }    
}

function removeErrorMessage() {
   var errorMessage = document.getElementById('errorMessage');
   var message = document.getElementById('message');
   errorMessage.classList.remove('showElement');
   message.classList.remove('invalidField');
}

// Add activeSection class to Procurement simpliment section in Large Enterprises page
$('.content').on('click', function(){
    $(this).siblings().removeClass('activeSection');
    $(this).addClass('activeSection');

    checkActiveStatus();
});

function checkActiveStatus() {
    if ( $('#click').is('.activeSection') ) {
        $('#clickImage').removeClass("none");
    } else {
        $('#clickImage').addClass('none');
    }
    
    if ( $('#punchout').is('.activeSection') ) {
        $('#punchoutImage').removeClass("none");
    } else {
        $('#punchoutImage').addClass('none');
    }
    
    if ( $('#delivered').is('.activeSection') ) {
        $('#deliveredImage').removeClass("none");
    } else {
        $('#deliveredImage').addClass('none');
    }
}

checkActiveStatus();

// Pricing Page - Add activePriceRange class to Price range radio button
$('input[name="bill"]').on('change',function(){
    if ($('#monthly').is(":checked")){
        $("#monthly").addClass('activePriceRange');
     } else {
        $("#monthly").removeClass('activePriceRange');
    }
    if ($('#yearly').is(":checked")){
        $("#yearly").addClass('activePriceRange');
     } else {
        $("#yearly").removeClass('activePriceRange');
    }

    checkActivePricing();
});

// Pricing page - Toggle between monthly and yearly prices
function checkActivePricing() {
    if ( $('#monthly').is('.activePriceRange') ) {
        $('#monthlyPriceTitle, #monthlyPriceFree, #monthlyPriceBasic, #monthlyPricePremium, #monthlyPriceIntegra').removeClass("none");
    } else {
        $('#monthlyPriceTitle, #monthlyPriceFree, #monthlyPriceBasic, #monthlyPricePremium, #monthlyPriceIntegra').addClass('none');
    }
    if ( $('#yearly').is('.activePriceRange') ) {
        $('#yearlyPriceTitle, #yearlyPriceFree, #yearlyPriceBasic, #yearlyPricePremium, #yearlyPriceIntegra').removeClass("none");
    } else {
        $('#yearlyPriceTitle, #yearlyPriceFree, #yearlyPriceBasic, #yearlyPricePremium, #yearlyPriceIntegra').addClass('none');
    }
}

checkActivePricing();

// Pricing Page - Add activePriceRange class to Price range radio button -- MOBILE
$('input[name="bill"]').on('change',function(){
    if ($('#monthlyMobile').is(":checked")){
        $("#monthlyMobile").addClass('activePriceRange');
     } else {
        $("#monthlyMobile").removeClass('activePriceRange');
    }
    if ($('#yearlyMobile').is(":checked")){
        $("#yearlyMobile").addClass('activePriceRange');
     } else {
        $("#yearlyMobile").removeClass('activePriceRange');
    }

    checkActivePricingMobile();
});

// Pricing page - Toggle between monthly and yearly prices -- MOBILE
function checkActivePricingMobile() {
    if ( $('#monthlyMobile').is('.activePriceRange') ) {
        $('#mobileMonthlyPriceFree, #mobileMonthlyPriceBasic, #mobileMonthlyPricePremium, #mobileMonthlyPriceIntegra').removeClass("none");
    } else {
        $('#mobileMonthlyPriceFree, #mobileMonthlyPriceBasic, #mobileMonthlyPricePremium, #mobileMonthlyPriceIntegra').addClass('none');
    }
    if ( $('#yearlyMobile').is('.activePriceRange') ) {
        $('#mobileYearlyPriceFree, #mobileYearlyPriceBasic, #mobileYearlyPricePremium, #mobileYearlyPriceIntegra').removeClass("none");
    } else {
        $('#mobileYearlyPriceFree, #mobileYearlyPriceBasic, #mobileYearlyPricePremium, #mobileYearlyPriceIntegra').addClass('none');
    }
}

checkActivePricingMobile();

// Pricing cash back tooltip
$(function () {
    $('[data-toggle="glooToolTip"]').tooltip()
  })

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {fixedPricingHead()};

// Get the header
var switchHead = document.getElementById("pricingHead");
// var priceRangeFree = document.getElementById('priceRangeFree');

// Get the offset position of the navbar
var sticky = switchHead.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixedPricingHead() {
  if (window.pageYOffset > sticky) {
    switchHead.classList.add("sticky");
  } else {
    switchHead.classList.remove("sticky");
  }
}

// fixedPricingHead();

// mdc.ripple.MDCSelectHelperText.attachTo(document.querySelector('.foo-button'));

// import {MDCSelectHelperText} from '@material/select/helper-text';

// const helperText = new MDCSelectHelperText(document.querySelector('.mdc-select-helper-text'));

// mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));