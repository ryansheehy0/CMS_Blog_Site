const router = require("express").Router()
const { User, Post, Comment } = require("../models/index")

router.get("/:postId", async (req, res) => {
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

  console.log(comments)

  res.render("comments", {
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog",
    post: post,
    comments: comments
  })
})

/*
router.get("/", (req, res) => {
  res.render("comments", {
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog"
  })
})
*/

// Todo
router.post("/", (req, res) => {
  res.render("comments", {
    path: "/login",
    pathName: "Login",
    pageName: "The Tech Blog"
  })
})


module.exports = router