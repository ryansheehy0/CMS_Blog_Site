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
      comment: "",
      user_id: 2,
      post_id: 
    },
    {
      comment: "SHA-3 is the new hashing algorithm that replaces SHA-2 hashes. SHA-3 is based off of the Keccak algorithm. This doesn't only have ot be used for hashes, but can generate any length of cryptographically secure pseudo-random numbers.",
      user_id: 2,
      post_id: 
    }
  ])
}

module.exports = seedComments