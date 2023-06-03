const { leerJSON, escribirJSON } = require("../data");
const Producto = require('./Producto');

module.exports = {
  productos: leerJSON(),
    listar : require('./listar'),
    agregar: require("./agregar"),
    filtrar: require("./filtrar"),

  //   agregar:  require('./agregar'),
  //   filtrar :  require('./filtar'),
  //   editar : require('./editar'),
  
};