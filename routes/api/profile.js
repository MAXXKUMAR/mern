const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc Test route 
// @access Pubic
router.get('/', (req,res) => res.send('Profiile route'));

module.exports =router;