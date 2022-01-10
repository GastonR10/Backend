const {Pool} = require("pg");

const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'postgre',
    database: 'Canestilo',
    port: 5432,
};

const pool = new Pool(config);

module.export = {
    query: (text, params) => pool.query(text, params),
};
