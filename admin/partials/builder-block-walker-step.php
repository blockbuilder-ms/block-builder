<template id="bb-block-walker-step">
    <div x-action="drop" x-options='{"emit":"bb-on-move-block","attributes":{"id":"{id-full}"}}' class="step w-full mt-1 duration-200 ease-in-out transition-all scale-100">
        <div class="flex w-full items-center content-center">
            <a x-action="drag" draggable="true" x-options='{"emit":"bb-block-move-before","attributes":{"id":"{id-full}"}}' class="cursor-pointer mr-2" title="Drag to move block">
                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
            </a>
            <div x-action="event" x-options='{"name":"bb-walker-hover_step-before","when":"hover","attributes":{"id":"{id-full}"}}' class="flex w-full bg-white px-2 py-2 text-sm justify-between">
                <span title="{id-full}" class="flex items-center content-center text-xs">
                    <svg x-if="child" xmlns="http://www.w3.org/2000/svg" style="width:14px;" class="mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>

                    #{id} <small class="bb-badge ml-2 py-1 px-2 rounded">{tag}</small> <small x-if="click-event" class="bb-badge ml-2 py-1 px-2 rounded">click event</small> <small x-if="change-event" class="bb-badge ml-2 py-1 px-2 rounded">change event</small>
                </span>

                <span class="flex items-center content-center">
                    <a x-action="event" x-options='{"name": "bb-block-delete-before", "attributes": {"item":"{item}" }}' class="cursor-pointer opacity-25 hover:opacity-100 duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </a>

                    <a x-action="event" x-options='{"name": "bb-duplicate-block-before", "attributes": {"item":"{item}"}}' class="ml-2 cursor-pointer opacity-25 hover:opacity-100 duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </a>

                    <a x-action="event" x-options='{"name": "bb-block-edit-before", "attributes": {"item":"{item}"}}' class="ml-2 cursor-pointer opacity-25 hover:opacity-100 duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </a>
                </span>
            </div>
        </div>

        <div x-if="content" class="walker-container flex flex-wrap ml-2" x-content></div>
    </div>
</template>