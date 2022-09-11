<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Disable Webp
        </label>
        <p class="text-xs">
            By default the block editor will dynamicly build webp images for the website, if you wish it refrain from doing so toggle below.
            <strong class="block mt-1">Note: This will rebuild all pages</strong>
        </p>
        <div class="toggle-container flex mt-1">
            <input x-action="sync" x-options='{"when": "change", "what": "disable_webp"}' id="disable_webp" class="toggle" type="checkbox" role="switch" name="disable_webp">
            <label for="disable_webp" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>