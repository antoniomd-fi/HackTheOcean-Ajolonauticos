const {response, request} = require('express')

const usersPost = (req, res=response) => {
    const {name, age } = req.body;

    res.json({
        msg: 'post Api -controlador',
        name,
        age
    });
}

module.exports= {
    usersPost
}