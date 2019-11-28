const cheerio = require('cheerio');
const request = require('request-promise');
//const fs = require('fs-extra');
//const writeStream1 = fs.createWriteStream('Ofertas.csv');
//const writeStream2 = fs.createWriteStream('Productos2.csv');
const fetch = require('node-fetch')
const urlParis ='https://www.paris.cl/tecnologia/celulares/';



function searchParis(searchTerm){
    return fetch(`${urlParis}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('.box-absolute').each(function(i,element){
            const title =$(element).find('h4');
            const price =$(element).find('.item-price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};     

const urlRiplay='https://simple.ripley.cl/black-friday/electro/tv?showProducts=true';
function searchRiplay(searchTerm){
    return fetch(`${urlRiplay}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('.catalog-product-details').each(function(i,element){
            const title =$(element).find('.catalog-product-details__name');
            const price =$(element).find('.catalog-prices__card-price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};         

const urlFalabella='https://www.falabella.com/falabella-cl/category/cat720161/Smartphones';
function searchFalabella(searchTerm){
    return fetch(`${urlFalabella}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('.search-results-4-grid').each(function(i,element){
            const title =$(element).find('span b');
            const price =$(element).find('.jsx-2017147411 span');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};         
module.exports = {
    searchParis,
    searchRiplay,
    searchFalabella
};


