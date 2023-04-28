const {config} = require('dotenv')
config()

module.exports = {
     db: {
          user: "postgres",//process.env.DB_USER,
		  password: "root",//process.env.DB_PASSWORD,
		  host: "127.0.0.1",//process.env.DB_HOST,
		  port: "5432",//process.env.DB_PORT,
		  database: "library", //process.env.DB_DATABASE
	 }
}
