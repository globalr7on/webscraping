const fetch = require('node-fetch');
const url = 'https://www.lapolar.cl/tecnologia/'
const cheerio = require('cheerio');

function searchProducts(searchTerm) {
    return fetch(`${url}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $('.tile-body').each(function(i, element){
                const $element = $(element);
                const $title =$element.find('a.lp-font--barlow.js-trunk');
                const $price =$element.find('span.price-value');
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
