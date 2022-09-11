<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
$plugins = $container->plugin->list();

foreach ($plugins as $plugin) {
    echo $container->view->partial('plugin-single', 'admin', [
        'plugin' => $plugin
    ]);
}
