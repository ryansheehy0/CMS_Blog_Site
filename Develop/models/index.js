const User = require("./user")
const Post = require("./post")
const Comment = require("./comment")

User.hasOne(Post, {
  foreignKey: 'user_id'
})
Post.belongsTo(User, {
  foreignKey: 'user_id'
})

Post.hasOne(Comment, {
  foreignKey: 'post_id'
})
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

User.hasOne(Comment, {
  foreignKey: 'user_id'
})
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = {User, Post, Comment}