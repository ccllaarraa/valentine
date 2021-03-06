<?php
/**
 * Database Configuration
 *
 * All of your system's database connection settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/DbConfig.php.
 *
 * @see craft\config\DbConfig
 */

return [
    'dsn' => getenv('DB_DSN'),
    'user' => getenv('DB_USER'),
    'driver' => getenv('DB_DRIVER'),
    'server' => getenv('DB_HOST'),
    'password' => getenv('DB_PASSWORD'),
    'database' => getenv('DB_NAME'),
    'schema' => getenv('DB_SCHEMA'),
    'tablePrefix' => getenv('DB_TABLE_PREFIX'),
    'port' => getenv('DB_PORT')
];
