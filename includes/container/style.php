<?php

namespace BB\Includes\Container;

/**
 * Controls plugin bindings with the container
 */
final class Style
{
    /**
     * Holds the registered plugins
     * 
     * @var array
     */
    private $styles = [];

    /**
     * Returns array of all registered plugins
     * 
     * @return array
     */
    public function register($name, $url, $deps = [], $version = null, $footer = false, $admin = false)
    {
        $this->styles[$name] = [
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
     * Registers all styles
     */
    public function registerStyles()
    {
        do_action('bb_before_register_styles', $this->styles);

        foreach ($this->styles as $name => $script) {
            if (is_admin() && $script['admin']) {
                wp_register_script($name, $script['url'], $script['deps'], $script['version'], $script['in_footer']);
            } else if (!is_admin() && !$script['admin']) {
                wp_register_script($name, $script['url'], $script['deps'], $script['version'], $script['in_footer']);
            }
        }

        do_action('bb_after_register_styles', $this->styles);

        return true;
    }

    public function enqueueStyles()
    {
        if (is_admin()) {
            add_action('admin_enqueue_scripts', [$this, 'onEnqueue'], 10);
        } else {
            add_action('wp_enqueue_scripts', [$this, 'onEnqueue'], 10);
        }
    }

    public function onEnqueue()
    {
        foreach ($this->styles as $name => $style) {
            if (is_admin() && $style['admin']) {
                wp_enqueue_script($name);
            } else if (!is_admin() && !$style['admin']) {
                wp_enqueue_script($name);
            }
        }
    }

    public function build($postId, $name, $data)
    {
        $content = "";
        $dir = wp_upload_dir();
        $base = $dir["basedir"] . '/block-builder/';
        $filename = $name . '.css';

        if (!file_exists($base)) {
            mkdir($base, 0777, true);
        }

        if (!file_exists($base . $postId)) {
            mkdir($base . $postId, 0777, true);
        }

        foreach ($data as $k => $segment) {
            $content .= $segment;
        }

        return file_put_contents($base . $postId . '/' . $filename, $content);
    }

    public function __construct()
    {
        add_action('init', [$this, 'registerStyles'], 1);
        add_action('init', [$this, 'enqueueStyles'], 1);
    }
}
