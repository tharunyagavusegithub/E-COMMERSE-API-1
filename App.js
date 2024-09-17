const express = require('express');
const App = express();
const dotenv = require('dotenv');
const path = require('path');
const ConnectDatabase=require('./config/connectdatabase');

// Load environment variables from the config file
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });


const products =require('./routes/product');
const orders=require('./routes/Order');

ConnectDatabase();



App.use('/api/v1/',products);
App.use('/api/v1/',orders);




App.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
