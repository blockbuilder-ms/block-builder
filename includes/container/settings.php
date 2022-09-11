<?php

namespace BB\Includes\Container;

final class Settings
{
    private $settings = [], $optionKey = 'bb_container_settings';

    /**
     * Loads in the block builder settings
     * 
     * @return bool
     */
    private function loadSettings(): bool
    {
        $settings = get_option($this->optionKey);
        if (!is_array($settings)) {
            $settings = [];
        }

        foreach ($settings as $k => $v) {
            $this->settings[$k] = $v;
        }

        return true;
    }

    /**
     * Saves the settings
     * 
     * @return bool
     */
    public function save()
    {
        $state = update_option($this->optionKey, $this->settings);

        return [$state, $this->optionKey, $this->settings];
    }

    public function all()
    {
        return get_option($this->optionKey);
    }

    /**
     * Will alow for magic method saving on the settings
     * 
     * @return bool
     */
    public function __set($key, $data)
    {
        $this->settings[$key] = $data;
    }

    /**
     * Will allow for magic pulling of the settings.
     * 
     * @return mixed
     */
    public function __get($key)
    {
        if (!isset($this->settings[$key])) {
            return false;
        }

        return $this->settings[$key];
    }

    /**
     * Will load the settings
     */
    public function __construct()
    {
        $this->loadSettings();
    }
}
