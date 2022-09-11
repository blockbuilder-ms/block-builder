<?php

namespace BB\Plugins\Typography\Admin;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        global $container;

        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            ['bb-builder-integrations-html', 10, [$this, 'googleApiKey']],
            ['bb_builder_render_setting-modal_theme_toggle', 10, [$this, 'themeTypographySetup']],
        ];

        $this->filters = [
            ['bb_partial_typography', 10, [$this, "registerPartialSpace"], 2],
        ];

        add_action("bb_builder_after_inject_style", function () {
            $path = BLOCKBUILDER_PLUGINS_URI . '/typography/admin/js/dist/app.js';
            echo '<script type="text/javascript" src="' . $path . '"></script>';
        });

        parent::__construct();
    }

    public function registerPartialSpace($name, $extract)
    {
        $path = BLOCKBUILDER_PLUGIN_PATH . '\\typography\\admin\\partials\\' . implode('\\', explode('.', $name)) . '.php';
        if (!file_exists($path)) {
            return '<p>Partial not found: ' . $name . '</p>';
        }

        extract($extract);

        ob_start();
        require $path;
        $content = str_replace(array("\r", "\n"), '', ob_get_contents());
        ob_end_clean();

        return $content;
    }

    public function themeTypographySetup()
    {
        extract([
            'runtime' => $this,
        ]);

        require_once dirname(__FILE__) . '/views/theme-typography-setup.php';
    }

    public function googleApiKey()
    {
        extract([
            'runtime' => $this,
        ]);

        require_once dirname(__FILE__) . '/views/google-api-key.php';
    }
}
