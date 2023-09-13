const router = require("express").Router()

router.get("/", (req, res) => {
  res.render("home",{
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog"
  })
})

router.get("/login", (req, res) => {
  res.render("login", {
    path: "/login",
    pathName: "Login",
    pageName: "Th Tech Blog"
  })
})

router.post("/login", (req, res) => {
  console.log(req.body.username)
  console.log(req.body.password)
  res.render("login", {
    path: "/login",
    pathName: "Login",
    pageName: "Th Tech Blog"
  })
})

router.get("/signup", (req, res) => {
  res.render("signup", {
    path: "/login",
    pathName: "Login",
    pageName: "Th Tech Blog"
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

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    path: "/login",
    pathName: "Login",
    pageName: "Your Dashboard"
  })

})

module.exports = router