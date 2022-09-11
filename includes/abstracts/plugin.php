<?php

namespace BB\Includes\Abstracts;

use BB\Includes\Abstracts\Concerns\HasSettings;

abstract class Plugin
{
    use HasSettings;

    protected $name = '', $description = '', $version = '', $author = '', $authorUrl = '', $thumbnail = '', $settingsDomId;

    /**
     * Returns the running state of the plugin (active/not active)
     * 
     * @return bool
     */
    public function getRunningState(): bool
    {
        return isset($this->settings['active']) ? $this->settings['active'] : false;
    }

    /**
     * Activates the plugin
     * 
     * @return bool
     */
    public function activate(): bool
    {
        $this->settings['active'] = true;

        if (!$this->saveSettings()) {
            return false;
        }

        $this->activated();

        return true;
    }

    /**
     * Deactivates the plugin
     * 
     * @return bool
     */
    public function deactivate(): bool
    {
        $this->settings['active'] = false;

        if (!$this->saveSettings()) {
            return false;
        }

        $this->deactivated();

        return true;
    }

    /**
     * Mandatory functionality to allow fetching settings markup for view in the builder
     * 
     * @return string
     */
    abstract public function getSettingsMarkup(): string;

    /**
     * Runs after the plugin has been registered with Block Builder
     * 
     * @return void
     */
    protected function booted(): void
    {
        //
    }

    /**
     * Runs after the plugin has been activated
     * 
     * @return void
     */
    protected function activated(): void
    {
        //
    }

    /**
     * Runs after the plugin has been deactivated
     * 
     * @return void
     */
    protected function deactivated(): void
    {
        //
    }

    /**
     * Registers the plugin with block builder
     */
    public function register()
    {
        $this->loadSettings();
        $this->booted();
    }

    /**
     * Getters
     */
    public function getName()
    {
        return $this->name;
    }

    public function getVersion()
    {
        return $this->version;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getAuthor()
    {
        return $this->author !== '' ? $this->author : 'N/A';
    }

    public function getAuthorUrl()
    {
        return $this->authorUrl !== '' ? $this->authorUrl : '#';
    }

    public function getThumbnail()
    {
        return $this->thumbnail;
    }

    public function isActive()
    {
        return $this->getRunningState() === true;
    }

    public function hasSettingsModal()
    {
        return $this->settingsDomId !== null;
    }

    public function getSettingsDomId()
    {
        return $this->settingsDomId;
    }

    public function __toString()
    {
        return str_replace('\\', '-', get_class($this));
    }

    public function __construct()
    {
        if (!isset($this->settingsKey)) {
            $this->settingsKey = $this->__toString();
        }
        $this->loadSettings();

        if (!$this->settingsDomId) {
            if (!isset($this->settings['dom_id'])) {
                $this->settings['dom_id'] = $this->generate_uuid();
                $this->saveSettings();

                $this->settingsDomId = $this->settings['dom_id'];
            } else {
                $this->settingsDomId = $this->settings['dom_id'];
            }
        }

        add_action("bb_plugin_modals", function () {
?>
            <div id='<?php echo $this->getSettingsDomId() ?>' x-options='{"data-id":"<?php echo $this->getSettingsDomId() ?>"}' class='modal opacity-0 hidden transition-opacity duration-200 ease-in-out flex flex-wrap fixed bottom-0 left-0 items-start content-start'>
                <?php echo $this->getSettingsMarkup(); ?>
            </div>
<?php
        }, 10);
    }

    public function generate_uuid()
    {
        return sprintf(
            '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0xffff),
            mt_rand(0, 0x0C2f) | 0x4000,
            mt_rand(0, 0x3fff) | 0x8000,
            mt_rand(0, 0x2Aff),
            mt_rand(0, 0xffD3),
            mt_rand(0, 0xff4B)
        );
    }
}
