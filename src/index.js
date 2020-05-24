const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


app.get('/register', (req,res) => {
    res.send('hello world');
})


mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log('Banco de Dados conectado');
});

app.listen(3000);