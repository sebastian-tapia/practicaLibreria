const { leerJSON, escribirJSON } = require("../data");
const Producto = require('./Producto');

module.exports = {
  productos: leerJSON(),
    listar : require('./listar'),
    filtrar :  require('./filtar'),
    buscar :  require('./agregar'),

  //   agregar:  require('./agregar'),
  //   filtrar :  require('./filtar'),
  //   editar : require('./editar'),
  
};