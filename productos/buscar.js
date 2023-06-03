const { leerJSON } = require("../data");
const productos_db = leerJSON();

const buscar = function(nombre){
    return productos_db.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase())
}

module.exports = buscar;