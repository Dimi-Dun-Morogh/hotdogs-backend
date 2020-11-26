if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  user: 'wyxesuka',
  password: process.env.DB_PASSWORD,
  database: 'wyxesuka',
  host: 'rogue.db.elephantsql.com',
  port: 5432,
};

module.exports = config;
