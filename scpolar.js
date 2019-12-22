const fetch = require('node-fetch');
const url = 'https://www.lapolar.cl/tecnologia/televisores/smart-tv/'
const cheerio = require('cheerio');

function searchProducts(searchTerm) {
    return fetch(`${url}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $('a.link.lp-font--barlow.js-trunk').each(function(i, element){
                const $element = $(element);
               // const $title =$element.find('.data-product-name');
                const $price =$element.find('.prices');
                const product = {
                 //   title: $title.text().replace(/[\n\r]/g,' '),
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
