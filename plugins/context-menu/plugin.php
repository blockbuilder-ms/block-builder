<?php

namespace BB\Plugins\ContextMenu;

use BB\Includes\Abstracts\Plugin as PluginBase;

class Plugin extends PluginBase
{
    protected $name = "Context Menu",
        $author = 'Block Builder Team',
        $authorUrl = '#',
        $version = '0.0.1',
        $description = 'A customized context menu when right clicking inside the builder.';

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
            new \BB\Plugins\ContextMenu\Admin\Runtime;
        }

        if ($container->view->isPublic()) {
            /**
             * Only public facing elements
             */

            new \BB\Plugins\ContextMenu\Frontend\Runtime;
        }
    }

    /**
     * Will return markup of the settings page to be viewed inside of the block builder.
     * 
     * @return string
     */
    public function getSettingsMarkup(): string
    {
        return '';
    }
}
