$(document).ready(function() {
    $('.nav a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    console.log('main.js loaded');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});

class Validator {
    static nameValidation(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (nameRegex.test(name)) {
            return 1;
        } else {
            alert("Not valid Validator name");
        }
    }

    static passwordValidation(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (passwordRegex.test(password)) {
            return 1;
        } else {
            alert(`Password not valid:
                    1-At least 6 characters long
                    2-Contains at least one letter
                    3-Contains at least one digit
            `);
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
            alert("Not valid phone number");
        }
    }

    static addressValidation(address) {
        const addressRegex = /^[a-zA-Z0-9\s,]+$/;
        if (addressRegex.test(address)) {
            return 1;
        } else {
            alert("Not valid address");
        }
    }

    static ageValidation(age) {
        if (age >= 15 && age <= 120) {
            return 1;
        } else {
            alert("You need to be older than 15 years old to sign up");
        }
    }
}