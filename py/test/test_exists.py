# Branchio SDK exists test

import pytest
from branchio_sdk import BranchioSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BranchioSDK.test(None, None)
        assert testsdk is not None
