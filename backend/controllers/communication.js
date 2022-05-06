const Communication = require('../models/communication');
module.exports.createCommunication = async (req, res) => {
    let newCommunication = new Communication({
        message: req.body.message,
        destination: req.body.destination,
        timeStamp: req.body.timeStamp
    })
    await newCommunication.save()
    res.send(JSON)
}

module.exports.getAllCommunication = async (req, res) => {
    Communication.find({})
        .then((data) => {
            // console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error:', error)
        })
}


//command line program to API
    //CLI program
    //API --> another client to make HTTP calls
    //client folder will make http request to backend
        //client is like a webpage that interfaces with server
