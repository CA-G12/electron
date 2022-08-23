const express = require('express');
const path = require('path');
const router = require('./router/router')

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;