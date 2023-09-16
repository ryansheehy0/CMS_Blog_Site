const router = require("express").Router()

router.get("/", (req, res) => {
  try{
    req.session.destroy((error) => {
      if(error){
        console.error(error)
        res.sendStatus(500)
      }else{
        res.redirect("/")
      }
    })
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router