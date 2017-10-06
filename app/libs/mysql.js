const mysql = require('mysql');
const CONFIG = require('../config');
const _ = require('lodash');

const pool = mysql.createPool({
  host: CONFIG.MYSQL.HOST,
  user: CONFIG.MYSQL.USERNAME,
  password: CONFIG.MYSQL.PASSWORD,
  database: CONFIG.MYSQL.DATABASE,
});

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        resolve(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

const createTable = function (sql) {
  return query(sql, []);
};

/**
 *
 * @param {*} tableName
 * @param {*} keys
 * @param {*} custom
 * 注意：
 * 1. 所有表需要有status字段, 获取数据默认status=1
 * 2. status 在插入时没有做校验，前端需要确保值为0或1，否则会报错
 * 3. 更新数据时，使用PUT model/:id 通过唯一索引id更新其他字段。
 * 4. 所有的数据删除(delete)方法均为软删除，即通过status=0过滤;
 */
const modelFactory = function (tableName, keys, custom) {
  return _.assign({
    get: (status) => {
      if (!(~[0, 1].indexOf(+status))) status = 1;
      const sql = `select * from ${tableName} where status=?`;
      return query(sql, [+status]);
    },
    post: (model) => {
      const _keys = [];
      const _params = [];
      if (typeof model !== 'object') {
        throw new Error('params not valid');
      }
      _.forEach(keys, (key) => {
        if (model[key] !== undefined) {
          _keys.push(key);
          _params.push(model[key]);
        }
      });
      const sql = `insert into subject (${_keys.join(',')}) values (${_keys.map(() => '?').join(',')})`;
      console.log('POST:', sql); // eslint-disable-line
      return query(sql, _params);
    },
    put: (model) => {
      if (!model.id || Object.keys(model).length < 2) {
        throw new Error('nothing to update');
      }
      const str = [];
      const args = [];
      let sql = `update ${tableName} set `;
      _.forEach(keys, (key) => {
        if (model[key] !== undefined) {
          str.push(`${key}=? `);
          args.push(model[key]);
        }
      });
      sql += str.join(',');
      sql += ' where id=?';
      console.log('PUT:', sql, _.concat(args, [model.id])); // eslint-disable-line
      return query(sql, _.concat(args, [model.id]));
    },
    delete(model) {
      if (!model.id) {
        throw new Error('delete which model should be clearify, specify a id!');
      }
      return this.put({ id: model.id, status: 0 });
    },
  }, custom);
};

const Subject = modelFactory('subject', ['name', 'description', 'sort', 'status']);

module.exports = {
  query,
  createTable,
  Subject,
};
