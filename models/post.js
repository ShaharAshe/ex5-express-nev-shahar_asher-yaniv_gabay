'use strict';

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relations can be defined here, for example:
      Post.hasMany(models.Order, {
        foreignKey: 'post_id'
      })
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: true, // constraint level validation (SQL level validation)
      validate: { // sequelize level validation
        max: 20,
        isAlpha: true,
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, // constraint level validation (SQL level validation)
      validate: { // sequelize level validation
        max: 200,
        isAlpha: true,
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false, // constraint level validation (SQL level validation)
      validate: { // sequelize level validation
        min: 0,
        isNumeric: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true, // constraint level validation (SQL level validation)
      validate: { // sequelize level validation
        isNumeric: true,
      }},
    email: {
      type: DataTypes.STRING,
      allowNull: false, // constraint level validation (SQL level validation)
      validate: { // sequelize level validation
        isEmail: true,
      }},
    timePlaced: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: 'Post',
  });
  return Post;
};
