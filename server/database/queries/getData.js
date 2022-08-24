const connection = require('../config/connection');

const selectAllProducts = () => {
    return connection.query('SELECT * FROM products INNER JOIN seller ON products.seller_id = seller.seller_id;')
}

const selectAllSellers = () => {
    return connection.query('SELECT * FROM seller;')
}


module.exports = {selectAllProducts, selectAllSellers};