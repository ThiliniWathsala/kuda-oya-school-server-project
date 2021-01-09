const express = require('express');
const router = express.Router();

router.use('/media', require('./school/mediaR'));



module.exports = router;
