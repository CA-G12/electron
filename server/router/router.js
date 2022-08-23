const express = require('express');
const router = express.Router();
const path = require('path');
const {selectAllProducts, selectAllSellers} = require('../database/queries/getData');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
})

router.get('/users', (req, res) => {
    selectAllProducts()
    .then(data => res.json(data.rows))
    .catch(err => console.log(err))
})



module.exports = router;