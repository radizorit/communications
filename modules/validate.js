module.exports.validate =  function validate(response) {
    let destinationLength = response.destination.length
    //maximum length of 64 characters for email or minimum is 7 for phone number
    if(destinationLength < 7 || destinationLength > 64) {
        console.log('Invalid response, character length is too short or large')
    }
    //Proper phone number requirements
            //has all digits
            //7 or 10 digits requirements (we are excluding preceeding 1)
                //probably need more logic to incorporate international, but this is good for now
    if(!isNaN(response.destination) && (destinationLength == 7 || destinationLength == 10)) {
        return 'phone'
        // console.log(`${response.destination} is a valid number`)
    }    
    //Check if it is a proper email
    //Proper email requirements
        //has a ".com, .org, OR .net" on the 4th to last letter
        //has an "@" variable
    else if(response.destination.includes('@') && (response.destination.substring(destinationLength - 4, destinationLength) == '.org'
        || response.destination.substring(destinationLength - 4, destinationLength) == '.net'
        || response.destination.substring(destinationLength - 4, destinationLength) == '.edu'
        || response.destination.substring(destinationLength - 4, destinationLength) == '.com')) {
        return 'email'
    } else {
        console.log(`Invalid response, please try again. Here was what you typed ${response.destination}`)
    }
}
