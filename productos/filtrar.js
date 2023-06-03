const {leerJSON,escribirJSON} = require('../data');
const producto_db = leerJSON();
require('colors')

const filtrar =  function (productos = producto_db) {
    console.log("\n***************LISTA DE PRODUCTOS *****************\n".yellow);
    productos.forEach(({id, nombre, marca, precio, stock},i) => {
        console.log(
        `${id} - ${nombre} ${marca} $${precio} | ${stock ? 'OK' : 'SIN STOCK'}`
        );
    });
    console.log("\n***************************************************\n".yellow);

    return null
  }
module.exports = filtrar;