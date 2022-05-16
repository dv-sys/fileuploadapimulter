const express = require('express');
const app = express();
const upload = require('./middleware/upload');
const router = require('./routes/route');
app.use('/',router);

module.exports = app;