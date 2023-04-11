require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

app.use('/auth', require('./routes/Auth'));
app.use('/users', require('./routes/Users'));
app.use('/cars', require('./routes/Cars'));
app.use('/services', require('./routes/Services'));
app.use('/orders', require('./routes/Orders'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));