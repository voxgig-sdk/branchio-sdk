<?php
declare(strict_types=1);

// Branchio SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BranchioMakeContext
{
    public static function call(array $ctxmap, ?BranchioContext $basectx): BranchioContext
    {
        return new BranchioContext($ctxmap, $basectx);
    }
}
