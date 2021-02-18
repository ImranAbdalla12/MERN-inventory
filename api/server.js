const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Init Express
const app = express();

//body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// DB Config
const db = require('./config/keys').mongoURI;
//Load the Routers
const admin = require('./routes/api/admin');
const payment = require('./routes/api/payment');
const product = require('./routes/api/product');
const report = require('./routes/api/report');
const sales = require('./routes/api/sales');
const users = require('./routes/api/users');

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));

//Connecting to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDD CONNECTED'))
  .catch((err) => console.log('DB CONNECTION ERR', err));

//Use the routes

app.use('/api/admin', admin);
app.use('/api/payment', payment);
app.use('/api/product', product);
app.use('/api/report', report);
app.use('/api/sales', sales);
app.use('/api/users', users);
