const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productRoute.js');
const dotenv = require('dotenv');
const app = express();

//dotenv config
dotenv.config();

const port = process.env.PORT || 8000;

//mongodb connection
mongoose.connect(process.env.DB, () => {
    console.log('mongoose connected succesffully');
})

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/products', router);

//server listening
app.listen(port, () => {
    console.log(`server is listening at ${port}`);
})