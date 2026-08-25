<?php
declare(strict_types=1);

// Branchio SDK configuration

class BranchioConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Branchio",
                "slug" => "branchio",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api2.branch.io/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "url" => [],
                ],
            ],
            "entity" => [
        'url' => [
          'fields' => [
            [
              'name' => 'alias',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'branch_key',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'campaign',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'channel',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'data',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'feature',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'url',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/url',
                  'parts' => [
                    'url',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BranchioFeatures::make_feature($name);
    }
}
