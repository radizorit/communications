const express = require('express');
const router = express.Router();

const {
    createCommunication,
    getAllCommunication
} = require('../controllers/communication')

router.route('/communication')
    .post(createCommunication)

router.route('/communication')
    .get(getAllCommunication)

module.exports = router