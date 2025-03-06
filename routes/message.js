const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const {sendMessage} = require('../controllers/message');

router.use(protect);

router.use('/', sendMessage);

module.exports = router;