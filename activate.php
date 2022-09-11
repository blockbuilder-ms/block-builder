<?php

namespace BB;

class Activate
{
    /**
     * Sets default settings and saves it
     */
    private function _setDefaultSettings()
    {
        global $container;

        $defaultSettingsRaw = file_get_contents(dirname(__FILE__) . '/default-settings.json');
        $defaultSettingsArr = json_decode($defaultSettingsRaw, true);

        foreach ($defaultSettingsArr as $key => $value) {
            $container->settings->{$key} = $value;
        }

        $container->settings->save();
    }

    /**
     * Checks whether or not its initial activation
     */
    private function isInitial()
    {
        global $container;

        return false === $container->settings->installed;
    }

    public function load()
    {
        if (!$this->isInitial()) {
            return;
        }

        $this->_setDefaultSettings();
    }
}
