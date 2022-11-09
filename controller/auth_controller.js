const bycrypt = require('bcrypt');
const User = require('../models/auth.model');


const Login = async(req, res) => {
    const { email, password } = req.body;
    const checkUser = await User.findOne({email});

    try {
        if (checkUser) {
            validPass = await bycrypt.compare(password, checkUser.password);

            if (validPass) {
                console.log("Logged in success!");
                res.redirect('/')
            }
            else {
                res.json({success: false, msg: "Password incorrect"})
            }
        }
        else {
            res.json({success: false, msg: "User not found"});
        }
    }
    catch (error) {
        res.json({msg: "try again", error});
    }
}

const Register = async(req, res) => {
    const { email, password1, password2 } = req.body;
    
    const checkUser = await User.findOne({email});

    try {
        if (checkUser) {
            res.json({success: false, msg: "Username already exist"});
        }
        else if (password1 === password2) {
            let password = password1;
            let saltRounds = 10;
            let hash = bycrypt.hash(password, saltRounds, (err, hash) => {
                const newUser = new User({
                    email: email,
                    password: hash
                });
                newUser.save();
                console.log("user created!")
            })
            res.redirect('/login');
        }
        else {
            res.json({success: false, msg: "Password do not match"})
        }

    } catch (error) {
        res.json({msg: "try again", error});
    }
}

module.exports = { Register, Login }