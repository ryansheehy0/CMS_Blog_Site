const express = require("express")
const app = express()
const sequelize = require("./connection")
const {engine} = require("express-handlebars")

app.engine('hbs', engine({
  layoutsDir: __dirname + "/views",
  defaultLayout: false
}))
app.set('view engine', 'hbs')

app.get("/", (req, res) => {
  const locals = null // get form db
  res.render("home.hbs")
})

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000)
})