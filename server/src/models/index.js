const { Sequelize } = require('sequelize')
const path = require('path')

// สร้าง sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../coffeeshop-db.sqlite')
})

// export sequelize ตรง ๆ
module.exports = sequelize
