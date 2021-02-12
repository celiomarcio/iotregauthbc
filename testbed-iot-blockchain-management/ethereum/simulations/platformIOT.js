const express = require('express');

const app = express();

app.use(express.json());

const mainRoutes = require('./routes/main')

// Receive payload and validate on blockchain

app.use(mainRoutes)

app.listen(1337, () => console.log('Platform simulation listening on port 1337'));
