const express = require('express');
const app = express();
const hbs = require('hbs');

require('./helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
hbs.registerPartials(__dirname + '/views');


app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'david',
        apellido: 'Escalante'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'David',
        apellido: 'Escalante'
    });

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});