const { Model, DataTypes } = require("sequelize")
const sequelize = require("../connection")

class Comment extends Model{}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modal: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        modal: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: `comment`
  }
)

module.exports = Comment