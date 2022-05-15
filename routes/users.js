const { Router }  = require('express');
const { check }  = require('express-validator');

const {usersPost} = require('../controllers/users');
const { validateFields } = require('../middleware/validateFiels');

const router = Router();

router.post('/',
    [    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email','Esto no es correo valido').isEmail(),
    validateFields
],usersPost);

module.exports=router;