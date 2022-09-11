<?php
global $container;
?>
<div id="builder-block-edit-modal" x-options='{"data-id":"builder-block-edit-modal"}' class="modal hidden opacity-0 transition-opacity duration-200 ease-in-out flex w-96 h-64 fixed bottom-0 left-0 items-start content-start">

</div>

<template id="block-edit-instance">
    <div class="instance overflow-y-hidden h-full flex flex-wrap">
        <div class="col-12 bg-white">
            <div x-action="toggle" x-options='{"toggle":["translate-y-10", "opacity-0"]}' class="col-12 bg-white flex flex-wrap">
                <div class="flex w-full justify-between items-center content-center">
                    <a x-toggle class="cursor-pointer py-4 px-4 text-center" title="Click to open the menu">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>

                    <span class="w-full text-center select-none">
                        Edit Block
                    </span>

                    <a x-close class="cursor-pointer py-4 px-4 text-center" title="Click to close the sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>

                <div class="relative w-full">
                    <ul x-container x-navigation class="tabs hidden translate-y-10 opacity-0 duration-200 ease-in-out transition-all bg-light z-50 shadow-sm absolute top-0 flex flex-wrap w-full"></ul>
                </div>
            </div>
        </div>

        <div class="block-edit-modal-container col-12 w-full overflow-y-auto overflow-x-hidden">
            <div class="flex flex-wrap px-4 h-full items-start content-start" x-content>

            </div>
        </div>
    </div>
</template>

<template id="block-edit-navigation-item">
    <li class="w-full">
        <a x-action="tab" x-option='{"data-id":"{target}"}' href="#{target}" class="tab text-sm text-decoration-none flex py-4 px-4 cursor-pointer border-b text-sm transition-opacity duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {label}
        </a>
    </li>
</template>