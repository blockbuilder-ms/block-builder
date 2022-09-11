<?php

namespace BB\Includes\Container;

/**
 * Controls plugin bindings with the container
 */
final class Script
{
    /**
     * Holds the registered plugins
     * 
     * @var array
     */
    private $scripts = [];

    /**
     * Returns array of all registered plugins
     * 
     * @return array
     */
    public function register($name, $url, $deps = [], $version = null, $footer = false, $admin = false)
    {
        $this->scripts[$name] = [
            'name' => $name,
            'url' => $url,
            'deps' => $deps,
            'version' => $version,
            'in_footer' => $footer,
            'admin' => $admin
        ];

        return true;
    }

    /**
     * Registers all scripts
     */
    public function registerScripts()
    {
        do_action('bb_before_register_scripts', $this->scripts);

        foreach ($this->scripts as $name => $script) {
            if (is_admin() && $script['admin']) {
                wp_register_script($name, $script['url'], $script['deps'], $script['version'], $script['in_footer']);
            } else if (!is_admin() && !$script['admin']) {
                wp_register_script($name, $script['url'], $script['deps'], $script['version'], $script['in_footer']);
            }
        }

        do_action('bb_after_register_scripts', $this->scripts);

        return true;
    }

    public function enqueueScripts()
    {
        if (is_admin()) {
            add_action('admin_enqueue_scripts', [$this, 'onEnqueue'], 10);
        } else {
            add_action('wp_enqueue_scripts', [$this, 'onEnqueue'], 10);
        }
    }

    public function onEnqueue()
    {
        foreach ($this->scripts as $name => $script) {
            if (is_admin() && $script['admin']) {
                wp_enqueue_script($name);
            } else if (!is_admin() && !$script['admin']) {
                wp_enqueue_script($name);
            }
        }
    }

    public function __construct()
    {
        add_action('init', [$this, 'registerScripts'], 1);
        add_action('init', [$this, 'enqueueScripts'], 1);
    }
}
