<?php

namespace BB\Plugins\Typography;

use BB\Includes\Abstracts\Plugin as PluginBase;

class Plugin extends PluginBase
{
    protected $name = "Typography",
        $author = 'Block Builder Team',
        $authorUrl = '#',
        $version = '0.0.1',
        $description = 'Gives the ability set typography bindings. Using Google Fonts.';

    /**
     * Registers the different functionality of the plugin with the container
     * and the builder
     * 
     * @return void
     */
    public function booted(): void
    {
        global $container;

        if ($container->view->isAdmin() || $container->view->isApi()) {
            /**
             * Only admin facing elements 
             */
            $this->_loadControls();

            new \BB\Plugins\Typography\Admin\Runtime;
        }

        if ($container->view->isPublic()) {
            /**
             * Only public facing elements
             */

            new \BB\Plugins\Typography\Frontend\Runtime;
        }
    }

    private function _loadControls()
    {
        \add_filter('bb_block_builder_controls', function ($controls) {
            $controls["font-picker"] = \BB\Plugins\Typography\Includes\Controls\FontPicker::class;

            return $controls;
        });
    }

    /**
     * Will return markup of the settings page to be viewed inside of the block builder.
     * 
     * @return string
     */
    public function getSettingsMarkup(): string
    {
        global $container;
        $pages = ["general" => "General"];

        $content = $container->view->partial("component.base", "typography", [
            "pages" => $pages,
        ]);

        return $content;
    }
}
