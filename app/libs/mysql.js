const mysql = require('mysql');
const CONFIG = require('../config/default.js');

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


const users =
  `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(40) NOT NULL,
     PRIMARY KEY ( id )
    );`;

const posts =
  `create table if not exists posts(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     title VARCHAR(40) NOT NULL,
     content  VARCHAR(40) NOT NULL,
     uid  VARCHAR(40) NOT NULL,
     moment  VARCHAR(40) NOT NULL,
     comments  VARCHAR(40) NOT NULL DEFAULT '0',
     pv  VARCHAR(40) NOT NULL DEFAULT '0',
     PRIMARY KEY ( id )
    );`;

const comment =
  `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     content VARCHAR(40) NOT NULL,
     postid VARCHAR(40) NOT NULL,
     PRIMARY KEY ( id )
    );`;

const createTable = function (sql) {
  return query(sql, []);
};

// 建表
createTable(users);
createTable(posts);
createTable(comment);

// 注册用户
const insertData = function (value) {
  const sql = 'insert into users(name,pass) values(?,?);';
  return query(sql, value);
};
// 发表文章
const insertPost = function (value) {
  const _sql = 'insert into posts(name,title,content,uid,moment) values(?,?,?,?,?);';
  return query(_sql, value);
};
// 更新文章评论数
const updatePostComment = function (value) {
  const _sql = 'update posts set  comments=? where id=?';
  return query(_sql, value);
};

// 更新浏览数
const updatePostPv = function (value) {
  const _sql = 'update posts set  pv=? where id=?';
  return query(_sql, value);
};

// 发表评论
const insertComment = function (value) {
  const _sql = 'insert into comment(name,content,postid) values(?,?,?);';
  return query(_sql, value);
};
// 通过名字查找用户
const findDataByName = function (name) {
  const _sql = `
    SELECT * from users
      where name="${name}"
      `;
  return query(_sql);
};
// 通过文章的名字查找用户
const findDataByUser = function (name) {
  const _sql = `
    SELECT * from posts
      where name="${name}"
      `;
  return query(_sql);
};
// 通过文章id查找
const findDataById = function (id) {
  const _sql = `
    SELECT * from posts
      where id="${id}"
      `;
  return query(_sql);
};
// 通过评论id查找
const findCommentById = function (id) {
  const _sql = `
    SELECT * FROM comment where postid="${id}"
      `;
  return query(_sql);
};

// 查询所有文章
const findAllPost = function () {
  const _sql = `
    SELECT * FROM posts
      `;
  return query(_sql);
};
// 更新修改文章
const updatePost = function (values) {
  const _sql = 'update posts set  title=?,content=? where id=?';
  return query(_sql, values);
};
// 删除文章
const deletePost = function (id) {
  const _sql = `delete from posts where id = ${id}`;
  return query(_sql);
};
// 删除评论
const deleteComment = function (id) {
  const _sql = `delete from comment where id = ${id}`;
  return query(_sql);
};
// 删除所有评论
const deleteAllPostComment = function (id) {
  const _sql = `delete from comment where postid = ${id}`;
  return query(_sql);
};
// 查找评论数
const findCommentLength = function (id) {
  const _sql = `select content from comment where postid in (select id from posts where id=${id})`;
  return query(_sql);
};


module.exports = {
  query,
  createTable,
  insertData,
  findDataByName,
  insertPost,
  findAllPost,
  findDataByUser,
  findDataById,
  insertComment,
  findCommentById,
  updatePost,
  deletePost,
  deleteComment,
  findCommentLength,
  updatePostComment,
  deleteAllPostComment,
  updatePostPv,
};
