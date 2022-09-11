<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
$base = $container->builder->getBlocks();

?>

<div id="blocks" class="browse-modal-container items-start content-start transition-all ease-in-out duration-200 flex flex-wrap w-full py-4 pr-2">
    <?php
    $html = [];
    foreach ($base->blocks as $block) {
        // Make sure it exists before inclusion
        if (!class_exists($block)) {
            continue;
        }

        $instance = new $block;
        if (!$instance->isPublic()) {
            continue;
        }

        if (!isset($html[$instance->getCategory()])) {
            $html[$instance->getCategory()] = [$container->view->partial('block-single', 'admin', [
                'block' => $instance
            ])];
        } else {
            $html[$instance->getCategory()][] = $container->view->partial('block-single', 'admin', [
                'block' => $instance
            ]);
        }
    }

    if (is_array($html)) {
        echo implode("", array_map(function ($entry, $key) use ($container) {
            if (!is_array($entry)) {
                return $entry;
            }

            return $container->view->partial('component.toggle', 'admin', [
                "toggle" => [
                    "label" => $key . ' blocks',
                    "name" => str_replace(" ", "-", strtolower($key)),
                ],
                'view' => function () use ($entry) {
                    echo implode("", $entry);
                }
            ]);
        }, $html, array_keys($html)));
    }

    ?>
</div>