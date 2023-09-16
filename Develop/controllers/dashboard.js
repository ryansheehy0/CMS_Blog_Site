const router = require("express").Router()
const isAuth = require("../utils/auth")
const { User, Post, Comment } = require("../models/index")

router.get("/", isAuth, async (req, res) => {
  let posts = await Post.findAll({include: [{model: User, where: {id: req.session.loggedInUser}}]})

  posts = posts.map(post => post.get({plain: true}))

  res.render("dashboard", {
    path: "/logout",
    pathName: "Logout",
    pageName: "Your Dashboard",
    posts: posts
  })
})

module.exports = router