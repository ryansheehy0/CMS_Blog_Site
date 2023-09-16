const isAuth = (req, res, next) => {
  if(!req.session.loggedInUser){
    res.redirect("/login")
  }else{
    next()
  }
}

module.exports = isAuth