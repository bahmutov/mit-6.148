/* global describe, it */
const {add, addAsync} = require('./add')
// assert is built-in Node module
const assert = require('assert')
// same as
// const add = require('./add').add
// const addAsync = require('./add').addAsync
describe('add', () => {
  it('adds two numbers', () => {
    assert(add(2, 3) === 5)
  })
})

describe('addAsync', () => {
  it('adds two numbers asynchronously', () => {
    return addAsync(2, 3)
      .then(sum => assert(add(2, 3) === 5))
  })
})
