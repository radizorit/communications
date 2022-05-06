const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommunicationSchema = new Schema({
    message: String,
    destination: String,
    timeStamp: Date
})

module.exports = mongoose.model('Communication', CommunicationSchema)

//add save function
//define model
//