<?php
global $container;
?>
<template id="bb-block-no-content">
    <div id="{name}" class="w-full empty-view" x-wrap>
        <div class="standard-view flex flex-wrap items-center justify-center content-center border-b py-8">
            <a href="#" x-action="event" x-options='{"name": "bb-builder-add-before","attributes":{"location":"{name}"}}' title="Click to add an block or template" class="flex text-decoration-none flex-wrap justify-center content-center items-center add-button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </a>
            <h4 class="w-full mt-0 text-center roboto" style="margin-bottom:5px;">The {type} is currently empty.</h4>
            <p class="roboto text-sm text-center px-4" style="margin-top:5px;">{description}</p>
        </div>

        <?php
        echo $container->view->partial('content.column-chooser', 'admin', [
            "location" => "{name}"
        ]);
        ?>

        <div x-action="drop" x-options='{"location":"#{name}"}' class="drag-view hidden opacity-0 transition-all duration-200 ease-in-out border pt-4 mt-4">
            <h3 class="w-full text-center roboto">Drop here to add the block to the page.</h3>
        </div>
    </div>
</template>