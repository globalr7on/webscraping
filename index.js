const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');
const writeStream1 = fs.createWriteStream('Productos1.csv');
const writeStream2 = fs.createWriteStream('Productos2.csv');


async function init(){
    const $ = await request({
        uri: 'https://www.paris.cl',
        transform: body => cheerio.load(body)
    });
    writeStream1.write('Producto | Precio\n')
    const productName = $('h6').each((i,el) => {
        console.log(i, $(el).text())
    });
    const productPrice= $('.prices p.price-cencosud').each((i,el) => {
        console.log(i, $(el).text())
    })
    writeStream1.write(`${productName} | ${productPrice}\n`)
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


