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
        $('.product-tile').each(function(i,element){
            const $element =$(element);
            const $price = $element.find('p.price-cencosud');
            const cell = {
             
                title: $element.text(),
                price: $price.text()
            };
            //console.log($element.text());
            cells.push(cell);
        })
      return cells;
    });
        
}
module.exports = {
    searchProduct
};




/*
async function init(){
    const $ = await request({
        uri: 'https://www.paris.cl',
        transform: body => cheerio.load(body)
    });
    writeStream1.write('Producto|Precio\n')
    const productName = $('h6').each((i,el) => {
        console.log(i, $(el).text())
    });
    const productPrice= $('.prices p.price-cencosud').each((i,el) => {
        console.log(i, $(el).text())
    })
    writeStream1.write(`${productName}|${productPrice}\n`)
}

init(); 

async function smarphone(){
    const $ = await request({
        uri: 'https://www.paris.cl/tecnologia/celulares/',
        transform: body => cheerio.load(body)
    });
    writeStream2.write('Producto|Precio\n')
    $('.js-search-result-wrapper').each((i,el) => {



        const productName = $(el).find('.name-product-plp').text();
        const productPrice = $(el).find('.item-price').text();
        writeStream2.write(`${productName}|${productPrice}\n`)
        console.log( 'producto:'+productName, 'precio:'+productPrice,);
    })

}
smarphone(); 

*/

