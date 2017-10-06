const fs = require('fs');
const path = require('path');
const mysqlConfig = require('./mysql');

const MYSQL = mysqlConfig;
try {
  const mysqlConfigLocal = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.db'), 'utf8'));
  Object.assign(MYSQL, mysqlConfigLocal);
} catch (e) {
  console.log(e);
}

module.exports = {
  MYSQL,
};
