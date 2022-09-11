<?php

namespace BB\Plugins\Colors\Admin;

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
            ['bb_builder_render_setting-modal_theme_toggle', 10, [$this, 'themeColorsSetup']],
        ];

        $this->filters = [
            ["bb_builder_inject_style", 10, [$this, "injectColorJoe"]],
            ['bb_partial_colors', 10, [$this, "registerPartialSpace"], 2],
        ];

        add_action("bb_builder_after_inject_style", function () {
            $path = BLOCKBUILDER_PLUGINS_URI . '/colors/admin/js/dist/app.js';
            echo '<script type="text/javascript" src="' . $path . '"></script>';
        });

        parent::__construct();
    }

    public function registerPartialSpace($name, $extract)
    {
        $path = BLOCKBUILDER_PLUGIN_PATH . '\\colors\\admin\\partials\\' . implode('\\', explode('.', $name)) . '.php';
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

    public function themeColorsSetup()
    {
        extract([
            'runtime' => $this,
        ]);

        require_once dirname(__FILE__) . '/views/theme-colors-setup.php';
    }

    public function injectColorJoe($stack)
    {
        $stack['color-joe'] = [
            'path' => 'plugins.colors.admin.style',
            'name' => 'colorjoe',
            'version' => '1.0.0',
        ];

        return $stack;
    }
}
