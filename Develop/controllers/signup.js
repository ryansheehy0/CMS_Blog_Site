const router = require("express").Router()
const bcrypt = require("bcrypt")
const { User, Post, Comment } = require("../models/index")

router.get("/", (req, res) => {
  res.render("signup", {
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog",
    showUsernameTaken: false
  })
})

router.post("/", async (req, res) => {
  try{
    const isUsernameTaken = await User.findOne({where: {username: req.body.username}})
    if(isUsernameTaken){
      res.render("signup", {
        path: "/login",
        pathName: "Login",
        pageName: "The Tech Blog",
        showUsernameTaken: true
      })
      return
    }

    const saltRounds = 12
    const hashedPass = await bcrypt.hash(req.body.password, saltRounds)

    await User.create({
      username: req.body.username,
      password: hashedPass
    })

    res.redirect("/login")
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router