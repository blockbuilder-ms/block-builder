<?php
global $container;

$state = $container->settings->show_header;
$header = $container->settings->header;
$headers = $container->header->all();
?>
<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Show Header on this page
        </label>
        <p class="text-xs">
            Will place a section in the top of the current page. Regardless of the options set other places.
        </p>
        <div class="toggle-container flex mt-1">
            <select x-page-setting name="bb_show_header" class="form-input py-2 px-4 mt-1">
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
                Specify page header
            </label>
            <p class="text-xs">
                This will be the header that will by used, regardless of rules other places.
            </p>
            <div class="toggle-container flex mt-1">
                <select x-page-setting name="bb_header" class="form-input py-2 px-4 mt-1">
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
