<?php
global $container;
?>
<div id="builder-confirm-delete" x-options='{"data-id":"builder-confirm-delete"}' class="modal hidden opacity-0 transition-opacity duration-200 ease-in-out flex flex-wrap fixed bottom-0 left-0 justify-center items-center content-center">
    <div class="bb-modal bg-white border text-center col-3 rounded">
        <div class="header px-4 py-2">
            <h3>Are you certain you wish to delete <span x-attr-item></span>?</h3>
            <p class="text-xs mt-2">If you regret later on you would have to do a full state reload, to the state before deleting this block</p>
        </div>

        <div class="flex justify-center actions px-4 py-2 mb-4">
            <a x-action="event" x-options='{"name": "bb-block-delete-after", "attributes": {"item":"{item}","state":"cancel"}}' class="mr-2 bg-secondary text-white rounded px-4 py-1 cursor-pointer">Cancel</a>
            <a x-action="event" x-options='{"name": "bb-block-delete-after", "attributes": {"item":"{item}","state":"confirm"}}' class="ml-2 bg-primary text-white rounded px-4 py-1 cursor-pointer">Confirm</a>
        </div>
    </div>
</div>