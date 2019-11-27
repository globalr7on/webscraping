const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream1 = fs.createWriteStream('Productos1.csv');
const writeStream2 = fs.createWriteStream('Productos2.csv');
const fetch = require('node-fetch')

const url = 'https://www.paris.cl/tecnologia/celulares/';

function searchProduct(searchTerm){
    return fetch(`${url}${searchTerm}`)
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
module.exports = {
    searchProduct
};


