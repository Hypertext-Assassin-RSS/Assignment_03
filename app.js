const mongoose = require('mongoose')
const express = require('express')

const app = express();
const port = 4000;

app.use(express.json())

const url = 'mongodb://localhost/facebook_clone'
mongoose.connect(url, {useNewUrlParser:true});
const connection = mongoose.connection;

connection.on('open', () => {
    console.log('MongoDB Connect...!')
})

app.listen(port,() => {
    console.log('App start and listing :'+port)
})