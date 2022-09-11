<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
?>

<div id="theme-settings" class="settings-modal-container hidden opacity-0 transition-all ease-in-out duration-200 flex flex-wrap items-start content-start py-2 pr-2">
    <?php
    do_action('bb_builder_before_global-settings_theme');

    do_action('bb_builder_render_setting-modal_theme_toggle');

    do_action('bb_builder_after_global-settings_theme');
    ?>
</div>