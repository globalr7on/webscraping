const cheerio = require('cheerio');
const request = require('request-promise');
//const fs = require('fs-extra');
//const writeStream1 = fs.createWriteStream('Ofertas.csv');
//const writeStream2 = fs.createWriteStream('Productos2.csv');
const fetch = require('node-fetch')
const urlParis ='https://www.paris.cl/tecnologia/celulares/';



function searchParis(searchTerm){
    return fetch(`${urlParis}${searchTerm}`)
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

const urlRiplay='https://simple.ripley.cl/black-friday/electro/audio?showProducts=true';
function searchRiplay(searchTerm){
    return fetch(`${urlRiplay}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('.catalog-product-details').each(function(i,element){
            const title =$(element).find('.catalog-product-details__name');
            const price =$(element).find('.catalog-prices__card-price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};         

const urlFalabella='https://www.falabella.com/falabella-cl/category/cat720161/Smartphones';
function searchFalabella(searchTerm){
    return fetch(`${urlFalabella}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('.search-results-4-grid').each(function(i,element){
            const title =$(element).find('span b');
            const price =$(element).find('.jsx-2017147411 span');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};         

const urlHites='https://www.hites.com/electro-hogar?sorted==true&orderBy=3';
function searchHites(searchTerm){
    return fetch(`${urlHites}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};  

const urlLapolar='https://www.lapolar.cl/tecnologia/accesorios-computacion/';
function searchLapolar(searchTerm){
    return fetch(`${urlLapolar}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};  

const urlCorona='https://www.corona.cl/tecnologia/tv-y-video/televisores?PS=15';
function searchCorona(searchTerm){
    return fetch(`${urlCorona}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};  

const urlLider='https://www.lider.cl/catalogo/category/Categorías_GM/Electrónica';
function searchLider(searchTerm){
    return fetch(`${urlLider}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
};  


const urlEasy='https://www.easy.cl/tienda/categoria/electrohogar?cur_page=1&cur_view=grid';
function searchEasy(searchTerm){
    return fetch(`${urlEasy}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
}; 

const urlSodimac='https://www.sodimac.cl/sodimac-cl/landing/cat7500054/Terrazas/?cid=bnehom162707';
function searchSodimac(searchTerm){
    return fetch(`${urlSodimac}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
            const resultado ={
                title: title.text().replace(/[\n\r]/g,' '),
                price: price.text().replace(/[\n\r]/g,' '),
            };
            resultados.push(resultado);
        })
        return resultados;
    });
}; 


const urlJumbo='https://www.jumbo.cl/electro-y-tecnologia';
function searchJumbo(searchTerm){
    return fetch(`${urlJumbo}${searchTerm}`)
    .then(response => response.text())
    .then(body => {
        const resultados= []
        const $ = cheerio.load(body); 
        $('product-grid').each(function(i,element){
            const title =$(element).find('.product__content__name');
            const price =$(element).find('product_content_price');
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
    searchParis,
    searchRiplay,
    searchFalabella,
    searchHites,
    searchLapolar,
    searchCorona,
    searchLider,
    searchEasy,
    searchSodimac,
    searchJumbo
};


