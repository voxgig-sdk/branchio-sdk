-- Typed models for the Branchio SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Url
---@field alias? string
---@field branch_key string
---@field campaign? string
---@field channel? string
---@field data? table
---@field feature? string
---@field id? string
---@field url? string

---@class UrlCreateData
---@field alias? string
---@field branch_key string
---@field campaign? string
---@field channel? string
---@field data? table
---@field feature? string
---@field id? string
---@field url? string

local M = {}

return M
