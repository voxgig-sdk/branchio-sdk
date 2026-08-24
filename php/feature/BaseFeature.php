<?php
declare(strict_types=1);

// Branchio SDK base feature

class BranchioBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BranchioContext $ctx, array $options): void {}
    public function PostConstruct(BranchioContext $ctx): void {}
    public function PostConstructEntity(BranchioContext $ctx): void {}
    public function SetData(BranchioContext $ctx): void {}
    public function GetData(BranchioContext $ctx): void {}
    public function GetMatch(BranchioContext $ctx): void {}
    public function SetMatch(BranchioContext $ctx): void {}
    public function PrePoint(BranchioContext $ctx): void {}
    public function PreSpec(BranchioContext $ctx): void {}
    public function PreRequest(BranchioContext $ctx): void {}
    public function PreResponse(BranchioContext $ctx): void {}
    public function PreResult(BranchioContext $ctx): void {}
    public function PreDone(BranchioContext $ctx): void {}
    public function PreUnexpected(BranchioContext $ctx): void {}
}
