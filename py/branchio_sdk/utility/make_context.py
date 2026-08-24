# Branchio SDK utility: make_context

from branchio_sdk.core.context import BranchioContext


def make_context_util(ctxmap, basectx):
    return BranchioContext(ctxmap, basectx)
