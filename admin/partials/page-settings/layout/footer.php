<?php
global $container;

$state = $container->settings->show_footer;
$footer = $container->settings->footer;
$footers = $container->footer->all();
?>
<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Show Footer on this page
        </label>
        <p class="text-xs">
            Will place a section in the bottom of the current page. Regardless of the options set other places.
        </p>
        <div class="toggle-container flex mt-1">
            <select x-page-setting name="bb_show_footer" class="form-input py-2 px-4 mt-1">
                <option value="0">Use global settings</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
    </div>
</div>

<?php
if ($state) :
?>
    <div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
        <div class="w-full">
            <label class="w-full text-sm">
                Specify page footer
            </label>
            <p class="text-xs">
                This will be the footer that will by used, regardless of rules other places.
            </p>
            <div class="toggle-container flex mt-1">
                <select x-page-setting name="bb_footer" class="form-input py-2 px-4 mt-1">
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
