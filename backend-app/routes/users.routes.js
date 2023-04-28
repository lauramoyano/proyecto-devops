const {Router} = require('express');
const  {getAllUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/users.controller')
const router = Router();
const pool = require('../db');

//rutas crud de usuarios
router.get('/users', getAllUsers);

router.get('/users/:id', getUser);

router.post('/users', createUser);

router.delete('/users/:id', deleteUser);


module.exports = router;
