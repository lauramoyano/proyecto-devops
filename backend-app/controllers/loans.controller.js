const pool = require('../db');

//obtener todos los prestamos
const getAllLoans = async (req, res, next) => {
    
    try{
        const result = await pool.query("SELECT * FROM loan");
        return res.json(result.rows);
    }
    catch(error){
        next(error);
    }
}

//obtener un prestamo
const getLoan = async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const result = await pool.query("SELECT id_loan, loan_date, devolution_date, full_name, title, delivered FROM loan natural join users natural join book WHERE id_loan=$1",[id]);

        if(result.rows.length === 0){
            return res.status(404).json(
                {message: "Loan no found--get"}
            );
        };

        return res.json(result.rows[0]);
    }
    catch(error){
        next(error);
    }
}

//crear un prestamo
const createLoan = async (req, res, next) => {
    
    try{
        const {loan_date, devolution_date, id_user, isbn, delivered} = req.body;
        const result = await pool.query("INSERT INTO loan VALUES (default,$1,$2,$3,$4,$5) RETURNING *", [loan_date, devolution_date, id_user, isbn, delivered]);

        return res.json(result.rows[0]);
    }
    catch(error){
        next(error);
    }
}

//actualizar un prestamo
const updateLoan = async (req, res, next) => {
    
    try{
        const {id} = req.params;
         const {loan_date, devolution_date, id_user, isbn, delivered} = req.body
    
         const result = await pool.query("UPDATE loan SET loan_date=$1, devolution_date=$2, id_user=$3, isbn=$4, delivered=$5  WHERE id_loan=$6 RETURNING *;", [loan_date, devolution_date, id_user, isbn, delivered, id]);

        if(result.rows.length === 0){
            return res.status(404).json(
                {message: "Loan no found --update"}
            );
        };

        return res.json(result.rows[0]);
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getAllLoans,
    getLoan,
    createLoan,
    updateLoan
}