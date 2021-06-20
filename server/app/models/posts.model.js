module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define("posts", {
    title: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    imageUrl: {
      type: Sequelize.STRING
    }
  });

  return Posts;
};