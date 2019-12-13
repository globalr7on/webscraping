const express = require('express');
const app = express();
const scraper = require('./scrapper')
const scrapPro = require('./scrapperparis')

app.get('/', (req, res)=> {
    res.json({
        message: 'Scraping Funciona'
    });
});

app.get('/search/:title', (req, res)=> {
    scrapPro
     .searchProducts(req.params.title)
     .then(products => {
        res.json(products);
    });

});

app.get('/searchRiplay/:title', (req, res)=> {
    scraper.searchRiplay(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});

app.get('/searchFalabella/:title', (req, res)=> {
    scraper.searchFalabella(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});

app.get('/searchHites/:title', (req, res)=> {
    scraper.searchHites(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });
    
});

app.get('/searchCorona/:title', (req, res)=> {
    scraper.searchCorona(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});


app.get('/searchLider/:title', (req, res)=> {
    scraper.searchCorona(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});

app.get('/searchEasy/:title', (req, res)=> {
    scraper.searchEasy(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});

app.get('/searchSodimac/:title', (req, res)=> {
    scraper.searchSodimac(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});

app.get('/searchJumbo/:title', (req, res)=> {
    scraper.searchJumbo(req.params.title)
    .then(resultados => {
        res.json(resultados);
    });

});


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Escuchando en ${port}`);
})