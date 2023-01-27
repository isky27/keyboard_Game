const express = require("express");
const randomWords = require('random-words');
const UserModel = require("./user.model");

const router = express.Router();

router.post('/', async(req,res)=>{
    const {name,level} = req.body;  
    try {
        const newUser = await UserModel.create({ name, level})
        newUser.save()
        return res.status(201).send("User created successfully")
    } catch (error) {
        return res.status(400).send("Something went wrong")
    }
})

router.get('/info', async (req, res) => {    
    try {
        const user = await UserModel.find();
        return res.status(200).send(user)    
    } catch (error) {
        return res.status(400).send("Something went wrong")
    }
})

router.get('/generate', async (req,res)=>{
    try {
        let text = randomWords().toUpperCase();
        return res.status(200).send(text)
    } catch (error) {
        return res.status(400).send("Something went wrong")
    }
})

module.exports = router;