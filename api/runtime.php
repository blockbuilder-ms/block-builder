<?php

namespace BB\Api;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public $root = "block-builder/v1";

    public function __construct()
    {
        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            [
                "rest_api_init", 10, [$this, "registerSettingsEndpoints"],
            ],
            [
                "rest_api_init", 11, [$this, "registerSyncronizationEndpoints"]
            ],
            [
                "rest_api_init", 12, [$this, "registerPostEndpoints"]
            ],
            [
                "rest_api_init", 13, [$this, "registerColumnsEndpoints"]
            ],
            [
                "rest_api_init", 13, [$this, "registerPluginEndpoints"]
            ],
            [
                "rest_api_init", 14, [$this, "registerLazyloadEndpoints"]
            ]
        ];

        parent::__construct();
    }

    public function registerSettingsEndpoints()
    {
        register_rest_route($this->root, '/settings/', array(
            'methods' => 'GET',
            'callback' => [new \BB\Api\Controllers\SettingsController, '__invoke'],
        ));
    }

    public function registerSyncronizationEndpoints()
    {
        register_rest_route($this->root, '/sync/(?P<key>.*)', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\SynchronizeController, 'update'],
        ));

        register_rest_route($this->root, '/sync/(?P<key>.*)', array(
            'methods' => 'DELETE',
            'callback' => [new \BB\Api\Controllers\SynchronizeController, 'delete'],
        ));
    }


    public function registerPostEndpoints()
    {
        /**
         * Routes for handling header post endpoints
         */
        register_rest_route($this->root, '/post/header/(?P<key>.*)', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\Post\HeaderController, 'update'],
        ));

        /**
         * Routes for handling content post endpoints
         */
        register_rest_route($this->root, '/post/content/(?P<key>.*)', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\Post\ContentController, 'update'],
        ));

        /**
         * Routes for handling content post endpoints
         */
        register_rest_route($this->root, '/post/content/(?P<key>.*)', array(
            'methods' => 'GET',
            'callback' => [new \BB\Api\Controllers\Post\ContentController, 'single'],
        ));

        /**
         * Routes for handling footer post endpoints
         */
        register_rest_route($this->root, '/post/footer/(?P<key>.*)', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\Post\FooterController, 'update'],
        ));

        /**
         * Routes for handling style post endpoints
         */
        register_rest_route($this->root, '/post/style/(?P<key>.*)', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\Post\StyleController, 'update'],
        ));

        /**
         * Routes for handling post settings endpoints
         */
        register_rest_route($this->root, '/post/(?P<key>.*)/settings', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\Post\SettingsController, 'update'],
        ));

        /**
         * Routes for handling plugins endpoints
         */
        register_rest_route($this->root, '/posts', array(
            'methods' => 'GET',
            'callback' => [new \BB\Api\Controllers\PostsController, '__invoke'],
        ));
    }


    public function registerColumnsEndpoints()
    {
        /**
         * Routes for handling columns endpoints
         */
        register_rest_route($this->root, '/columns/rebuild', array(
            'methods' => 'POST',
            'callback' => [new \BB\Api\Controllers\ColumnsController, 'store'],
        ));
    }

    public function registerLazyloadEndpoints()
    {
        /**
         * Routes for handling plugins endpoints
         */
        register_rest_route($this->root, '/lazyload/(?P<key>.*)', array(
            'methods' => 'GET',
            'callback' => [new \BB\Api\Controllers\LazyloadController, '__invoke'],
        ));
    }

    public function registerPluginEndpoints()
    {
        /**
         * Routes for handling plugins endpoints
         */
        register_rest_route($this->root, '/plugin/(?P<key>.*)', array(
            'methods' => 'PUT',
            'callback' => [new \BB\Api\Controllers\PluginsController, 'activate'],
        ));

        register_rest_route($this->root, '/plugin/(?P<key>.*)', array(
            'methods' => 'DELETE',
            'callback' => [new \BB\Api\Controllers\PluginsController, 'deactivate'],
        ));
    }
}
