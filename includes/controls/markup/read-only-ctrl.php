<div id="{id}" class="form-group items-center content-center flex mb-4">
    <div x-if="prepend" class="input-prepend py-2 px-4 mt-5">
        {prepend}
    </div>
    <div class="input-field flex flex-wrap w-full">
        <label class="text-xs flex items-center content-center justify-between">
            <span class="mr-2 opacity-50 hover:opacity-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
            </span>
            <span>{label}</span>
        </label>
        <input x-control-value disabled class="w-full mt-1 py-2 px-4" type="text" name="{target}" />
    </div>
    <div x-if="append" class="input-prepend py-2 px-4 mt-5">
        {append}
    </div>
</div>