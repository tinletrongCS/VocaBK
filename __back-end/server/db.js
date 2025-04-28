const { Sequelize } = require('sequelize');

// Kết nối đến database - tên tùy chỉnh bên MySQL Workbench 
const sequelize = new Sequelize('db', 'root', '12345', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Kiểm tra kết nối
sequelize.authenticate()
  .then(() => {
    console.log("Kết nối MySQL thành công!");
  })
  .catch(err => {
    console.error("Lỗi kết nối MySQL:", err);
  });

// Sau phần kết nối
sequelize.query("CREATE DATABASE IF NOT EXISTS db")
  .then(() => {
    console.log("Database created or already exists");
    return sequelize.sync();
  })
  .catch(err => {
    console.error("Error creating database:", err);
  });

module.exports = sequelize;
