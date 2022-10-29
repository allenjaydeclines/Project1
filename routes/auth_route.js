const express = require('express');
const router = express.Router();
const User = require('../models/auth.model');

router.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/login');
})

module.exports = router;