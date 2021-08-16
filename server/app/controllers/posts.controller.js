const db = require("../models/DataBase");
const Posts = db.posts;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res) => {
  // Validade request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const post = {
    author: req.body.author,
    contact: req.body.contact,
    email: req.body.email,
    district: req.body.district,
    city: req.body.city,
    state: req.body.state,
    title: req.body.title,
    type: req.body.type,
    age: req.body.age,
    gender: req.body.gender,
    description: req.body.description,
    images: req.body.images,

  };

  Posts.create(post)
    .then(data => {
      console.log(data)
      res.send(data);

      console.log('post criado')
    })
    .catch(err => {
      console.log('caiu no catch')
      // console.log(req.body)
      res.status(500).send({
        message:
          err.message || "Some error ocurred while creating the POST"
      });
    });

};

// Retrieve all Post from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Posts.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Posts."
      });
    });
};

// Find a single Post with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Posts.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Post with id=" + id
      });
    })

};

// Update a Post by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Posts.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Posts.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Post was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
};
// Delete all Posts from the database.
exports.deleteAll = (req, res) => {
  Posts.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Post were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Postss."
      });
    });
};