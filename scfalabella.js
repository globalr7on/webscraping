const fetch = require('node-fetch');
const cheerio = require('cheerio');

function searchCategory(searchTerm) {
    const urlCategory = 'https://www.falabella.com/falabella-cl/'
    return fetch(`${urlCategory}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const categories = [];
            const $ = cheerio.load(body);
            $('.ThirdLevelItems_submenuElementLi__n49I5').each(function(i, element){
                const $element = $(element);
                const $dir =$element.find('a');
                const category = {
                    title: $dir.text().replace(/[\n\r]/g,' '),
                };
                categories.push(category);
            });
            
            return categories
        });
    }

function searchProducts(searchTerm) {
    const url = 'https://www.falabella.com/falabella-cl/'
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