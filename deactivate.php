<?php

namespace BB;

class Deactivate
{
    /**
     * Sets default settings and saves it
     */
    private function _removeSettings()
    {
        global $container;

        // Purge Block editor settings
        $container->settings->purge();
    }

    /**
     * Cleans transients used by the block editor
     */
    private function cleanTransients()
    {
        global $container;

        // Purge Block editor settings
        $container->transient->purge();
    }

    /**
     * Cleans the cache of the block editor
     */
    private function cleanCache()
    {
        global $container;

        // Purge Block editor settings
        $container->cache->purge();
    }

    /**
     * Checks whether or not its initial activation
     */
    private function _shouldFullyClean()
    {
        global $container;

        return $container->settings->full_clean;
    }


    public function load()
    {
        /**
         * Basic cleaning
         */
        $this->cleanTransients();
        $this->cleanCache();

        if ($this->_shouldFullyClean()) {
            /**
             * Complete cleaning of settings and traces
             */
            $this->_removeSettings();
        }
    }
}
