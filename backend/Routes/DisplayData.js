const express = require("express");
const router = express.Router();

router.post("/DisplayData",(req,res)=>{
    try {
        res.send([global.food_items,global.foodCategory])
    } catch (error) {
        console.log(error);
       res.send("Server error"); 
    }
    
})

module.exports = router