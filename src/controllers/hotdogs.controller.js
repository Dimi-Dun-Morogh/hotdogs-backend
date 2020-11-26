const { pool } = require('../db/index');

const getAllHotdogs = async () => {
  try {
    const result = await pool.query('SELECT * FROM hotdogs');
    return result.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};

const createHotdog = async ({ name, title, description, image }) => {
  try {
    const newHotdog = await pool.query(
      'INSERT into hotdogs ( name, title, description, image ) VALUES($1, $2, $3, $4) RETURNING *',
      [name, title, description, image],
    );
    return newHotdog.rows[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateHotdog = async ({ name, title, description, image, id }) => {
  try {
    // UPDATE todo SET description = $1 WHERE  todo_id= $2
    await pool.query(
      'UPDATE hotdogs SET name = $1, title = $2, description = $3, image = $4 WHERE id = $5',
      [name, title, description, image, id],
    );
    return { update: true, id };
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteHotdog = async (id) => {
  try {
    await pool.query('DELETE FROM hotdogs WHERE id = $1', [id]);
    return { delete: true, id };
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  getAllHotdogs,
  createHotdog,
  updateHotdog,
  deleteHotdog,
};
