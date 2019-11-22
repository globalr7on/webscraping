const express = require('express');
const app = express();
const scraper = require('./scrapper')

app.get('/', (req, res)=> {
    res.json({
        message: 'Scraping Funciona'
    });
});

app.get('/search/:title', (req, res)=> {
    scraper.searchProduct(req.params.title)
    .then(cells => {
        res.json(cells);
    });

});


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Escuchando en ${port}`);
})