package voxgigbranchiosdk

import (
	"github.com/voxgig-sdk/branchio-sdk/go/core"
	"github.com/voxgig-sdk/branchio-sdk/go/entity"
	"github.com/voxgig-sdk/branchio-sdk/go/feature"
	_ "github.com/voxgig-sdk/branchio-sdk/go/utility"
)

// Type aliases preserve external API.
type BranchioSDK = core.BranchioSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BranchioEntity = core.BranchioEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BranchioError = core.BranchioError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewUrlEntityFunc = func(client *core.BranchioSDK, entopts map[string]any) core.BranchioEntity {
		return entity.NewUrlEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBranchioSDK = core.NewBranchioSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBranchioSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BranchioSDK  { return NewBranchioSDK(nil) }
func Test() *BranchioSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
