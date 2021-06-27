module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define("posts", {
  
    author: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    district: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },

    title: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    gender: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    imageUrl: {
      type: Sequelize.STRING
    },
  });

  return Posts;
};

