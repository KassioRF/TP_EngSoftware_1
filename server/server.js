const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// Parse requests of content-type - application/json
app.use(express.json({ limit: '70mb' }));
// Parse requests of content-type - application/x-www-form-rlencoded
app.use(express.urlencoded({ extended: true, limit: '70mb' }));

const db = require("./app/models");
/* No final usar este sync*/
db.sequelize.sync();

/* Ativar esta sync para resetar as tabelas */
/*
db.sequelize.sync({ force: true }).then(() => {
console.log("Drop and re-sync db.");
});
*/

/*
//simple route - test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Server Side Fella's 😄  " });
})
*/
require("./app/routes/posts.routes")(app);


//set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀🚀🚀 `)
});
