<?php

/**
 * Plugin Name: Block Builder
 * Plugin URI: N/A
 * Description: Block Builder
 * Version: 0.1
 * Author: Mike Sørensen
 * Author URI: N/A
 **/

/**
 * No direct access 
 */
if (!defined('ABSPATH')) {
    exit;
}

if (!defined('BLOCKBUILDER_VERSION')) {
    define('BLOCKBUILDER_VERSION', '0.0.1');
}

if (!defined('BLOCKBUILDER_PATH')) {
    define('BLOCKBUILDER_PATH', dirname(__FILE__));
}

if (!defined('BLOCKBUILDER_INC_PATH')) {
    define('BLOCKBUILDER_INC_PATH', dirname(__FILE__) . '\\includes');
}

if (!defined('BLOCKBUILDER_ADMIN_PATH')) {
    define('BLOCKBUILDER_ADMIN_PATH', dirname(__FILE__) . '\\admin');
}

if (!defined('BLOCKBUILDER_PLUGIN_PATH')) {
    define('BLOCKBUILDER_PLUGIN_PATH', dirname(__FILE__) . '\\plugins');
}

if (!defined('BLOCKBUILDER_URI')) {
    define('BLOCKBUILDER_URI', plugin_dir_url(__FILE__));
}

if (!defined('BLOCKBUILDER_ADMIN_URI')) {
    define('BLOCKBUILDER_ADMIN_URI', plugin_dir_url(__FILE__) . 'admin');
}

if (!defined('BLOCKBUILDER_FRONTEND_URI')) {
    define('BLOCKBUILDER_FRONTEND_URI', plugin_dir_url(__FILE__) . 'frontend');
}

if (!defined('BLOCKBUILDER_PLUGINS_URI')) {
    define('BLOCKBUILDER_PLUGINS_URI', plugin_dir_url(__FILE__) . 'plugins');
}

if (isset($_GET['action']) && $_GET['action'] === "block_builder" && isset($_GET['post'])) {
    define("BLOCKBUILDER_ACTIVE", true);
}

/**
 * Debugging ugliness, remove later.
 * @todo remove
 */
function print_filters_for($hook = '')
{
    global $wp_filter;
    if (empty($hook) || !isset($wp_filter[$hook]))
        return;

    print '<pre>';
    print_r($wp_filter[$hook]);
    print '</pre>';
}
/** End */

require_once(BLOCKBUILDER_PATH . '\\autoload.php');

/**
 * Ensure the container can be found.
 */
if (class_exists(\BB\Includes\Container::class)) {
    global $container;
    $container = new \BB\Includes\Container();

    /**
     * apply extensions
     */
    $container->extend('settings', \BB\Includes\Container\Settings::class);
    $container->extend('script', \BB\Includes\Container\Script::class);
    $container->extend('style', \BB\Includes\Container\Style::class);
    $container->extend('user', \BB\Includes\Container\User::class);
    $container->extend('view', \BB\Includes\Container\View::class);
    $container->extend('translate', \BB\Includes\Container\Translate::class);
    $container->extend('post', \BB\Includes\Container\Post::class);
    $container->extend('header', \BB\Includes\Container\Header::class);
    $container->extend('footer', \BB\Includes\Container\Footer::class);
    $container->extend('plugin', \BB\Includes\Container\Plugin::class);
    $container->extend('builder', \BB\Includes\Container\Builder::class);


    $container->translate->loadDomain('bb-builder', BLOCKBUILDER_PATH . '\\languages');

    /**
     * Load in post types
     */
    $container->header->register();
    $container->footer->register();

    require_once(BLOCKBUILDER_PATH . '\\activate.php');
    require_once(BLOCKBUILDER_PATH . '\\deactivate.php');

    function activate()
    {
        (new \BB\Activate)->load();
    }

    function deactivate()
    {
        (new \BB\Deactivate)->load();
    }

    register_activation_hook(__FILE__, 'activate');
    register_deactivation_hook(__FILE__, 'deactivate');


    if ($container->view->isApi()) {
        /**
         * Load in rest api
         */
        new \BB\Api\Runtime;
    }

    if ($container->view->isAdmin() || $container->view->isApi()) {
        /**
         * Only admin facing elements 
         */
        new \BB\Admin\Runtime;
    }

    if ($container->view->isPublic() || $container->view->isApi()) {
        /**
         * Only public facing elements
         */
        new \BB\Frontend\Runtime;
    }
}
