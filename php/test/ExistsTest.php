<?php
declare(strict_types=1);

// Branchio SDK exists test

require_once __DIR__ . '/../branchio_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = BranchioSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
