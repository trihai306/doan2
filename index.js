'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var path = require('path');
const config = require('./config');
const tintucRoutes = require('./routes/tintuc-router')
const authRoutes = require('./routes/auth-router')
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/', tintucRoutes.routes);
app.use('/',authRoutes.routes);
app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
