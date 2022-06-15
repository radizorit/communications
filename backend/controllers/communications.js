const Communication = require('../models/communications');
module.exports.createCommunication = async (req, res) => {
    let newCommunication = new Communication({
        name: req.body.name,
        message: req.body.message,
        communication: req.body.communication,
        timeStamp: req.body.timeStamp
    })
    try {
        await newCommunication.save()
        res.send(JSON)
    } catch (err) {
        console.log(err)
    }
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
