const util = require('util');
const mysql = require('mysql');
/**
 * Connection to the database.
 *  */
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', 
    password: 'root',
    database: 'customer'
});
 

pool.getConnection((err, connection) => {
    if(err) 
       throw err;

        console.log('MySQL Connected');
    
    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
