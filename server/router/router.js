const express = require('express');
const router = express.Router();
const path = require('path');
const {selectAllProducts} = require('../database/queries/getData');
const {addProduct, deleteProduct} = require('../database/queries/postData');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
})

router.get('/users', (req, res) => {
    selectAllProducts()
    .then(data => res.json(data.rows))
    .catch(err => console.log(err))
})

router.post('/add-product', (req, res) => {
    addProduct(req);
    res.redirect('/')
})

router.get('/delete-product/:id', (req, res) => {
    const searchParams = new URLSearchParams(req.params.id);
    const id = searchParams.get('product_id');
    deleteProduct(id)
})



module.exports = router;