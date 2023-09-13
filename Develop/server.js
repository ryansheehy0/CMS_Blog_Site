const express = require("express")
const app = express()
const sequelize = require("./connection")
const exphbs = require("express-handlebars")
const hbs = exphbs.create({})
const routes = require("./controllers/routes")

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000)
})