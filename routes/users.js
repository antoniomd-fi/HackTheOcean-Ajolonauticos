const { Router }  = require('express');

const { usersPost} = require('../controllers/users');

const router = Router();

router.post('/', usersPost);

module.exports=router;