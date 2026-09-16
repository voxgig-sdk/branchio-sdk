# Branchio SDK feature factory

from branchio_sdk.feature.base_feature import BranchioBaseFeature
from branchio_sdk.feature.debug_feature import BranchioDebugFeature
from branchio_sdk.feature.idempotency_feature import BranchioIdempotencyFeature
from branchio_sdk.feature.metrics_feature import BranchioMetricsFeature
from branchio_sdk.feature.paging_feature import BranchioPagingFeature
from branchio_sdk.feature.ratelimit_feature import BranchioRatelimitFeature
from branchio_sdk.feature.retry_feature import BranchioRetryFeature
from branchio_sdk.feature.test_feature import BranchioTestFeature
from branchio_sdk.feature.timeout_feature import BranchioTimeoutFeature


_FEATURES = {
    "base": lambda: BranchioBaseFeature(),
    "debug": lambda: BranchioDebugFeature(),
    "idempotency": lambda: BranchioIdempotencyFeature(),
    "metrics": lambda: BranchioMetricsFeature(),
    "paging": lambda: BranchioPagingFeature(),
    "ratelimit": lambda: BranchioRatelimitFeature(),
    "retry": lambda: BranchioRetryFeature(),
    "test": lambda: BranchioTestFeature(),
    "timeout": lambda: BranchioTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
