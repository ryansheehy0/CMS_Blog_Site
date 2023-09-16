module.exports = {
  format_date: (time) => {
    const date = new Date(time)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    return `${month}/${day}/${year}`
  }
}