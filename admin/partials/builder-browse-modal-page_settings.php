<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
?>

<div id="page-settings" class="flex flex-wrap items-start content-start w-full pr-2">
    <div class="bg-white flex justify-between items-center w-full mb-4">
        <a class="cursor-pointer py-4 w-full text-center" title="Click to open the menu">
            Page settings
        </a>
        <a x-action="event" x-options='{"name":"bb-post-save_settings-before"}' class="flex items-center content-center justify-center button-save mr-4 rounded-full bg-light ease-in-out duration-200 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:16px;" class="opacity-50 hover:opacity-100 ease-in-out duration-200 transition-all" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
        </a>
    </div>
    <div class="w-full duration-200 ease-in-out transition-all browse-modal-container" style="height: calc( 100vh - 124px);" x-lazyload="lazyload--page-settings--list" x-on='{"name":"bb-modal-spawn-before","on":"@link|x-options|data-id","equal":"builder-page-settings-modal"}'>
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