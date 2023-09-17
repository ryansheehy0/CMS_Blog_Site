const router = require("express").Router()
const isAuth = require("../utils/auth")
const { User, Post, Comment } = require("../models/index")

router.get("/:postId", isAuth, async (req, res) => {
  const postId = req.params.postId
  console.log(`postId: ${postId}`)

  let post = await Post.findOne({
    include: {
      model: User
    },
    where: {id: postId}
  })
  post = post.get({plain: true})

  let comments = await Comment.findAll({
    include: [
      {model: Post},
      {model: User},
    ],
    where: {
      post_id: postId
    }
  })
  comments = comments.map(comment => comment.get({plain: true}))

  res.render("comments", {
    path: "/logout",
    pathName: "Logout",
    pageName: "The Tech Blog",
    post: post,
    comments: comments
  })
})

router.post("/", isAuth, async (req, res) => {
  const post_id = req.body.postId
  const comment = req.body.comment

  await Comment.create({
    comment,
    user_id: req.session.loggedInUser,
    post_id
  })

  res.redirect(`/comments/${post_id}`)
})


module.exports = router