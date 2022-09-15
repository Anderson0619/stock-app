require('dotenv').config();

//import express from 'express';
const express = require('express');

const app = express();

//Recibir petición
app.get('/', (req, res) => {
    console.log('Petición Recibida')
    

    res.send('<h1>HELLO WORD, WELCOME ECUADOR</h1> ')
})

const PORT = process.env.PORT 

//Escuchar Puerto
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT} `)
})