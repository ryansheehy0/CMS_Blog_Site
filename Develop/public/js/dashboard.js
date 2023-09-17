// Get elements
  const newPostBtn = document.querySelector("#newPostBtn")
  const createNewPost = document.querySelector("#createNewPost")
    const cancelCreateNewPost = createNewPost.querySelector(`[data-name="cancelButton"]`)
  const postContainer = document.querySelector("#postContainer")
  const editPost = document.querySelector("#editPost")
    const cancelEditPost = editPost.querySelector(`[data-name="cancelButton"]`)
    const editPostTitle = editPost.querySelector(`[name="title"]`)
    const editPostContent = editPost.querySelector(`[name="content"]`)
    const updatePost = editPost.querySelector(`[data-name="updatePost"]`)
    const deletePost = editPost.querySelector(`[data-name="deletePost"]`)
    const editPostForm = editPost.querySelector(`form`)

// Get all posts
  let posts = []
  for(let i=0; i < postContainer.children.length; i++){
    const post = postContainer.children[i]
    posts.push(post)
  }

// Helper Functions
  function hideBg(){
    newPostBtn.classList.add("hidden")
    postContainer.classList.add("hidden")
  }
  function showBg(){
    newPostBtn.classList.remove("hidden")
    postContainer.classList.remove("hidden")
  }

  function hideCreateNewPost(){createNewPost.classList.add("hidden")}
  function showCreateNewPost(){createNewPost.classList.remove("hidden")}

  function hideEditPost(){editPost.classList.add("hidden")}
  function showEditPost(){editPost.classList.remove("hidden")}

// New Post Button
  newPostBtn.addEventListener("click", () => {
    showCreateNewPost()
    hideBg()
  })

// Posts
  posts.forEach((post) => {
    post.addEventListener("click", () => {
      editPost.dataset.postid = post.id
      // get and set title
      const title = post.querySelector(`[data-name="title"]`).textContent
      editPost.querySelector(`[name="title"]`).value = title
      // get and set content
      const content = post.dataset.content
      editPost.querySelector(`[name="content"]`).value = content

      showEditPost()
      hideBg()
    })
  })

// Cancel createNewPost
  cancelCreateNewPost.addEventListener("click", (event) => {
    event.preventDefault()
    hideCreateNewPost()
    showBg()
  })

// Cancel editPost
  cancelEditPost.addEventListener("click", (event) => {
    event.preventDefault()
    hideEditPost()
    showBg()
  })

// Update Post
  updatePost.addEventListener("click", (event) => {
    event.preventDefault()
    const postId = editPost.dataset.postid
    const title = editPostTitle.value
    const content = editPostContent.value
    fetch(window.location.origin + "/post/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postId,
        title,
        content
      })
    })
    .then(() => window.location.href = "/dashboard")
    .catch((error) => console.error(error))
  })

// Delete Post
  deletePost.addEventListener("click", (event) => {
    event.preventDefault()
    const postId = editPost.dataset.postid
    fetch(window.location.origin + "/post/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postId
      })
    })
    .then(() => window.location.href = "/dashboard")
    .catch((error) => console.error(error))
  })