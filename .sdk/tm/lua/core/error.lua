-- Branchio SDK error

local BranchioError = {}
BranchioError.__index = BranchioError


function BranchioError.new(code, msg, ctx)
  local self = setmetatable({}, BranchioError)
  self.is_sdk_error = true
  self.sdk = "Branchio"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BranchioError:error()
  return self.msg
end


function BranchioError:__tostring()
  return self.msg
end


return BranchioError
