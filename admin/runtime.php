<?php

namespace BB\Admin;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        global $container;

        new \BB\Admin\RuntimePartials\GlobalSettings;
        new \BB\Admin\RuntimePartials\PageSettings;
        new \BB\Admin\RuntimePartials\Columns;



        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            ['admin_enqueue_scripts', 10000, [$this, "enqueueMediaManager"]],
            ['post_action_block_builder', 10, [$this, 'blockBuilderInit']],
            ['post_action_block_builder_preview', 10, [$this, 'blockBuilderPreviewInit']],
            ['post_action_font_example', 10, [$this, 'blockBuilderFontExample']],
            ['edit_form_after_title', 10, [$this, "blockBuilderPostButton"]],
        ];

        $this->filters = [
            ['use_block_editor_for_post', 10, '__return_false'],
            ['get_edit_post_link', 10, [$this, 'updateEditLink']]
        ];

        parent::__construct();
    }

    public function blockBuilderInit()
    {
        extract([
            'runtime' => $this,
        ]);

        require_once dirname(__FILE__) . '/views/builder.php';

        exit;
    }

    public function blockBuilderPreviewInit()
    {
        extract([
            'runtime' => $this,
        ]);

        require_once dirname(__FILE__) . '/views/builder-preview.php';

        exit;
    }

    public function blockBuilderFontExample()
    {
        extract([
            'runtime' => $this,
        ]);

        require_once dirname(__FILE__) . '/views/font-example.php';

        exit;
    }

    public function blockBuilderPostButton()
    {
        if (in_array(get_post_type(), apply_filters('block_builder_post_types', ['post', 'page', 'product']))) {
            extract([
                'runtime' => $this,
            ]);

            require_once dirname(__FILE__) . '/views/block-builder-post-button.php';
        }
    }

    public function updateEditLink($link)
    {
        if (in_array(get_post_type(), apply_filters('block_builder_post_types', ['post', 'page', 'product']))) {
            return str_replace("action=edit", "action=block_builder", $link);
        }

        return $link;
    }

    public function enqueueMediaManager()
    {
        global $wp_scripts;

        if (defined('BLOCKBUILDER_ACTIVE') && BLOCKBUILDER_ACTIVE === true) {
            $wp_scripts->queue = [];

            wp_enqueue_media();
            wp_enqueue_editor();
        }
    }
}
