<?php
declare(strict_types=1);

// Branchio SDK utility: result_headers

class BranchioResultHeaders
{
    public static function call(BranchioContext $ctx): ?BranchioResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
