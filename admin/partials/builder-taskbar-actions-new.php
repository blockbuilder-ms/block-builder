<?php

/**
 * Builder actions new
 * Action menu like the normal one, tho for newly created items which has not yet been saved.
 * 
 * To have create instead of save and more.
 * 
 * @since 0.1
 * @version 0.1
 */
?>
<ul class="list-style-none w-full flex justify-end items-center content-center">
    <?php
    /**
     * Hooks allowing for introducing elements to the action menu before
     * it's position  
     * 
     * Hooks:
     * 
     * @since 0.1
     */
    do_action('bb_builder_before_actions');
    ?>
    <li>
        <a x-action='modal' x-method='toggle' x-options='{"data-id":"builder-settings-modal"}' title="Control global settings for the builder" class="taskbar-navigation-item cursor-pointer duration-200 transition-all ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" class="closed" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="open hidden" style="height:28px;width:28px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </a>
    </li>
    <?php
    /**
     * Hooks allowing for introducing elements to the action menu after
     * it's position  
     * 
     * Hooks:
     * 
     * @since 0.1
     */
    do_action('bb_builder_after_actions');
    ?>
</ul>