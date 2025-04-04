(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });

    // Store Contact Form Data in LocalStorage
    $(document).ready(function() {
        $('#contactForm').on('submit', function(event) {
            event.preventDefault();
            
            let contactData = {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                message: $('#message').val(),
                timestamp: new Date().toISOString()
            };

            let existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
            existingContacts.push(contactData);
            localStorage.setItem('contacts', JSON.stringify(existingContacts));
            alert("Thank you! Your message has been saved.");
            this.reset();
        });
    });

    function getStoredContacts() {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : [];
    }

    function clearStoredContacts() {
        localStorage.removeItem('contacts');
        console.log('All stored contacts have been cleared');
    }

    // Store Plan Form Data in LocalStorage
    $(document).ready(function() {
        $('#planForm').on('submit', function(event) {
            event.preventDefault();
            
            let planData = {
                name: $('#planName').val(),
                email: $('#planEmail').val(),
                planType: $('#planType option:selected').text(),
                message: $('#planMessage').val(),
                timestamp: new Date().toISOString()
            };

            let existingPlanRequests = JSON.parse(localStorage.getItem('planRequests')) || [];
            existingPlanRequests.push(planData);
            localStorage.setItem('planRequests', JSON.stringify(existingPlanRequests));
            alert("Thank you! Your trial request has been saved. We will contact you soon.");
            this.reset();
        });
    });

    function getStoredPlanRequests() {
        const planRequests = localStorage.getItem('planRequests');
        return planRequests ? JSON.parse(planRequests) : [];
    }

    function clearStoredPlanRequests() {
        localStorage.removeItem('planRequests');
        console.log('All stored plan requests have been cleared');
    }

})(jQuery);