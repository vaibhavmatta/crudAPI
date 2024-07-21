const express = require('express');
const mongoose = require('mongoose');
const User = require("./models/userModel");
const app = express();
const port = 3000;

app.use(express.json());
app.post('/addUser/', async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    }catch(err){
        console.log(`Error Message : ${err}`);
        res.status(500).json({message : err.message});
    }
});

app.get('/fetchUser/', async (req,res)=>{
    try{
        const user = await User.find({first_name: req.query.name});
        if(user.length===0){
            console.log("No such user found");
            res.status(404).json({message : "No user found"});
        }else{
            console.log(`${user.length} users found`);
            res.status(200).json(user);
        }
    }catch(err){
        console.log(`Error Message : ${err}`);
        res.status(500).json({message : err.message});
    }
});

(async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/interviews');
        console.log("Connected to database");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
          });
    }
    catch(err){
        console.log(`Error Message : ${err}`);
    }
})();