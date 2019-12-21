const express = require('express');
const app = express();
const path = require('path');
const scraper = require('./scrapper');
const scrapPro = require('./scrapperparis');
const scFallabella = require('./scfalabella');
const scriplay = require('./scriplay');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search/:title', (req, res)=> {
    scrapPro
     .searchProducts(req.params.title)
     .then(products => {
        res.json(products);
    });
});

app.get('/search2/:title', (req, res)=> {
    scFallabella
     .searchProducts(req.params.title)
     .then(products => {
        res.json(products);
    });
});

app.get('/searchCat/', (req, res)=> {
    scFallabella
     .searchCategory(req.params.title)
     .then(categories => {
        res.json(categories);
    });
});

app.get('/searchRiplay_1/', (req, res)=> {
    scriplay
     .searchProductsSmartphone(req.params.title)
     .then(products => {
        res.json(products);
    });
});
app.get('/searchRiplay_2/', (req, res)=> {
    scriplay
     .searchProductsBasic(req.params.title)
     .then(products => {
        res.json(products);
    });
});
app.get('/searchRiplay_3/', (req, res)=> {
    scriplay
     .searchProductsSmartWatches(req.params.title)
     .then(products => {
        res.json(products);
    });
});
app.get('/searchRiplay_4/', (req, res)=> {
    scriplay
     .searchProductsSmartAccesorios(req.params.title)
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