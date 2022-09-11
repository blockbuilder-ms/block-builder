<?php

namespace BB\Admin\RuntimePartials;

use BB\Includes\Views\Runtime as ViewRuntime;

class GlobalSettings extends ViewRuntime
{
    public function __construct()
    {
        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            ['bb_builder_render_setting-modal_general_toggle', 10, [$this, 'generalTab']],
            ['bb_builder_render_setting-modal_integrations_toggle', 10, [$this, 'integrationsTab']],
            ['bb_builder_render_setting-modal_debugging_toggle', 10, [$this, 'debuggingTab']],
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

        require BLOCKBUILDER_ADMIN_PATH . '/views/global-settings/general.php';
    }

    public function debuggingTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require BLOCKBUILDER_ADMIN_PATH . '/views/global-settings/debugging.php';
    }

    public function integrationsTab()
    {
        global $container;

        extract([
            'runtime' => $this,
            'container' => $container
        ]);

        require BLOCKBUILDER_ADMIN_PATH . '/views/global-settings/integrations.php';
    }
}
