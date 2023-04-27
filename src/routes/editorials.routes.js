const { Router } = require('express');
const router = Router();
const {getAllEditorials, getEditorial, createEditorial, deleteEditorial, updateEditorial} = require('../controllers/editorials.controller')
const pool = require('../db');

//rutas crud de editoriales
router.get('/editorials', getAllEditorials);

router.get('/editorials/:id', getEditorial);

router.post('/editorials', createEditorial);

router.delete('/editorials/:id', deleteEditorial);

router.put('/editorials/:id',updateEditorial);


module.exports = router;