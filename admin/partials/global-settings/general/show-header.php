<?php
global $container;

$state = $container->settings->show_header;
$header = $container->settings->header;
$headers = $container->header->all();
?>
<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Show Header
        </label>
        <p class="text-xs">
            Will place a global section in the top of all post types.
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" <?php if ($state) : ?> checked="checked" <?php endif; ?> x-options='{"when": "change", "what": "show_header", "reload": "true", "ui_reload": "lazyload--settings--list"}' id="show_header" class="toggle" type="checkbox" role="switch" name="show_header">
            <label for="show_header" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>

<?php
if ($state) :
?>
    <div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
        <div class="w-full">
            <label class="w-full text-sm">
                Specify default header
            </label>
            <p class="text-xs">
                This will be the header that will by default be bound to new posts.
            </p>
            <div class="toggle-container flex mt-1">
                <select x-action="sync" x-options='{"when": "change", "what": "header", "reload": "true", "ui_reload": "lazyload--settings--list"}' name="header" class="form-input py-2 px-4 mt-1">
                    <option value="0">Choose..</option>
                    <?php
                    if (is_array($headers) && 0 !== count($headers)) {
                        foreach ($headers as $header) {
                            echo '<option ' . ($header->ID === $header ? "selected" : "") . ' value="' . $header->ID . '">' . $header->post_title . '</option>';
                        }
                    } else {
                        echo '<option value="0">No headers were found.</option>';
                    }
                    ?>
                </select>
            </div>
        </div>
    </div>

<?php
endif;
