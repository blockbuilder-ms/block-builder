<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2 mx-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Use color layout
        </label>
        <p class="text-xs">
            This will add a global color set that can be set and easily used throughout the site on various blocks.
            <strong class="block">This is turned on by default</strong>
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" x-options='{"when": "change", "what": "colors-use_color_layout"}' id="colors-use_color_layout" class="toggle" type="checkbox" role="switch" name="colors-use_color_layout">
            <label for="colors-use_color_layout" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>