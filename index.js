// nodejs mysql 是客户端向 Server mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "",
});

connection.connect();

connection.query(
  "CREATE DATABASE IF NOT EXISTS jason DEFAULT CHARSET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_520_ci;",
  function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
    console.log("数据库创建啦！");
  }
);

connection.query("use jason;");

connection.query(
  `CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
  );`,
  (error, results, fields) => {
    console.log("results:", results);
    console.log("表格user创建成功啦！");
  }
);

connection.end();
