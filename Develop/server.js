const express = require("express")
const app = express()
const sequelize = require("./connection")
const exphbs = require("express-handlebars")
const hbs = exphbs.create({})
const routes = require("./controllers/routes")
const path = require("path")

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/", routes)

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000)
})