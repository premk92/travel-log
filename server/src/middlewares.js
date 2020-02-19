const notFound = (req,res,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error); // Error goes to the actual Error Handling Middleware
};

const errorHandler = (error, req, res, next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack : process.env.NODE_ENV === 'production'? 'Error for production' :  error.stack,
    });
};

//To use in other files
module.exports = {
    notFound,
    errorHandler,
};