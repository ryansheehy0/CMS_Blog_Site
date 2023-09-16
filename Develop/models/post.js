const { Model, DataTypes } = require("sequelize")
const sequelize = require("../connection")

class Post extends Model{}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modal: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: `post`
  }
)

module.exports = Post