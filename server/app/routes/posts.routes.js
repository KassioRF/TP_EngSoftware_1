module.exports = app => {
  const posts = require("../controllers/posts.controller");

  var router = require("express").Router();

  //Create a New Post
  router.post("/create_post", posts.create);

  // Retrive all Posts
  router.get("/posts", posts.findAll);

  // Retrive a single Post
  router.get("/post/:id", posts.findOne);

  // Update a Post with Id
  router.put("/post/:id", posts.update);

  // Delete a Post with id
  router.delete("/post/:id", posts.delete);

  // Delete all Posts 
  router.delete("/posts", posts.deleteAll);

  app.use('/api', router);
}