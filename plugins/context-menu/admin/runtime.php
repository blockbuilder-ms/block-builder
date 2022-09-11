<?php

namespace BB\Plugins\ContextMenu\Admin;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        global $container;
        // Registering our modular application extension

        add_action("bb_builder_after_inject_style", function () {
            $path = BLOCKBUILDER_PLUGINS_URI . '/context-menu/admin/js/dist/app.js';
            echo '<script type="text/javascript" src="' . $path . '"></script>';
        });

        parent::__construct();
    }
}
