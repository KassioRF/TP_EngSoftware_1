
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./posts.model.js")(sequelize, Sequelize);

module.exports = db;