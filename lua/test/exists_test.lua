-- Branchio SDK exists test

local sdk = require("branchio_sdk")

describe("BranchioSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
