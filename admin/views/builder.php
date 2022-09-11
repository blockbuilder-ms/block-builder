<?php
global $container, $hook_suffix;

?>
<html lang="en">

<head>
    <title>Block Builder</title>
    <?php
    /**
     * Styles
     */
    echo $container->view->injectStyle('grid', 'admin');
    echo $container->view->injectStyle('builder', 'admin');

    /**
     * Enqueue scripts for all admin pages.
     *
     * @since 2.8.0
     *
     * @param string $hook_suffix The current admin page.
     */
    do_action('admin_enqueue_scripts', $hook_suffix);

    /**
     * Fires when styles are printed for a specific admin page based on $hook_suffix.
     *
     * @since 2.6.0
     */
    do_action("admin_print_styles-{$hook_suffix}"); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

    /**
     * Fires when styles are printed for all admin pages.
     *
     * @since 2.6.0
     */
    do_action('admin_print_styles');

    /**
     * Fires when scripts are printed for a specific admin page based on $hook_suffix.
     *
     * @since 2.1.0
     */
    do_action("admin_print_scripts-{$hook_suffix}"); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

    /**
     * Fires when scripts are printed for all admin pages.
     *
     * @since 2.1.0
     */
    do_action('admin_print_scripts');

    /**
     * Fires in head section for a specific admin page.
     *
     * The dynamic portion of the hook name, `$hook_suffix`, refers to the hook suffix
     * for the admin page.
     *
     * @since 2.1.0
     */
    do_action("admin_head-{$hook_suffix}"); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

    /**
     * Fires in head section for all admin pages.
     *
     * @since 2.1.0
     */
    do_action('admin_head');
    /**
     * Injected style
     */
    $stack = \apply_filters("bb_builder_inject_style", []);

    foreach ($stack as $entry) {
        echo $container->view->injectStyle($entry['name'], $entry['path']);
    }
    ?>
    <script id="nonce-object">
        const BBNonce = "<?php
                            echo wp_create_nonce("wp_rest");
                            ?>";
    </script>
    <script id="post-object">
        const postObject = <?php
                            echo json_encode($container->post->toArray(get_the_ID()))
                            ?>;
    </script>
    <script id="structure-data-object">
        const structuredData = <?php
                                echo json_encode($container->post->getFullStructure(get_the_ID()))
                                ?>;
    </script>
    <script id="builder-blocks">
        var bbBlocks = <?php
                        echo $container->builder->blocks->asJson();
                        ?>
    </script>

    <script id="builder-settings">
        var bbSettings = <?php
                            echo json_encode($container->builder->settings());
                            ?>
    </script>
</head>

<body>
    <?php
    /**
     * General UI
     */
    echo $container->view->partial('builder-content', 'admin');
    echo $container->view->partial('builder-taskbar', 'admin');
    echo $container->view->partial('notification.list', 'admin');

    ?>

    <div id="load-ui" class="bg-extra-2 fixed w-full top-0 left-0 h-full flex flex-wrap items-center content-center justify-center duration-100 ease-in-out transition-all">
        <h1 class="w-full text-center roboto text-primary mb-2 text-xl">Block Builder</h1>
        <p id="loading-message" class="text-center w-full hidden"></p>
        <div class="w-full justify-center flex">
            <a id="error-fix-button" x-action="event" x-options='{"name":"bb-builder-fix-before","attributes":{"ecode":"E1"}}' class="button mr-4 cursor-pointer text-xs bg-primary text-white py-2 px-4 rounded hidden opacity-0 duration-200 transition-all">Apply fix</a>
            <a id="error-view-page" href="<?php echo get_permalink() ?>" class="button mr-4 ml-4 cursor-pointer text-xs py-2 px-4 rounded hidden opacity-0 duration-200 transition-all" target="_blank">View page</a>
            <a id="reload-button" x-action="event" x-options='{"name":"bb-builder-reload-before"}' class="button ml-4 cursor-pointer text-xs py-2 px-4 rounded hidden opacity-0 duration-200 transition-all">Reload</a>
        </div>
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

    <?php
    /**
     * Modals
     */

    echo $container->view->partial('context-menu', 'admin');
    echo $container->view->partial('builder-browse-modal', 'admin');
    echo $container->view->partial('media.modal', 'admin');
    echo $container->view->partial('builder-settings-modal', 'admin');
    echo $container->view->partial('builder-page-settings-modal', 'admin');
    echo $container->view->partial('builder-edit-block', 'admin');
    echo $container->view->partial('builder-walker-modal', 'admin');
    echo $container->view->partial('builder-confirm-delete', 'admin');
    echo $container->view->partial('builder-confirm-duplicate', 'admin');
    echo $container->view->partial('builder-block-spinner', 'admin');
    echo $container->view->partial('builder-block-walker-step', 'admin');
    echo $container->view->partial('builder-block-action-bar', 'admin');
    echo $container->view->partial('builder-block-append', 'admin');
    echo $container->view->partial('builder-block-prepend', 'admin');
    echo $container->view->partial("builder-block-no-content", "admin");
    echo $container->view->partial("notification.single", "admin");
    echo $container->view->partial("content.column-choose-inner", "admin");

    /**
     * Plugin modals
     */
    ?>
    <div x-lazyload="lazyload--plugin--modals"></div>
    <?php

    /**
     * Block Templates
     */
    ?>
    <div x-lazyload="lazyload--block--templates"></div>
    <?php

    /**
     * Control Templates
     */
    ?>
    <div x-lazyload="lazyload--control--templates"></div>
    <?php

    /**
     * Scripts
     */
    do_action("bb_builder_before_inject_style");

    echo $container->view->injectScript('dist.app', 'admin');

    do_action("bb_builder_after_inject_style");

    /**
     * Prints scripts or data before the default footer scripts.
     *
     * @since 1.2.0
     *
     * @param string $data The data to print.
     */
    do_action('admin_footer', '');

    /**
     * Prints scripts and data queued for the footer.
     *
     * The dynamic portion of the hook name, `$hook_suffix`,
     * refers to the global hook suffix of the current page.
     *
     * @since 4.6.0
     */
    do_action("admin_print_footer_scripts-{$hook_suffix}"); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

    /**
     * Prints any scripts and data queued for the footer.
     *
     * @since 2.8.0
     */
    do_action('admin_print_footer_scripts');

    /**
     * Prints scripts or data after the default footer scripts.
     *
     * The dynamic portion of the hook name, `$hook_suffix`,
     * refers to the global hook suffix of the current page.
     *
     * @since 2.8.0
     */
    do_action("admin_footer-{$hook_suffix}"); // phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores

    ?>
</body>

</html>