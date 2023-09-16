const User = require("../models/user")

function seedUsers(){
  User.bulkCreate([
    {
      username: "ryansheehy",
      password: ""
    },
    {
      username: "johndoe",
      password: ""
    },
  ])
}

module.exports = seedUsers