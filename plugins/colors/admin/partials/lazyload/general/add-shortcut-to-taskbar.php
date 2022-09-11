<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2 mx-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Add shortcut to taskbar
        </label>
        <p class="text-xs">
            If turned on the taskbar will get a shortcut to color settings added.
            <strong class="block">This is turned off by default</strong>
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" x-options='{"when": "change", "what": "colors-add_shortcut_to_taskbar"}' id="colors-add_shortcut_to_taskbar" class="toggle" type="checkbox" role="switch" name="colors-add_shortcut_to_taskbar">
            <label for="colors-add_shortcut_to_taskbar" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>