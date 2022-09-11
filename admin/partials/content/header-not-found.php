<?php
global $container;
?>
<div id="header-wrap" class="w-full empty-view" x-wrap>
    <div class="standard-view flex flex-wrap items-center justify-center content-center border-b py-8">
        <a href="#" x-action="event" x-options='{"name": "bb-builder-add-before","attributes":{"location":"header-wrap"}}' title="Click to add an block or template" class="flex text-decoration-none flex-wrap justify-center content-center items-center add-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </a>
        <h4 class="w-full mt-0 text-center roboto" style="margin-bottom:5px;">The header is currently empty.</h4>
        <p class="roboto text-sm" style="margin-top:5px;">If left empty it will not be shown on frontend.</p>
    </div>

    <?php
    echo $container->view->partial('content.column-chooser', 'admin', [
        "location" => "header-wrap"
    ]);
    ?>

    <div x-action="drop" x-options='{"location":"#header-wrap"}' class="drag-view hidden opacity-0 transition-all duration-200 ease-in-out border pt-4 mt-4">
        <h3 class="w-full text-center roboto">Drop here to add the block to the header.</h3>
    </div>
</div>