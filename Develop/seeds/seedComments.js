const Comments = require("../models/comment")

function seedComments(){
  Comments.bulkCreate([
    {
      comment: "I really love MVC.",
      user_id: 2,
      post_id: 1,
    },
    {
      comment: "This is another comment.",
      user_id: 2,
      post_id: 1
    },
    {
      comment: "I use the amVim extension in vs code.",
      user_id: 1,
      post_id: 3
    },
    {
      comment: "SHA-3 would be good for a password manager.",
      user_id: 1,
      post_id: 4
    }
  ])
}

module.exports = seedComments