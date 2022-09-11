<?php

namespace BB\Plugins\Colors;

use BB\Includes\Abstracts\Plugin as PluginBase;

class Plugin extends PluginBase
{
    protected $name = "Colors",
        $author = 'Block Builder Team',
        $authorUrl = '#',
        $version = '0.0.1',
        $description = 'Gives the ability set a theme and color palette for your project';

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
            $this->_loadBlocks();

            new \BB\Plugins\Colors\Admin\Runtime;
        }

        if ($container->view->isPublic()) {
            /**
             * Only public facing elements
             */

            new \BB\Plugins\Colors\Frontend\Runtime;
        }
    }

    private function _loadControls()
    {
        \add_filter('bb_block_builder_controls', function ($controls) {
            $controls["color-picker"] = \BB\Plugins\Colors\Includes\Controls\ColorPicker::class;

            return $controls;
        });
    }

    private function _loadBlocks()
    {
        new \BB\Plugins\Colors\Includes\Blocks\Base;
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

        $content = $container->view->partial("component.base", "colors", [
            "pages" => $pages,
        ]);

        return $content;
    }
}
