<div id="{id}" class="form-group items-center content-center flex mb-4">
    <div class="input-field flex flex-wrap w-full">
        <label class="text-xs flex items-center content-center justify-between">
            <span class="mr-2 opacity-50 hover:opacity-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
            </span>
            <span>{label}</span>
        </label>
        <div class="w-full mt-1">
            <div x-if="src" class="relative">
                <img class="w-full object-cover h-36 hidden" src="{src}">
                <div class="w-full flex flex-wrap items-center content-center justify-center absolute top-0 h-36 mb-4 text-xs text-white bg-dark-overlay">
                    <h4 class="w-full text-center">Update the media by clicking below</h4>
                    <a x-action="media" x-subaction="toggle" x-options='{"id":"{data-id}","name":"{target}"}' class="text-decoration-none text-white" href="#">Update</a>
                </div>
            </div>
            <div x-if="!src">
                <div class="w-full flex flex-wrap items-center content-center justify-center bg-white h-36 mb-4">
                    <h4 class="w-full text-center">No media is chosen</h4>
                    <a x-action="media" x-subaction="toggle" x-options='{"id":"{data-id}","name":"{target}"}' class="text-decoration-none" href="#">Update</a>
                </div>
            </div>
        </div>
    </div>
    <input x-control-value type="hidden" name="{target}" />
    <input type="hidden" name="{target}-id" />
</div>