const pool = require('../db')

//obtener todos los usuario
const getAllUsers = async (req, res, next) => {
     
    try{
       const result= await pool.query("SELECT * FROM users");
         return res.json(result.rows);
    } 
    catch(error) {
         next(error)
   }
};

//obtener un usuario
const getUser= async (req, res, next) => {
    
    try { 
         const {id} = req.params;
         const result =  await pool.query("SELECT * FROM users WHERE id_user= $1", [id]);
         
         if(result.rows.length === 0){
            return res.status(404).json(
                   {message: "Book no found--get"}
              );
         };
         
         return res.json(result.rows[0]);
    } 
    catch (error) {
         next(error)
   }

};

//crear un usuario
const createUser= async (req, res, next) => {

   try {	
         const {full_name, cellphone, address, roles, email, password} = req.body;
         const result = await pool.query("INSERT INTO users VALUES (default,$1,$2,$3,$4,$5,$6) RETURNING *",
                                   [full_name, cellphone, address, roles, email, password]);

         return res.send(result.rows[0]);
    } 
    catch (error){
        next(error)
   }
};

//borrar un usuario
const deleteUser = async (req, res, next) => {

    try {
         const {id} = req.params;
          const result = await pool.query("DELETE FROM users WHERE id_user=$1",[id]);

          if(result.rowCount === 0){
            return res.status(404).json(
                   {message: "Book no found--delete"}
              );
           }

           return res.sendStatus(204);
    } 
    catch(error) {
         next(error)   
   }
};

//actualizar usuario
const updateUser = async (req, res, next) => {
    
    try {
        const {id} = req.params;
        const {full_name, cellphone, address, role, email, password} = req.body
   
        const result = await pool.query("UPDATE users SET full_name=$1, cellphone=$2, address=$3, roles=$4, email=$5, password=$6 WHERE isbn=$7 RETURNING *;",
                                        [full_name, cellphone, address, role, email, password, id]);
    
         if(result.rows.length === 0) {
              return res.status(404).json(
                   {message:"book not found--update"}
            );
        }	
         return res.json(result.rows[0])
    } 
    catch {
        next(error)
    }
    
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}
