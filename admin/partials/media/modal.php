<?php
global $container;
?>
<div id="builder-media-modal" x-options='{"data-id":"builder-media-modal"}' class="bb-modal-large hidden opacity-0 transition-opacity duration-200 ease-in-out flex flex-wrap fixed bottom-0 left-0 justify-center items-center content-center">
    <div class="bb-modal-large bg-white border text-center col-11 rounded">
        <div class="flex header bg-light w-full mb-4">
            <div class="px-4 py-1 w-full">
                <h3>Media Manager</h3>
            </div>
        </div>

        <div class="flex flex-wrap modal-content w-full mb-4">
            <div class="px-4 py-1 w-full">
                <div class="flex w-full items-center justify-left">
                    <a class="active text-lg leading-0 mr-4 cursor-pointer text-primary">Images</a>
                    <a class="text-xs cursor-pointer leading-0 opacity-50 hover:opacity-100 hover:text-primary hover:font-bold transition-all duration-200">Videos</a>
                </div>
                <div class="images" x-lazyload="lazyload--gallery--list" x-on='{"name":"bb-modal-spawn-before","on":"@link|x-options|data-id","equal":"builder-media-modal"}' x-options='{"attributes":{"name":"{name}"}}'>
                    <div class="w-full duration-200 ease-in-out transition-all" x-spinner>
                        <div class="flex justify-center">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center actions px-4 py-2 mb-4">
            <a x-action="event" x-options='{"name": "bb-block-delete-after", "attributes": {"item":"{item}","state":"cancel"}}' class="mr-2 bg-secondary text-white rounded px-4 py-1 cursor-pointer">Cancel</a>
            <a x-action="event" x-options='{"name": "bb-block-delete-after", "attributes": {"item":"{item}","state":"confirm"}}' class="ml-2 bg-primary text-white rounded px-4 py-1 cursor-pointer">Confirm</a>
        </div>
    </div>
</div>