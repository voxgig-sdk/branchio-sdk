package core

type BranchioError struct {
	IsBranchioError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBranchioError(code string, msg string, ctx *Context) *BranchioError {
	return &BranchioError{
		IsBranchioError: true,
		Sdk:              "Branchio",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BranchioError) Error() string {
	return e.Msg
}
