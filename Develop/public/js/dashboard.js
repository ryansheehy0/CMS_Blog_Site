// When new post is clicked it shows create new post
// If new post is clicked
  // Show Create New Post box
  // Hide background
  // If click outside of Create New Post
    // Hide Create New Post
    // Show Background

// Get elements
const newPostBtn = document.querySelector("#newPostBtn")
const createNewPostBox = document.querySelector("#createNewPostBox")
const postContainer = document.querySelector("#postContainer")

newPostBtn.addEventListener("click", () => {
  createNewPostBox.classList.toggle("hidden")
  newPostBtn.classList.add("hidden")
  postContainer.classList.add("hidden")
})

document.addEventListener("click", (event) => {
  if(event.target === newPostBtn) return
  if(event.target === postContainer) return
  if(event.target === createNewPostBox || createNewPostBox.contains(event.target)) return

  createNewPostBox.classList.add("hidden")
  newPostBtn.classList.remove("hidden")
  postContainer.classList.remove("hidden")
})