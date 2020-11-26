const express = require('express');

const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const ROUTES = require('./routes/index');
const { initTable } = require('./db/index');

const PORT = process.env.PORT || 3003;
app.use(cors());

app.use(express.json()); // activate middleware to parse JSON

//* ROUTES
Object.entries(ROUTES).forEach(([path, route]) => app.use(path, route));

http.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNING PORT: ${PORT}`);
  initTable(
    'hotdogs',
    'CREATE TABLE hotdogs (id BIGSERIAL NOT NULL PRIMARY KEY, name VARCHAR(20) NOT NULL, title VARCHAR(50) NOT NULL, description VARCHAR(300) NOT NULL, image VARCHAR(250) )',
  ).then((exists) =>
    console.log(`connect to db success, ${exists ? 'table existed' : 'creating a table'}`),
  );
});
