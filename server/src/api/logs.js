//Include Router from Express
const { Router } = require('express');

//Create Router
const router = Router();

router.get('/',(req,res) =>{
    res.json({
        message : 'You made a GET request from /api/logs - /',
    });
});

router.post('/',(req,res)=>{
    console.log(req.body);
});
 
//Export the router
module.exports = router;