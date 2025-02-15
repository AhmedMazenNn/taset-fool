$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    // Toggle navigation menu on small screens
    $('.dropdown').click(function() {
        if ($(window).width() <= 767) {
            $('.nav').toggleClass('show-nav');
        }
    });

    // Ensure navigation remains visible on larger screens
    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('.nav').removeClass('show-nav');
        }
    });

    // Show or hide "Scroll to Top" button based on scroll position
    $(window).scroll(function() {
        $('#scrollTop').toggle($(this).scrollTop() > 200);
    });

    // Configure modals to be static
    $('#signupModal, #signinModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    // Close modals and reset styles when home button is clicked
    $('#home-btn, #signin-home-btn').click(function() {
        $('.modal').hide();
        $('.modal-backdrop').remove();
        $('body').removeAttr('style');
    });

    // Scroll to top on button click
    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Form submission with validation
    $('#formSubmit').click(function(e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const address = $('#address').val().trim();
        const phone = $('#phone').val().trim();
        const age = parseInt($('#age').val().trim());
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        if (
            Validator.nameValidation(name) &&
            Validator.addressValidation(address) &&
            Validator.phoneValidation(phone) &&
            Validator.ageValidation(age) &&
            Validator.emailValidation(email) &&
            Validator.passwordValidation(password)
        ) {
            alert("All validations passed! Form can be submitted.");
            $('#signupModal').modal('hide');
        }
    });
});

class Validator {
    static nameValidation(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            alert("Invalid name. Only letters and spaces are allowed.");
            return 0;
        }
        return 1;
    }

    static passwordValidation(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password requirements:\n1. At least 6 characters long\n2. At least one letter\n3. At least one digit");
            return 0;
        }
        return 1;
    }

    static emailValidation(email) {
        const emailRegex = /^[a-zA-Z][^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static phoneValidation(phone) {
        const phoneRegex = /^(?:\+20|0)?1[0125]\d{8}$/;
        if (!phoneRegex.test(phone)) {
            alert("Invalid phone number. Ensure it's an Egyptian phone number.");
            return 0;
        }
        return 1;
    }

    static addressValidation(address) {
        const addressRegex = /^[a-zA-Z0-9\s,]+$/;
        if (!addressRegex.test(address)) {
            alert("Invalid address. Avoid special characters.");
            return 0;
        }
        return 1;
    }

    static ageValidation(age) {
        if (age < 15 || age > 120) {
            alert("Invalid age. Age must be between 15 and 120.");
            return 0;
        }
        return 1;
    }
}
