require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db');
// const cors = require('cors');
const apicache = require('apicache');
const cache = apicache.middleware;

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// app.use(cache('5 minutes'));

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'));

// app.use(cors({
//     origin: ['http://localhost:3000', 'https://majnewhome.com', 'https://www.majnewhome.com']
// }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    next();
});

app.use('/v1/auth', require('./routes/v1/Auth'));
app.use('/v1/users', require('./routes/v1/Users'));
app.use('/v1/offers', require('./routes/v1/Offers'));
app.use('/v1/mail', require('./routes/v1/Mails'));
app.use('/v1/payments', require('./routes/v1/Payments'));
app.use('/v1/team', require('./routes/v1/Team'));
app.use('/v1/pricing', require('./routes/v1/Pricing'));
app.use('/v1/contact', require('./routes/v1/Contact'));
app.use('/v1/invoice', require('./routes/v1/Invoices'));
app.use('/v1/lookingFor', require('./routes/v1/LookingFor'));
app.use('/v1/Blog', require('./routes/v1/Blog'));
app.use('/v1/Translations', require('./routes/v1/Translations'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));