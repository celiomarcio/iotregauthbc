const express = require('express');
const config = require('./config/config.json');

global.gConfig = config;

const app = express();

app.use(express.json());

const mainRoutes = require('./routes/main')

// Receive payload and validate on blockchain

app.use(mainRoutes)

app.listen(global.gConfig.port, () => console.log('Platform simulation listening on port 1337'));
