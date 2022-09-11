<div x-action="column-picker" id="{id}" class="form-group mb-4">
    <label class="text-xs flex items-center content-center">
        <span class="mr-2 opacity-50 hover:opacity-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
        </span>
        <span>{label}</span>
    </label>

    <div class="flex controls mt-4">
        <div class="col-8 first">
            <div class="flex flex-wrap">
                <label class="w-full text-xs flex items-center content-center justify-between">
                    <span>Width</span>
                </label>
                <div class="row flex items-center mt-1">
                    <div class="col-6 first">
                        <input class="w-full py-2 px-4" type="number" />
                    </div>
                    <div class="col-6 last">
                        <span class="ml-2 text-xs">
                            % / 100
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 last">
            <div class="flex flex-wrap px-4">
                <label class="w-full text-xs flex items-center content-center justify-between">
                    <span>Action</span>
                </label>
                <div class="flex items-center mt-1">
                    <a class="button border-0 bg-primary px-4 py-1 rounded text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-wrap mt-4">
        <label class="w-full text-xs flex items-center content-center justify-between">
            <span>Currently column span: <span x-column-span-from>0</span>% of <span x-column-span-to>100</span>%</span>
        </label>
        <div x-columns class="flex flex-wrap columns-container">
            <h5 class="w-full text-center mt-2">Currently no columns reside in this row.</h5>
        </div>
    </div>
</div>