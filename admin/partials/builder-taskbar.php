<?php

/**
 * Builder taskbar
 * Central taskbar which loads in the different sub sections.
 * 
 * @since 0.1
 * @version 0.1
 */
global $container;

?>
<div class="taskbar w-full flex fixed bottom-0 left-0 items-center content-center">
    <p class="taskbar-breadcrumbs flex items-center content-center px-4">
        <a href="/wp-admin">
            Wordpress
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" style="height:12px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <a href="/wp-admin/edit.php?post_type=<?php echo get_post_type() ?>">
            <?php echo ucfirst(get_post_type()); ?>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" style="height:12px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        <a href="/wp-admin/post.php?post=<?php echo isset($_GET['post']) ? $_GET['post'] : 0 ?>&action=edit" class="mr-4">
            <?php echo get_the_ID() ?>
        </a>

        <a title="Collection of blocks on page" x-action="modal" x-method="toggle" x-options='{"data-id":"builder-walker","emit":["bb-builder-walker-build","*"]}' class="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" style="height:18px;" class="mr-4 closed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="hidden mr-4 open" style="height:18px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </a>

        <a title="Specify viewing viewport" x-action="modal" x-method="toggle" x-options='{"data-id":"responsive-view-bar","emit":["bb-responsive-toggle_view-before"],"standalone":"true"}' class="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" style="height:18px;" class="closed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="hidden open" style="height:18px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </a>
    </p>

    <div class="taskbar-navigation">
        <?php
        echo $container->view->partial('builder-taskbar-navigation', 'admin');
        ?>
    </div>

    <div class="taskbar-actions px-4">
        <?php
        if (get_the_ID() !== 0) {
            echo $container->view->partial('builder-taskbar-actions', 'admin');
        } else {
            echo $container->view->partial('builder-taskbar-actions-new', 'admin');
        }
        ?>
    </div>
</div>