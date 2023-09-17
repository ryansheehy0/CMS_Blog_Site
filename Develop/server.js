const express = require("express")
const sequelize = require("./connection")
const exphbs = require("express-handlebars")
const routes = require("./controllers/routes")
const path = require("path")
const session = require("express-session")
const helpers = require("./utils/helpers")
require("dotenv").config()

const app = express()
const hbs = exphbs.create({helpers})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(session({
  secret: process.env.SESSION_PASS,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/", routes)

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000)
})