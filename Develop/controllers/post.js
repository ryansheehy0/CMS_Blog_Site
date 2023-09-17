const router = require("express").Router()
const isAuth = require("../utils/auth")
const { User, Post, Comment } = require("../models/index")

router.put("/update", isAuth, async (req, res) => {
  try{
    const postId = req.body.postId
    const title = req.body.title
    const content = req.body.content
    const user_id = req.session.loggedInUser
    await Post.update(
      {
        title,
        content,
        user_id
      },
      {
        where: {
          id: postId
        }
      }
    )
    res.sendStatus(200)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

router.delete("/delete", isAuth, async (req, res) => {
  try{
    const postId = req.body.postId
    await Post.destroy({
      where: {
        id: postId
      }
    })
    res.sendStatus(200)
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

router.post("/new", isAuth, async (req, res) => {
  try{
    const title = req.body.title
    const content = req.body.content
    const user_id = req.session.loggedInUser
    await Post.create({
      title,
      content,
      user_id
    })
    res.redirect("/dashboard")
  }catch(error){
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router