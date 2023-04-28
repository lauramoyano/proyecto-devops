const {Router} = require('express');
const router = Router();
const {getAllBooks, getBook, createBook, deleteBook, updateBook} = require('../controllers/books.controller')
const pool = require('../db');

//routas crud de libros
router.get('/books', getAllBooks);

router.get('/books/:isbn', getBook);

router.post('/books', createBook);

router.delete('/books/:isbn', deleteBook);

router.put('/books/:isbn', updateBook);

module.exports = router;
