const { Router } = require('express');
const router = Router();
const {getAllLoans, getLoan, createLoan, updateLoan} = require('../controllers/loans.controller');
const pool = require('../db');

//rutas crud prestamos
router.get('/loans', getAllLoans);

router.get('/loans/:id', getLoan);

router.post('/loans', createLoan);

router.put('/loans/:id',updateLoan);


module.exports = router;