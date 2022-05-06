const express = require('express');
const app = express();

require('dotenv').config()
const mongoose = require('mongoose')

const CommunicationRoute = require('./routes/communication')

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connection Succesful'))
    //store connection somewhere
    .catch((err) => {
        console.error(err);
    });

app.use('/', CommunicationRoute)

app.get('/express_backend', (req, res) => {
    res.send({ express: 'UPDATED' });
});

app.listen(5000, () => {
    console.log('SERVER RUNS ON 5000')
})