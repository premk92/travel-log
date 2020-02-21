//Include Router from Express
const { Router } = require('express');

//Pull LogEntry from models
const LogEntry = require('../models/LogEntry');

//Create Router
const router = Router();

//Get All The Entries
router.get('/', async (req,res) =>{
    try{
        const entries = await LogEntry.find();
    res.json(entries);
    }catch(error){
        console.log('Error From Get All The Entries');
        next(error);
    }
});

//Create A New Entry
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