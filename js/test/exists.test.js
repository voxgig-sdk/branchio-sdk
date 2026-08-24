
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { BranchioSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BranchioSDK.test()
    equal(null !== testsdk, true)
  })

})
