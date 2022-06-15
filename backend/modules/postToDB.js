import { sendTwilio } from '../controllers/send_sms'
const axios = require('axios')

export default function postToDB(response) {
    try {
        axios.post('http://localhost:5000/communications', {
            name: response['name'],
            message: response['message'],
            communication: response['communication'],
            timeStamp: response['timeStamp']
        })
        console.log('post succesful')
        sendTwilio(response)
    } catch (err) {
        console.log(err)
    }
    // console.log('Function response is:', response)
}
