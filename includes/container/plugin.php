<?php

namespace BB\Includes\Container;

/**
 * Controls plugin bindings with the container
 */
final class Plugin
{
    /**
     * Holds the registered plugins
     * 
     * @var array
     */
    private $plugins = [];

    /**
     * Returns array of all registered plugins
     * 
     * @return array
     */
    public function list(): array
    {
        return $this->plugins;
    }

    /**
     * Registers a plugin
     * 
     * @return bool
     */
    public function register($entryClass): bool
    {
        // Only add if not exists
        if (in_array($entryClass, $this->plugins)) {
            return false;
        }

        do_action('bb_before_register_plugin', $this->plugins);

        $this->plugins[] = new $entryClass;

        do_action('bb_after_register_plugin', $this->plugins);

        // Let counterpart know that we were succesfull
        return true;
    }

    private function loadInternalPlugins()
    {
        global $container;

        $activePlugins = $container->settings->active_plugins ? $container->settings->active_plugins : [];
        $plugins = @scandir(BLOCKBUILDER_PLUGIN_PATH);

        if (!is_array($plugins)) {
            return false;
        }

        $plugins = array_filter($plugins, function ($plugin) {
            return $plugin !== '..' && $plugin !== '.';
        });

        if (0 === count($plugins)) {
            return false;
        }

        foreach ($plugins as $plugin) {
            extract([
                'pluginContainer' => $this
            ]);

            require_once BLOCKBUILDER_PLUGIN_PATH . '/' . $plugin . '/' . $plugin . '.php';
        }
    }

    public function activate(string $className): bool
    {
        global $container;

        $realClassName = str_replace('-', '\\', $className);

        $current = $container->settings->active_plugins ? $container->settings->active_plugins : [];
        $current[$className] = true;

        $container->settings->active_plugins = $current;
        $container->settings->save();

        (new $realClassName)->activate();

        return true;
    }

    public function deactivate(string $className): bool
    {
        global $container;

        $realClassName = str_replace('-', '\\', $className);
        $current = $container->settings->active_plugins ? $container->settings->active_plugins : [];
        if (isset($current[$className])) {
            unset($current[$className]);
        }

        $container->settings->active_plugins = $current;
        $container->settings->save();

        (new $realClassName)->deactivate();

        return true;
    }

    public function __construct()
    {
        $this->loadInternalPlugins();

        foreach ($this->plugins as $plugin) {
            if ($plugin->isActive()) {
                $plugin->booted();
            }
        }
    }
}
