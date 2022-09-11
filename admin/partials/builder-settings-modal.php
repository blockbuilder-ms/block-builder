<?php
global $container;
?>
<div id="builder-settings-modal" x-options='{"data-id":"builder-settings-modal"}' class="modal hidden opacity-0 transition-opacity duration-200 ease-in-out flex flex-wrap fixed bottom-0 left-0 items-start content-start">
    <div x-action="toggle" x-options='{"toggle":["translate-y-10", "opacity-0"]}' class="col-12 bg-white flex flex-wrap">
        <a x-toggle class="cursor-pointer py-4 w-full text-center" title="Click to open the menu">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </a>

        <div class="relative w-full">
            <ul x-container class="tabs hidden translate-y-10 opacity-0 duration-200 ease-in-out transition-all bg-light z-50 shadow-sm absolute top-0 flex flex-wrap w-full">
                <?php
                do_action('bb_builder_settings_modal_before_navigation');
                ?>

                <li class="w-full">
                    <a x-action="tab" x-initial="true" href="#general-settings" class="tab text-xs text-decoration-none flex py-4 px-4 cursor-pointer border-b transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        General
                    </a>
                </li>
                <li class="w-full">
                    <a x-action="tab" href="#theme-settings" class="tab text-decoration-none text-xs flex py-4 px-4 cursor-pointer border-b transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Theme
                    </a>
                </li>
                <li class="w-full">
                    <a x-action="tab" href="#integrations-settings" class="tab text-decoration-none text-xs flex py-4 px-4 cursor-pointer border-b transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Integrations
                    </a>
                </li>
                <li class="w-full">
                    <a x-action="tab" href="#plugins" class="tab text-decoration-none flex py-4 px-4 cursor-pointer border-b text-xs transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Plugins
                    </a>
                </li>
                <li class="w-full">
                    <a x-action="tab" href="#debugging-settings" class="tab text-decoration-none flex py-4 px-4 cursor-pointer border-b text-xs transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        Debugging
                    </a>
                </li>
                <?php
                do_action('bb_builder_settings_modal_after_navigation');
                ?>
            </ul>
        </div>
    </div>

    <div class="col-12">
        <?php
        do_action('bb_builder_settings_modal_before_content');

        /**
         * Browse modal content
         */
        echo $container->view->partial('settings-modal.general', 'admin');
        echo $container->view->partial('settings-modal.theme', 'admin');
        echo $container->view->partial('settings-modal.integrations', 'admin');
        echo $container->view->partial('builder-browse-modal-plugins', 'admin');
        echo $container->view->partial('settings-modal.debugging', 'admin');

        do_action('bb_builder_settings_modal_after_content');
        ?>
    </div>
</div>