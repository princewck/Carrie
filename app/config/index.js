const fs = require('fs');
const mysqlConfig = require('./mysql');

const MYSQL = mysqlConfig;
try {
  const mysqlConfigLocal = fs.readFileSync('../.config');
  Object.assign(MYSQL, JSON.parse(mysqlConfigLocal.toString()));
} catch (e) {
  console.info('no .config.json'); // eslint-disable-line no-console
}

module.exports = {
  MYSQL,
};
