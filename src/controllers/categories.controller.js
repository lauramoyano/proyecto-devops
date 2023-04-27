const pool = require('../db');

//obtener todas las categorias
const getAllCategories = async (req, res, next) => {
    
    try{
        const result = await pool.query("SELECT * FROM category");
        return res.json(result.rows);
    }
    catch(error){
        next(error)
    }
};

//obtener un categoria
const getCategory = async (req, res, next) => {
    
    try{
        const {id} = req.params

        const result = await pool.query("SELECT * FROM category WHERE id_category=$1", [id]);

        if(result.rows.length === 0){
            return res.status(404).json(
                   {message: "Category no found--get"}
            );
         };

        return res.json(result.rows[0])
    }
    catch(error){
        next(error)
    }
};

//crear una categoria
const createCategory = async (req, res, next) => {
    
    try{
        const {name_category} = req.body;
        const result = await pool.query("INSERT INTO category VALUES (default, $1) RETURNING *", [name_category]);
        return res.json(result.rows[0])
    }
    catch(error){
        next(error)
    }
};

//borrar una categoria
const deleteCategory = async (req, res, next) => {
    
    try{
         const {id} = req.params;
         const result = await pool.query("DELETE FROM category WHERE id_category=$1", [id]);

         if(result.rowCount === 0){
            return res.status(404).json(
                   {message: "Category no found--delete"}
            );
         }

         return res.sendStatus(204);
    }
    catch(error){
        next(error)
    }
};

//actualizar una categoria
const updateCategory= async (req, res, next) => {
   
    try{
        const {id} = req.params;
        const {name_category} = req.body;
        const result = await pool.query("UPDATE category SET name_category=$1 WHERE id_category=$2 RETURNING *", [name_category, id]);

        if(result.rows.length === 0) {
            return res.status(404).json(
                 {message:"book not found--update"}
            );
        }
        
        return res.json(result.rows[0]);	
    }
    catch(error){
        next(error)
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
}