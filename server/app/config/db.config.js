const dbIni = require("./db.ini");

module.exports = {
  HOST: dbIni.HOST,
  USER: dbIni.USER,
  PASSWORD: dbIni.PASSWORD,
  DB: dbIni.DB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

};