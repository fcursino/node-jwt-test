const mysql = require('mysql');

var pool = mysql.createPool({
    "user": process.env.MYSQL_USER,
    "password":process.env.MYSQL_PASSWORD,
    "database":process.env.MYSQL_DATABASE,
    "host":process.env.MYSQL_HOST,
    "port":process.env.MYSQL_PORT
});

exports.execute = (query, params=[]) => {
    console.log(pool)
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, result, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(result)
            }
        });
    })
}

exports.pool = pool;