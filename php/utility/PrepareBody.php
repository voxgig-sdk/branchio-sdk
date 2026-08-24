<?php
declare(strict_types=1);

// Branchio SDK utility: prepare_body

class BranchioPrepareBody
{
    public static function call(BranchioContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
