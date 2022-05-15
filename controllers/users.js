const {response, request} = require('express');

const User = require('../models/user');

const usersPost = async (req, res=response) => {
    const {name,email, phone,website,message}= req.body;
    const user = new User({name,email, phone,website,message});

    //guardar en DB
    await user.save();

    res.json(user);
}
module.exports= {
    usersPost
}