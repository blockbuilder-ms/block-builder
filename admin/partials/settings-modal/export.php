<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
?>

<div id="export-settings" class="settings-modal-container opacity-0 hidden transition-all ease-in-out duration-200 flex flex-wrap items-start content-start w-full py-4 pr-2">
    <?php
    do_action('bb_builder_before_global-settings_export');

    do_action('bb_builder_render_setting-modal_export_toggle');

    do_action('bb_builder_after_global-settings_export');
    ?>
</div>