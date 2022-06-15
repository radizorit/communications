var validator = require('validator');
module.exports.validate = function validate(response) {
    if (validator.isEmail(response.destination)) {
        return 'email'
    } else if (validator.isMobilePhone(response.destination)) {
        return 'phone'
    } else {
        console.log('Invalid response, not a valid email or phone number')
    }
}

//re-usuable that gives you functionality
//break up in 2 functions validateEmail and validatePhone