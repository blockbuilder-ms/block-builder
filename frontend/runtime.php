<?php

namespace BB\Frontend;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        new \BB\Admin\RuntimePartials\Columns;

        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            ['init', 10, [$this, 'maybeHideAdminbar']],
            ['wp_enqueue_scripts', 10, [$this, 'enqueueStyles']],
            ['wp_enqueue_scripts', 10, [$this, 'enqueueScripts']]
        ];

        $this->filters = [
            ['the_content', 1, [$this, 'maybeParseAsBuildingHtml']],
            ['the_content', 50, [$this, 'maybeAddHeader']],
            ['the_content', 60, [$this, 'maybeAddFooter']],
        ];

        parent::__construct();
    }

    public function maybeHideAdminbar()
    {
        if (is_admin()) {
            return;
        }

        if (wp_get_current_user()->ID === 0 || false === current_user_can('manage_options')) {
            return;
        }

        if (isset($_GET['view']) && 'builder' === $_GET['view']) {
            add_filter('show_admin_bar', '__return_false');
        }
    }

    public function maybeAddHeader($content)
    {
        global $container;
        return $container->header->generate(get_the_ID()) . $content;
    }

    public function maybeAddFooter($content)
    {
        global $container;
        return $content . $container->footer->generate(get_the_ID());
    }

    public function maybeParseAsBuildingHtml($content)
    {
        global $container;
        if (is_admin()) {
            return $content;
        }

        if (wp_get_current_user()->ID === 0 || false === current_user_can('manage_options')) {
            return $content;
        }

        if (!isset($_GET['view']) || 'builder' !== $_GET['view']) {
            return $content;
        }

        $style = [];

        if ($container->settings->container_width && !$container->settings->full_width_container) {
            //
            $style[] = "width:100%;max-width:" . $container->settings->container_width . 'px;';
        } else if ($container->settings->full_width_container) {
            $style[] = "width:100%;max-width:100%;";
        }

        $id = \get_the_ID();
        return '<div class="container w-full flex justify-center"><div' . (isset($style) ? ' style="' . implode('', $style) . '"' : '')  . ' class="container-wrap">' . $container->post->generate($id) . '</div></div>';
    }

    public function enqueueScripts()
    {
        wp_enqueue_style('block-editor-builder', BLOCKBUILDER_FRONTEND_URI . '/style/builder.css', [], BLOCKBUILDER_VERSION);
        wp_enqueue_style('block-editor-grid', BLOCKBUILDER_FRONTEND_URI . '/style/grid.css', [], BLOCKBUILDER_VERSION);
        wp_enqueue_style('block-editor-astra', BLOCKBUILDER_FRONTEND_URI . '/style/astra.css', [], BLOCKBUILDER_VERSION);
        wp_dequeue_style('astra-theme-css');
    }

    public function enqueueStyles()
    {
        $dir = wp_upload_dir();

        $path = $dir["basedir"] . "/block-builder/" . get_the_ID() . "/style.css";
        $uri = $dir["baseurl"] . "/block-builder/" . get_the_ID() . "/style.css";
        if (file_exists($path)) {
            wp_enqueue_style('page-styles', $uri, [], BLOCKBUILDER_VERSION, false);
        }
    }
}
