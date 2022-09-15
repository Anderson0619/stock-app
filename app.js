//import express from 'express';
const express = require('express');

const app = express();

//Recibir petición
app.get('/', (req, res) => {
    console.log('Petición Recibida')

    res.send('<h1>HELLO WORD, WELCOME ECUADOR</h1> ')
})

//Escuchar Puerto
app.listen(4000, () => {
    console.log("Escuchando en el puerto 4000")
})