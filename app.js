const mongoose = require('mongoose')
const express = require('express')

const User = require('./routes/User')
const Login = require('./routes/login')

const app = express();
const port = 4000;

app.use(express.json())

const url = 'mongodb://localhost/facebook_clone'
mongoose.connect(url, {useNewUrlParser:true});
const connection = mongoose.connection;

connection.on('open', () => {
    console.log('MongoDB Connect...!')
})

app.use('/user',User)
app.use('/login',Login)

app.listen(port,() => {
    console.log('App start and listing :'+port)
})