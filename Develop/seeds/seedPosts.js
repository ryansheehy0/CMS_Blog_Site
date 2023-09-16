const Posts = require("../models/post")

function seedPosts(){
  Posts.bulkCreate([
    {
      title: "Why MVC is so important",
      content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
      user_id: 1
    },
    {
      title: "Object-Relational Mapping",
      content: "ORMs are used to interact with relational databases using oop.",
      user_id: 1
    },
    {
      title: "Vim",
      content: "Vim is a text editor that allows you to easily navigate, edit, and insert text just from the keyboard. You can use the vim keybindings in VS Code with the Vim extension.",
      user_id: 2
    },
    {
      title: "SHA-3",
      content: "SHA-3 is the new hashing algorithm that replaces SHA-2 hashes. SHA-3 is based off of the Keccak algorithm. This doesn't only have ot be used for hashes, but can generate any length of cryptographically secure pseudo-random numbers.",
      user_id: 2
    }
  ])
}

module.exports = seedPosts