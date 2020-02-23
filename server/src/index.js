//Import the packages
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require('cors');
const mongoose = require('mongoose');

//Loading Env File
require('dotenv').config();

//Import Middlewares
const middlewares = require('./middlewares');
const logs = require('./api/logs');

//Create the App
const app = express();

//Connect To Database
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

//Set up Middle Wares
app.use(morgan('common')) // Log all incoming requests
app.use(helmet()); //Hide few headers to prevent from hackers and adds few other headers
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
//Use Body Parsing Middleware
app.use(express.json());

//Json API for error
app.get('/',(req,res)=>{
    res.json({
        message: 'You made a get request from root folder - /',
    });
});

app.use('/api/logs',logs);

//Handle Error If Routes Doesn't Match Any Of The Above
app.use((middlewares.notFound));

//Handle Errors For Valid Routes
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1338;
app.listen(port,()=>{
    console.log(`Travel-Log Backend Server is Listening at http://localhost:${port}`);
    console.log(`CORS_ORIGIN is sett to ${process.env.CORS_ORIGIN}`);
})
