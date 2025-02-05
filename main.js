$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    // Show or hide "Scroll to Top" button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });
    $('#signupModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#signinModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#home-btn').click(function() {
        $('#signupModal').hide()
        $('.modal-backdrop').remove();
        $('body').removeAttr('style');
    });
    $('#signin-home-btn').click(function() {
        $('#signinModal').hide()
        $('.modal-backdrop').remove();
        $('body').removeAttr('style');
    });
    // Scroll to top on button click
    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
$(document).ready(function() {
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
        if (nameRegex.test(name)) {
            return 1;
        } else {
            alert("Invalid name. Only letters and spaces are allowed.");
        }
    }

    static passwordValidation(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (passwordRegex.test(password)) {
            return 1;
        } else {
            alert(`Password requirements:
                1. At least 6 characters long
                2. At least one letter
                3. At least one digit`);
        }
    }

    static emailValidation(email) {
        const emailRegex = /^[a-zA-Z][^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static phoneValidation(phone) {
        const phoneRegex = /^(?:\+20|0)?1[0125]\d{8}$/;
        if (phoneRegex.test(phone)) {
            return 1;
        } else {
            alert("Invalid phone number. Ensure it's an Egyptian phone number.");
        }
    }

    static addressValidation(address) {
        const addressRegex = /^[a-zA-Z0-9\s,]+$/;
        if (addressRegex.test(address)) {
            return 1;
        } else {
            alert("Invalid address. Avoid special characters.");
        }
    }

    static ageValidation(age) {
        if (age >= 15 && age <= 120) {
            return 1;
        } else {
            alert("Invalid age. Age must be between 15 and 120.");
        }
    }
}