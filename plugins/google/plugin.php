<?php

namespace BB\Plugins\Google;

use BB\Includes\Abstracts\Plugin as PluginBase;

class Plugin extends PluginBase
{
    protected $name = "Google",
        $author = 'Block Builder Team',
        $authorUrl = '#',
        $version = '0.0.1',
        $description = 'Adds blocks and functionality for Google services.';

    /**
     * Registers the different functionality of the plugin with the container
     * and the builder
     * 
     * @return void
     */
    public function booted(): void
    {
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
