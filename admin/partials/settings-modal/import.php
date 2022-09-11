<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
?>

<div id="import-settings" class="settings-modal-container opacity-0 hidden transition-all ease-in-out duration-200 flex flex-wrap items-start content-start w-full py-4 pr-2">
    <?php
    do_action('bb_builder_before_global-settings_import');

    do_action('bb_builder_render_setting-modal_import_toggle');

    do_action('bb_builder_after_global-settings_import');
    ?>
</div>