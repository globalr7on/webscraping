const fetch = require('node-fetch');
const url = 'https://www.falabella.com/falabella-cl/'
const urlCategory = 'https://www.falabella.com/falabella-cl/'

const cheerio = require('cheerio');

function searchCategory(searchTerm) {
    return fetch(`${urlCategory}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const categories = [];
            const $ = cheerio.load(body);
            $('..jsx-1208619116').each(function(i, element){
                const $element = $(element);
                const $name =$element.find('a');
                const category = {
                    name: $name.text()
                };
                categories.push(category);
            });
            return categories
        });
    }

function searchProducts(searchTerm) {
    return fetch(`${url}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $('.jsx-2743978790').each(function(i, element){
                const $element = $(element);
                const $title =$element.find('b');
                const $price =$element.find('.copy1');
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
        searchProducts,
        searchCategory
    }