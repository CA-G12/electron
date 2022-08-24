const express = require('express');
const path = require('path');
const router = require('./router/router')

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(router);

app.use((req, res) => {
    res.status(404).send('404 NOT FOUND')
})

app.use((err, req, res, next) => {
    res.status(500).end('Internal Server Error 500');
    next();
})

module.exports = app;