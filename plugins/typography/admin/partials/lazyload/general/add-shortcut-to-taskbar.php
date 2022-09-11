<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2 mx-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Add shortcut to taskbar
        </label>
        <p class="text-xs">
            If turned on the taskbar will get a shortcut to typography settings added.
            <strong class="block">This is turned off by default</strong>
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" x-options='{"when": "change", "what": "typography-cache_google_fonts"}' id="typography-cache_google_fonts" class="toggle" type="checkbox" role="switch" name="typography-cache_google_fonts">
            <label for="typography-cache_google_fonts" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>