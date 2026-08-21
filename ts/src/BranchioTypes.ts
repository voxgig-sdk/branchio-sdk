// Typed models for the Branchio SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Url {
  alias?: string
  branch_key: string
  campaign?: string
  channel?: string
  data?: Record<string, any>
  feature?: string
  id?: string
  url?: string
}

export interface UrlCreateData {
  alias?: string
  branch_key: string
  campaign?: string
  channel?: string
  data?: Record<string, any>
  feature?: string
  id?: string
  url?: string
}

