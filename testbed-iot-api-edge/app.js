// includes
const express = require('express');
const config = require('./config/config.json');

global.gConfig = config;

const app = express();

app.use(express.json());

const mainRoutes = require('./routes/main')

//Use Routes
app.use(mainRoutes)
//start server
app.listen(global.gConfig.port, () => console.log('Platform simulation listening on port 1338'));
