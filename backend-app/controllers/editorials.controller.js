const pool = require('../db');

//obtener todas las editoriales
const getAllEditorials = async (req, res, next) => {
    
    try{
        const result = await pool.query("SELECT * FROM editorial");
        return res.json(result.rows);
    }
    catch(error){
        next(error);
    }
}

//obtener una editorial
const getEditorial = async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const result = await pool.query("SELECT * FROM editorial WHERE id_editorial=$1", [id]);

        if(result.rows.length === 0){
            return res.status(404).json(
                {message: "Editorial no found--get"}
            );
        };

        return res.json(result.rows[0]);
    }
    catch(error){
        next(error);
    }
}

//crear una editorial
const createEditorial = async (req, res, next) => {
    
    try{
        const {name_editorial} = req.body;
        const result = await pool.query("INSERT INTO editorial VALUES (default, $1)  RETURNING *",[name_editorial]);

        return res.json(result.rows[0]);
    }
    catch(error){
        next(error);
    }
}

//borrar una editorial
const deleteEditorial = async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const result = await pool.query("DELETE FROM editorial WHERE id_editorial=$1", [id]);

        if(result.rowCount === 0){
            return res.status(404).json(
                {message: "Editorial no found --delete"}
            );
        };

        return res.sendStatus(204);
    }
    catch(error){
        next(error);
    }
}

//actualizar una editorial
const updateEditorial = async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const {name_editorial} = req.body;
        const result = await pool.query("UPDATE editorial SET name_editorial=$1 WHERE id_editorial=$2  RETURNING *", [name_editorial, id]);

        if(result.rows.length === 0){
            return res.status(404).json(
                {message: "Editorial no found --update"}
            );
        };

        return res.json(result.rows[0]);
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getAllEditorials,
    getEditorial,
    createEditorial,
    deleteEditorial,
    updateEditorial
}