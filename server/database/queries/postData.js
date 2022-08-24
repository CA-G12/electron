const connection = require('../config/connection');

const addProduct = (req) => {
    return connection.query('INSERT INTO products (product_title, product_img, category, price, seller_id) VALUES ($1, $2, $3, $4, $5)', [req.body.title, req.body.img, req.body.category, req.body.price, req.body.sellerid])
}



module.exports = {addProduct};