<?php

namespace BB\Admin\RuntimePartials;

use BB\Includes\Views\Runtime as ViewRuntime;

class PageSettings extends ViewRuntime
{
    public function __construct()
    {
        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            ['bb_builder_render_general_toggle', 10, [$this, 'generalTab']],
            ['bb_builder_render_layout_toggle', 10, [$this, 'layoutTab']],
            ['bb_builder_render_custom-fields_toggle', 10, [$this, 'customFieldsTab']],
            ['bb_builder_render_performance_toggle', 10, [$this, 'performanceTab']],
            ['bb_builder_render_debugging_toggle', 10, [$this, 'debugTab']],
        ];

        parent::__construct();
    }

    public function generalTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require_once BLOCKBUILDER_ADMIN_PATH . '/views/page-settings/general.php';
    }

    public function layoutTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require_once BLOCKBUILDER_ADMIN_PATH . '/views/page-settings/layout.php';
    }

    public function customFieldsTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require_once BLOCKBUILDER_ADMIN_PATH . '/views/page-settings/custom-fields.php';
    }

    public function performanceTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require_once BLOCKBUILDER_ADMIN_PATH . '/views/page-settings/performance.php';
    }

    public function seoTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require_once BLOCKBUILDER_ADMIN_PATH . '/views/page-settings/seo.php';
    }

    public function debugTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require_once BLOCKBUILDER_ADMIN_PATH . '/views/page-settings/debugging.php';
    }
}
