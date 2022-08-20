const sqrt = require('./challenge')
const assert = require('assert')

describe('Tests', function () {
  it('sqrt_of_25', function () {
    assert(sqrt(25) === 5)
  })

  it('sqrt_of_81', function () {
    assert(sqrt(81) === 9)
  })

  it('sqrt_of_225', function () {
    assert(sqrt(225) === 15)
  })

  it('sqrt_of_841', function () {
    assert(sqrt(841) === 29)
  })

  it('sqrt_of_1024', function () {
    assert(sqrt(1024) === 32)
  })

  it('sqrt_of_7056', function () {
    assert(sqrt(7056) === 84)
  })
})
