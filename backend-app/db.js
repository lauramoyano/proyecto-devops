const {Pool} = require('pg')
const {db} = require('./config')

const pool = new Pool({
     user: db.user,
     password: db.password,
     host: db.host,
     port: db.port,
     database: db.database,
     connectionString: process.env.DATABASE_URL,
     ssl: {
          rejectUnauthorized: false
        }
    
});

module.exports = pool;
