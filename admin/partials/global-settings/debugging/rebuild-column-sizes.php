<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Rebuild column sizes
        </label>
        <p class="text-xs">
            If no column sizes are found, try rebuilding the column cache. This should automatically be done when activating the plugin.
            But could help in some cases.
        </p>
        <div class="toggle-container flex mt-1">
            <button x-action="event" x-options='{"name": "bb-column-rebuild_sizes-before"}' class="primary-button w-full py-1 bg-primary border-0 cursor-pointer text-white rounded-sm">
                Rebuild
            </button>
        </div>
    </div>
</div>