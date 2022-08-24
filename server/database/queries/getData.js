const connection = require('../config/connection');

const selectAllProducts = () => {
    return connection.query('SELECT * FROM products INNER JOIN seller ON products.seller_id = seller.seller_id;')
}


module.exports = {selectAllProducts};