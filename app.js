var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
const { MongoClient } = require('mongodb');

require('dotenv').config()
var app = express();
const cors= require("cors");
const routerBatimant=require('./routes/batimentRoute')
const routerarmoir=require('./routes/armoirRoute')
const routeretage=require('./routes/etageRouter')
const routerequipement=require('./routes/equipementRoute')
const routerClient=require('./routes/clientRoute')
const corsOptions ={
    origin:'http://localhost:8080', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('DB CONNECTED');

    // Get the connected database name
    const dbName = mongoose.connection.name;
    console.log('Database Name:', dbName);
  
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
  
app.use('/api/batimant',routerBatimant)
app.use('/api/armoir',routerarmoir)
app.use('/api/etage',routeretage)
app.use('/api/equipe',routerequipement)
app.use('/api/client',routerClient)

module.exports = app;
