const connection = require('../config/connection');

const selectAllProducts = () => {
    return connection.query('SELECT * FROM products;')
}

const selectAllSellers = () => {
    return connection.query('SELECT * FROM seller;')
}


module.exports = {selectAllProducts, selectAllSellers};