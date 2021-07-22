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
    images: {
      type: Sequelize.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue('images'));
      },
      set: function (value) {
        this.setDataValue('images', JSON.stringify(value));
      }
    },
  });

  return Posts;
};

