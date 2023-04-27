const {Router} = require('express');
const router = Router();
const {getAllAuthors, getAuthor, createAuthor, deleteAuthor, updateAuthor} = require('../controllers/authors.controller');
const pool = require('../db');

//rutas crud de autor
router.get('/authors', getAllAuthors);

router.get('/authors/:id', getAuthor);

router.post('/authors', createAuthor);

router.delete('/authors/:id', deleteAuthor);

router.put('/authors/:id', updateAuthor);

module.exports = router;