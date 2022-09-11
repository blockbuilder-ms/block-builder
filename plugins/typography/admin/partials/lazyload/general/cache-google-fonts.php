<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2 mx-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Cache Google Fonts
        </label>
        <p class="text-xs">
            This will cache a list of fonts from the webfonts api. So a request is not needed at each build.
            <strong class="block">This is turned on by default</strong>
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