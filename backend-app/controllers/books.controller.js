const pool = require('../db')

//obtener todos los libros
const getAllBooks = async (req, res, next) => {
     
     try{
		const allBooks = await pool.query("SELECT  isbn, title, score, published_date, name_category, name_author, name_editorial FROM book natural join category natural join author natural join editorial");
          return res.json(allBooks.rows);
     } 
     catch(error) {
          next(error)
	}
};

//obtener solo un libro
const getBook = async (req, res, next) => {
     
     try { 
          const {isbn} = req.params;
          const result =  await pool.query("SELECT isbn, title, score, published_date, name_category, name_author, name_editorial FROM book natural join category natural join author natural join editorial WHERE isbn=$1", [isbn]);
          
          if(result.rows.length === 0){
		     return res.status(404).json(
                    {message: "Book no found--get"}
               );
          };
          
          return res.json(result.rows[0]);
     } 
     catch(error) {
          next(error)
	}

};

//crear un libro
const createBook = async (req, res, next) => {

	try {	
          const {title, score, published_date, id_category, id_author, id_editorial} = req.body;
          const result = await pool.query("INSERT INTO book VALUES (default,$1,$2,$3,$4,$5,$6) RETURNING *",
                                    [title, score, published_date, id_category, id_author, id_editorial,]);

          return res.send(result.rows[0]);
     } 
     catch(error){
         next(error)
	}
};

//borrar un libro
const deleteBook = async (req, res, next) => {

     try {
	      const {isbn} = req.params;
           const result = await pool.query("DELETE FROM book WHERE isbn = $1",[isbn]);

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

//actualizar libro
const updateBook = async (req, res, next) => {
     
     try {
         const {isbn} = req.params;
         const {title, score, published_date, id_category, id_author, id_editorial} = req.body
    
         const result = await pool.query("UPDATE book SET title=$1, score=$2, published_date=$3, id_category=$4,id_author=$5, id_editorial=$6 WHERE isbn=$7 RETURNING *;",
                                         [title, score, published_date, id_category, id_author, id_editorial, isbn]);
     
      	if(result.rows.length === 0) {
               return res.status(404).json(
                    {message:"book not found--update"}
		     );
	     }	
          return res.json(result.rows[0])
     } 
     catch(error){
         next(error)
     }
     
};

module.exports = {
     getAllBooks,
     getBook,
     createBook,
     deleteBook,
     updateBook
}
