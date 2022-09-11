<?php
global $container;
?>
<div id="builder-browse-modal" class="modal hidden opacity-0 transition-opacity duration-200 ease-in-out flex flex-wrap w-96 h-64 fixed bottom-0 left-0 items-start content-start">
    <div x-action="toggle" x-options='{"toggle":["translate-y-10", "opacity-0"]}' class="col-12 bg-white flex flex-wrap">
        <a x-toggle class="cursor-pointer py-4 w-full text-center" title="Click to open the menu">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </a>

        <div class="relative w-full">
            <ul x-container class="tabs hidden translate-y-10 opacity-0 duration-200 ease-in-out transition-all bg-light z-50 shadow-sm absolute top-0 flex flex-wrap w-full">

                <?php
                do_action('bb_builder_browse_modal_before_navigation');
                ?>

                <li class="w-full">
                    <a x-action="tab" href="#blocks" class="tab active text-decoration-none flex py-4 px-4 cursor-pointer border-b text-sm transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Blocks
                    </a>
                </li>
                <li class="w-full">
                    <a x-action="tab" href="#templates" class="tab text-decoration-none flex py-4 px-4 cursor-pointer border-b text-sm transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Templates
                    </a>
                </li>

                <?php
                do_action('bb_builder_browse_modal_after_navigation');
                ?>
            </ul>
        </div>
    </div>

    <div class="col-12">
        <?php
        do_action('bb_builder_browse_modal_before_content');

        /**
         * Browse modal content
         */
        echo $container->view->partial('builder-browse-modal-blocks', 'admin');
        echo $container->view->partial('builder-browse-modal-templates', 'admin');

        do_action('bb_builder_browse_modal_after_content');
        ?>
    </div>
</div>