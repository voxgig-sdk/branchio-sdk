<?php
declare(strict_types=1);

// Branchio SDK utility: result_body

class BranchioResultBody
{
    public static function call(BranchioContext $ctx): ?BranchioResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
