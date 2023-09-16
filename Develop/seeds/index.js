const seedUsers = require("./seedUsers")
const seedPosts = require("./seedPosts")
const seedComments = require("./seedComments")

async function seedAll(){
  await seedUsers()
  await seedPosts()
  await seedComments()
}

seedAll()