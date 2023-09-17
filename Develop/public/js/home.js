// Get elements
const posts = document.querySelectorAll(`[data-name="post"]`)

posts.forEach(post => {
  post.addEventListener("click", () => {
    const postId = post.dataset.postid
    window.location.href = `/comments/${postId}`
  })
})