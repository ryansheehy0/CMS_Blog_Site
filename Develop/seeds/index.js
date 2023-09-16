const seedUsers = require("./seedPosts")
const seedPosts = require("./seedUsers")

async function seedAll(){
  await seedUsers()
  await seedPosts()
}

seedAll()