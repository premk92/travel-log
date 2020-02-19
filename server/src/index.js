//Import the packages
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require('cors');

//Create the App
const app = express();

//Set up Middle Wares
app.use(morgan('common')) // Log all incoming requests
app.use(helmet()); //Hide few headers to prevent from hackers and adds few other headers
app.use(cors({
    origin: 'http://localhost:3000',
}));

//Json API for error
app.get('/',(req,res)=>{
    res.json({
        message: 'Hello Worlds!',
    });
});

//Not DoundHandle error if routes doesn't match any of the above
app.use((req,res,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); // Error goes to the actual Error Handling Middleware
});

//Error Handling Middleware
app.use((error, req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack : process.env.NODE_ENV === 'production'? 'Error for production' :  error.stack,

    });
});

const port = process.env.PORT || 1337;
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})