<div class="form-group bg-white rounded px-4 py-4 w-full flex flex-wrap mb-2">
    <div class="w-full">
        <label class="w-full text-sm">
            Google Api Key
        </label>
        <p class="text-xs">
            Set the google api key you wish to use for the site.
        </p>
        <div class="toggle-container flex mt-1">
            <input class="w-full py-2 px-4 outline-none" placeholder="Enter your google api key" type="text" name="google_api_key" />
            <button x-action="sync" x-options='{"when": "click", "what": "google_api_key"}' x-what="google-api-key" class="primary-button bg-primary border-0 cursor-pointer ml-2 text-white rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </div>
    </div>
</div>