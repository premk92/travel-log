//Include Router from Express
const { Router } = require('express');

//Pull LogEntry from models
const LogEntry = require('../models/LogEntry');

//Create Router
const router = Router();

router.get('/',(req,res) =>{
    res.json({
        message : 'You made a GET request from /api/logs - /',
    });
});

router.post('/', async (req,res,next)=>{
    try{
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry)
    } catch (error){
        console.log(error.name);
        if (error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});
 
//Export the router
module.exports = router;