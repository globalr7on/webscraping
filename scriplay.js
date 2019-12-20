const fetch = require('node-fetch');
const url_1 = 'https://simple.ripley.cl/tecno/telefonia/smartphones?source=menu'
const url_2 = 'https://simple.ripley.cl/tecno/telefonia/basicos?source=menu'
const url_3 = 'https://simple.ripley.cl/tecno/telefonia/smartwatches-y-wearables?source=menu'
const url_4 = 'https://simple.ripley.cl/tecno/telefonia/accesorios-telefonia?source=menu'
const cheerio = require('cheerio');

function searchProductsSmartphone(searchTerm) {
    return fetch(`${url_1}${searchTerm}`)
        .then(response => response.text())
        .then(body => {
            const products = [];
            const $ = cheerio.load(body);
            $('.catalog-product-item.catalog-product-item__container').each(function(i, element){
                const $element = $(element);
                const $title =$element.find('.catalog-product-details__name');
                const $price =$element.find('.catalog-prices__offer-price');
                const product = {
                    title: $title.text().replace(/[\n\r]/g,' '),
                    Price: $price.text().replace(/[\n\r]/g,' '),
                };
                products.push(product);
            });
            return products
        });
    }
    function searchProductsBasic(searchTerm) {
        return fetch(`${url_2}${searchTerm}`)
            .then(response => response.text())
            .then(body => {
                const products = [];
                const $ = cheerio.load(body);
                $('.catalog-product-item.catalog-product-item__container').each(function(i, element){
                    const $element = $(element);
                    const $title =$element.find('.catalog-product-details__name');
                    const $price =$element.find('.catalog-prices__offer-price');
                    const product = {
                        title: $title.text().replace(/[\n\r]/g,' '),
                        Price: $price.text().replace(/[\n\r]/g,' '),
                    };
                    products.push(product);
                });
                return products
            });
        }

        function searchProductsSmartWatches(searchTerm) {
            return fetch(`${url_3}${searchTerm}`)
                .then(response => response.text())
                .then(body => {
                    const products = [];
                    const $ = cheerio.load(body);
                    $('.catalog-product-item.catalog-product-item__container').each(function(i, element){
                        const $element = $(element);
                        const $title =$element.find('.catalog-product-details__name');
                        const $price =$element.find('.catalog-prices__offer-price');
                        const product = {
                            title: $title.text().replace(/[\n\r]/g,' '),
                            Price: $price.text().replace(/[\n\r]/g,' '),
                        };
                        products.push(product);
                    });
                    return products
                });
            }
            function searchProductsSmartAccesorios(searchTerm) {
                return fetch(`${url_4}${searchTerm}`)
                    .then(response => response.text())
                    .then(body => {
                        const products = [];
                        const $ = cheerio.load(body);
                        $('.catalog-product-item.catalog-product-item__container').each(function(i, element){
                            const $element = $(element);
                            const $title =$element.find('.catalog-product-details__name');
                            const $price =$element.find('.catalog-prices__offer-price');
                            const product = {
                                title: $title.text().replace(/[\n\r]/g,' '),
                                Price: $price.text().replace(/[\n\r]/g,' '),
                            };
                            console.log(product);
                            products.push(product);
                        });
                        return products
                    });
                }
    module.exports = {
        searchProductsSmartphone,
        searchProductsBasic,
        searchProductsSmartWatches,
        searchProductsSmartAccesorios
    }