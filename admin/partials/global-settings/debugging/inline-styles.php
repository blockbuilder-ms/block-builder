<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Inline Styles
        </label>
        <p class="text-xs">
            By default the block editor will dynamicly build stylesheets for the website, if you wish it to inline it's styles instead toggle below.
            <strong class="block mt-1">Note: This will rebuild all pages</strong>
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" x-options='{"when": "change", "what": "inline_styles"}' id="inline_styles" class="toggle" type="checkbox" role="switch" name="inline_styles">
            <label for="inline_styles" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>