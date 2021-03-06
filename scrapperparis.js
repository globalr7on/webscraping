const fetch = require('node-fetch');
const url = 'https://www.paris.cl/search?q='
const cheerio = require('cheerio');

function searchProducts(searchTerm) {
    return fetch(`${url}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $('.product-tile').each(function(i, element){
                const $element = $(element);
                const $title =$element.find('h4');
                const $price =$element.find('.price');
                const product = {
                    title: $title.text().replace(/[\n\r]/g,' '),
                    Price: $price.text().replace(/[\n\r]/g,' '),
                };
                products.push(product);
            });
            return products
        });
    }
    module.exports = {
        searchProducts
    }