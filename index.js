require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const mongoose = require('mongoose');

const app = express()




const port = process.env.PORT || 3000

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


//routes
const auth_route = require('./routes/auth_route')
app.use('/auth_route', auth_route);



app.get("/login", (req, res) => res.render('login'))
app.get("/register", (req, res) => res.render('register'))





//start
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()