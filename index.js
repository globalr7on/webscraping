const express = require('express');
const app = express();
const scraper = require('./scrapper')

app.get('/', (req, res)=> {
    res.json({
        message: 'Scraping Funciona'
    });
});

app.get('/searchParis/:title', (req, res)=> {
    scraper.searchParis(req.params.title)
    .then(cells => {
        res.json(cells);
    });

});

app.get('/searchRiplay/:title', (req, res)=> {
    scraper.searchRiplay(req.params.title)
    .then(cells => {
        res.json(cells);
    });

});

app.get('/searchFalabella/:title', (req, res)=> {
    scraper.searchFalabella(req.params.title)
    .then(cells => {
        res.json(cells);
    });

});


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Escuchando en ${port}`);
})