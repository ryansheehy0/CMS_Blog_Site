const router = require("express").Router()
const login = require("./login")
const dashboard = require("./dashboard")
const logout = require("./logout")
const signup = require("./signup")
const { User, Post, Comment } = require("../models/index")

router.use("/login", login)
router.use("/dashboard", dashboard)
router.use("/logout", logout)
router.use("/signup", signup)

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


module.exports = router