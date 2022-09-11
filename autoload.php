<?php

/**
 * Autoloading for the theme
 */
spl_autoload_register(function ($class) {
    $base_dir = dirname(__FILE__) . '/';
    $prefix = 'BB\\';

    // does the class use the namespace prefix?
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        // no, move to the next registered autoloader
        return;
    }

    // get the relative class name
    $relative_class = ltrim(substr($class, $len), '\\');
    $split = explode("\\", $relative_class);
    $i = 0;

    $formatted = implode('\\', array_map(function ($entry) use (&$i, $split) {
        $i++;
        $pieces = preg_split('/(?=[A-Z])/', $entry);
        if ($pieces[0] === '') {
            array_shift($pieces);
        }

        if (1 === count($pieces)) {
            return strtolower($entry);
        } else {
            return strtolower(implode('-', $pieces));
        }
    }, $split));

    // replace the namespace prefix with the base directory, replace namespace
    // separators with directory separators in the relative class name, append
    // with .php
    $file = $base_dir  . str_replace('\\', '/', $formatted) . '.php';

    // if the file exists, require it
    if (file_exists($file)) {
        require_once $file;
    }
});
