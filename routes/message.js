const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const {sendMessage} = require('../controllers/message');

router.use(protect);

router.post('/sendMessage', sendMessage);

module.exports = router;