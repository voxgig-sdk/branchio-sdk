package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewUrlEntityFunc func(client *BranchioSDK, entopts map[string]any) BranchioEntity

