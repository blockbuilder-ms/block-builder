<?php
global $container;
?>
<template id="bb-block-column-chooser-inner">
    <div id="{name}" class="column-chooser-inner w-full empty-view" x-wrap>
        <div class="standard-view flex w-full flex-wrap text-center text-sm justify-center items-center content-center transition-all duration-200 ease-in-out border pt-4 mt-4">
            <a href="#" x-action="event" x-options='{"name": "bb-builder-add-before","attributes":{"location":"{name}"}}' title="Click to add an block or template" class="flex text-decoration-none flex-wrap justify-center content-center items-center add-button" style="margin-top:35px;">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </a>
            <h3 class="w-full text-sm mt-0 text-center roboto" style="margin-bottom:0px;padding-bottom:35px;">{name} is currently empty.</h3>
        </div>

        <?php
        echo $container->view->partial('content.column-chooser', 'admin', [
            "location" => "{name}",
            "fixed" => true,
        ]);
        ?>

        <div x-action="drop" x-options='{"location":"#{name}"}' class="drag-view hidden opacity-0 transition-all duration-200 ease-in-out border pt-4 mt-4">
            <h3 class="w-full text-center roboto">Drop here to add the block to the header.</h3>
        </div>
    </div>
</template>