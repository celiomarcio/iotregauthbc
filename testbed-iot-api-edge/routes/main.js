const express = require('express');

const receiveController = require('../controllers/receive');

const router = express.Router();

// /receive => POST
router.post('/receive', receiveController.postReceive);

module.exports = router;