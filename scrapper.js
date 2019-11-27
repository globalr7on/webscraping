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
        const cells = [];
        const $ = cheerio.load(body); 
        $('.name-product-plp').each(function(i,element){
            const $element =$(element);
            const $price = $('.item-price');
            const cell = {
                title: $element.text().replace(/[\n\r]/g,' '),
                price: $price.text().replace(/[\n\r]/g,' '),
            };
            //console.log($element.text());
            cells.push(cell);
        })
      return cells;
    });
};         
module.exports = {
    searchProduct
};


