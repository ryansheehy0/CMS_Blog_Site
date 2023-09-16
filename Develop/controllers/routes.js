const router = require("express").Router()
const login = require("./login")
const dashboard = require("./dashboard")
const logout = require("./logout")
const { User, Post, Comment } = require("../models/index")

router.use("/login", login)
router.use("/dashboard", dashboard)
router.use("/logout", logout)

router.get("/", async (req, res) => {
  try{
    let posts = await Post.findAll({
      include: [
        {model: User}
      ]
    })
    posts = posts.map(post => post.get({plain: true}))
    res.render("home",{
      path: req.session.loggedInUser ? "/logout" : "/login",
      pathName: req.session.loggedInUser ? "Logout" : "Login",
      pageName: "The Tech Blog",
      posts: posts
    })
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

router.get("/signup", (req, res) => {
  res.render("signup", {
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog"
  })
})

router.post("/signup", (req, res) => {
  console.log(req.body.username)
  console.log(req.body.password)
  res.render("signup", {
    path: "/login",
    pathName: "Login",
    pageName: "Th Tech Blog"
  })
})

module.exports = router