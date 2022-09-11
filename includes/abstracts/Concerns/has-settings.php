<?php

namespace BB\Includes\Abstracts\Concerns;

trait HasSettings
{
    /**
     * Setting Object
     * 
     * @var array
     */
    protected $settings = [];

    /**
     * Fetches the current settings
     */
    public function getSettings()
    {
        return $this->settings;
    }

    /**
     * Loads the plugin settings, placed inside the settings library
     * of the builder.
     * 
     * it's done this way to keep the load once mentality in the db.
     * 
     * @return bool
     */
    public function loadSettings(): bool
    {
        global $container;

        if (isset($this->settingsKey)) {
            $this->settings = $container->settings->{$this->settingsKey};

            return true;
        }

        return false;
    }

    /**
     * Saves the plugin settings, placing it inside the settings library
     * of the builder.
     * 
     * it's done this way to keep it from saving more than once.
     * 
     * @return bool
     */
    public function saveSettings()
    {
        global $container;

        $container->settings->{$this->settingsKey} = $this->settings;
        $container->settings->save();

        return true;
    }
}
