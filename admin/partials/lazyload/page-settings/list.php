<?php
global $container;
?>

<?php
do_action('bb_builder_before_page_settings');

/**
 * General settings toggle tab
 */
echo $container->view->partial('component.toggle', 'admin', [
    'toggle' => [
        'label' => 'General',
        'name' => 'general',
    ],
    'view' => function () {
        do_action('bb_builder_render_general_toggle');
    }
]);

/**
 * Layout toggle tab
 */
echo $container->view->partial('component.toggle', 'admin', [
    'toggle' => [
        'label' => 'Layout',
        'name' => 'layout',
    ],
    'view' => function () {
        do_action('bb_builder_render_layout_toggle');
    }
]);

/**
 * Custom fields toggle tab
 */
echo $container->view->partial('component.toggle', 'admin', [
    'toggle' => [
        'label' => 'Custom Fields',
        'name' => 'custom-fields',
    ],
    'view' => function () {
        do_action('bb_builder_render_custom-fields_toggle');
    }
]);

/**
 * Custom fields toggle tab
 */
echo $container->view->partial('component.toggle', 'admin', [
    'toggle' => [
        'label' => 'Performance',
        'name' => 'performance',
    ],
    'view' => function () {
        do_action('bb_builder_render_performance_toggle');
    }
]);

/**
 * Custom fields toggle tab
 */
echo $container->view->partial('component.toggle', 'admin', [
    'toggle' => [
        'label' => 'Debugging',
        'name' => 'debugging',
    ],
    'view' => function () {
        do_action('bb_builder_render_debugging_toggle');
    }
]);

do_action('bb_builder_after_page_settings');
