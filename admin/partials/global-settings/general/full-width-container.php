<?php
global $container;

$state = $container->settings->full_width_container;
?>
<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Full width container
        </label>
        <p class="text-xs">
            Will activate full width container - if not used it will default to 1315px max width container.
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" <?php if ($state) : ?> checked="checked" <?php endif; ?> x-options='{"when": "change", "what": "full_width_container", "reload": "true", "ui_reload": "lazyload--settings--list"}' id="full_width_container" class="toggle" type="checkbox" role="switch" name="full_width_container">
            <label for="full_width_container" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>