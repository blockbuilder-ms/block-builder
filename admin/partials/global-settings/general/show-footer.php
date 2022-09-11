<?php
global $container;

$state = $container->settings->show_footer;
$footer = $container->settings->footer;
$footers = $container->footer->all();
?>
<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Show Footer
        </label>
        <p class="text-xs">
            Will place a global section in the bottom of all post types.
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" <?php if ($state) : ?> checked="checked" <?php endif; ?> x-options='{"when": "change", "what": "show_footer", "reload": "true", "ui_reload": "lazyload--settings--list"}' id="show_footer" class="toggle" type="checkbox" role="switch" name="show_footer">
            <label for="show_footer" class="slot">
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
                Specify default footer
            </label>
            <p class="text-xs">
                This will be the footer that will by default be bound to new posts.
            </p>
            <div class="toggle-container flex mt-1">
                <select x-action="sync" x-options='{"when": "change", "what": "footer", "reload": "true", "ui_reload": "lazyload--settings--list"}' name="footer" class="form-input py-2 px-4 mt-1">
                    <option value="0">Choose..</option>
                    <?php
                    if (is_array($footers) && 0 !== count($footers)) {
                        foreach ($footers as $footer) {
                            echo '<option ' . ($footer->ID === $footer ? 'selected' : '') . ' value="' . $footer->ID . '">' . $footer->post_title . '</option>';
                        }
                    } else {
                        echo '<option value="0">No footers were found.</option>';
                    }
                    ?>
                </select>
            </div>
        </div>
    </div>

<?php
endif;
