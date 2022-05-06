const axios = require('axios')

module.exports.postToDB = function postToDB(response) {
    try {
        axios.post('http://localhost:5000/communication', {
            message: response['message'],
            destination: response['destination'],
            timeStamp: ((new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()).toString(),
        })
        console.log('post succesful')
    } catch (err) {
        console.log(err)
    }
}
