const express = require('express');
const router = express.Router();
const User = require('../models/auth.model');

router.post('/register', (req, res) => {
    const { email, password1, password2 } = req.body;
    const newUser = new User({
        email: email,
        password: password1
    });
    res.redirect('/login');
})

module.exports = router;