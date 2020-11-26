const { Pool } = require('pg');
const config = require('../config/db-config');

const pool = new Pool(config);

const initTable = async (name, query) => {
  try {
    const response = await pool.query(`SELECT to_regclass('${name}')`);
    const exists = response.rows[0].to_regclass;
    if (exists === null) pool.query(query);
    return Promise.resolve(exists);
  } catch (error) {
    console.error(error.message);
    return Promise.reject(error);
  }
};

module.exports = {
  pool,
  initTable,
};
