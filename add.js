function add (a, b) {
  return a + b
}

function addAsync (a, b) {
  return Promise.resolve(a + b)
}

module.exports = {
  add,
  addAsync
}
