<?php
declare(strict_types=1);

// Typed models for the Branchio SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Url entity data model. */
class Url
{
    public ?string $alias = null;
    public string $branch_key;
    public ?string $campaign = null;
    public ?string $channel = null;
    public ?array $data = null;
    public ?string $feature = null;
    public ?string $id = null;
    public ?string $url = null;
}

/** Request payload for Url#create. */
class UrlCreateData
{
    public ?string $alias = null;
    public string $branch_key;
    public ?string $campaign = null;
    public ?string $channel = null;
    public ?array $data = null;
    public ?string $feature = null;
    public ?string $id = null;
    public ?string $url = null;
}

