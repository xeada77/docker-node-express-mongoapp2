console.log("Oh Yeah!");
const express = require('express');
const database = require('./database');
const app = express();

database.initializeMongo();

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/testFind', (req, res) => {
    database.Kitten.find((err, kittens) => {
        if (err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    });
});

app.get('/home', (req, res) => {
    res.send('<h1>Hola Mundo otra vez</h1>');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});