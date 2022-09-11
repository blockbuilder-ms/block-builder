<?php
global $container;

$state = $container->settings->auto_save;
$auto_save_interval = $container->settings->auto_save_interval;
?>
<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Auto save
        </label>
        <p class="text-xs">
            Will auto save draft versions of the page every x amount of time. The time can be set when feature is turned on.
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" x-options='{"when": "change", "what": "auto_save","ui_reload":"lazyload--settings--list"}' id="auto_save" <?php echo ($state ? "checked" : "") ?> class="toggle" type="checkbox" role="switch" name="auto_save">
            <label for="auto_save" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>
<?php
if ($state) {
?>
    <div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
        <div class="w-full">
            <label class="w-full text-sm">
                Auto save interval
            </label>
            <p class="text-xs">
                Define how often it should autosave your progress. Time is in seconds.
            </p>
            <div class="toggle-container flex mt-1">
                <input class="w-full py-2 px-4 outline-none" placeholder="Time in seconds" type="number" name="auto_save_interval" value="<?php echo isset($auto_save_interval) ? $auto_save_interval : "300" ?>" />
                <button x-action="sync" x-options='{"when": "click", "what": "auto_save_interval"}' x-what="google-api-key" class="primary-button bg-primary border-0 cursor-pointer ml-2 text-white rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
<?php
}
