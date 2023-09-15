// Get elements
  const newPostBtn = document.querySelector("#newPostBtn")
  const createNewPost = document.querySelector("#createNewPost")
    const cancelCreateNewPost = createNewPost.querySelector(`[data-name="cancelButton"]`)
  const postContainer = document.querySelector("#postContainer")
  const editPost = document.querySelector("#editPost")
    const cancelEditPost = editPost.querySelector(`[data-name="cancelButton"]`)
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
    editPostForm.setAttribute("action", "/updatepost")
    editPostForm.setAttribute("method", "put")
  })

// Delete Post
  deletePost.addEventListener("click", (event) => {
    editPostForm.setAttribute("action", "/deletepost")
    editPostForm.setAttribute("method", "delete")
  })