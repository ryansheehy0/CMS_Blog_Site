const router = require("express").Router()
const bcrypt = require("bcrypt")
const { User, Post, Comment } = require("../models/index")

router.get("/", (req, res) => {
  res.render("login", {
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog",
    isLogin: true
  })
})

router.post("/", async (req, res) => {
  try{
    const user = await User.findOne({where: {username: req.body.username}})

    const isPass = await bcrypt.compare(req.body.password, user.password)

    if(isPass){
      req.session.loggedInUser = user.id
      res.redirect("/dashboard")
    }else{
      req.session.loggedInUser = false
      res.render("login", {
        path: "/login",
        pathName: "Login",
        pageName: "The Tech Blog",
        isLogin: false
      })
    }

  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router