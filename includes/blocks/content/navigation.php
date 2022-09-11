<?php

namespace BB\Includes\Blocks\Content;

use BB\Includes\Blocks\Block;

class Navigation extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:navigation";

    /**
     * Category of the block
     * 
     * @var string
     */
    protected $category = 'Navigation';

    /**
     * Version of the block
     * 
     * @var string
     */
    protected $version = '0.0.8';

    /**
     * Dependencies of the block
     * 
     * @var array
     */
    protected $dependencies = [
        'core:column',
    ];

    /**
     * Declaration of the different controls available to edit
     * the block being used.
     * 
     * @return array
     */
    protected function _controls(): array
    {
        $controls = $this->controlBase;

        /**
         * Performs an action before adding any controls
         */
        do_action('bb_html_before_controls', $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "navigation",
            "description" => "Contains controls regarding the block content."
        ], function ($controls) {
            $menus = wp_get_nav_menus();
            $arr = [
                0 => "Choose..",
            ];

            foreach ($menus as $menu) {
                $arr[$menu->slug] = $menu->name;
            }

            $controls->select([
                "label" => "Pick Navigation",
                "target" => "content",
                "standalone" => true,
                "options" => $arr,
            ]);

            return $controls->asArray();
        });
        /**
         * Performs an action after adding controls to the section
         */
        do_action('bb_image_after_controls', $controls);

        return $controls->asArray();
    }

    /**
     * Declaration of the different attributes available for the
     * block to be used.
     * 
     * @return array
     */
    protected function _context(): array
    {
        return [
            "items" => [
                [
                    "label" => "Edit",
                    "attrs" => [
                        "x-action" => "event",
                        "x-options" => json_encode([
                            "name" => "bb-block-edit-before",
                            "attributes" => [],
                        ])
                    ]
                ],
                [
                    "label" => "Duplicate",
                    "attrs" => [
                        "x-action" => "event",
                        "x-options" => json_encode([
                            "name" => "bb-block-duplicate-before",
                            "attributes" => [],
                        ])
                    ]
                ],
                [
                    "label" => "Delete",
                    "attrs" => [
                        "x-action" => "event",
                        "x-options" => json_encode([
                            "name" => "bb-block-delete-before",
                            "attributes" => [],
                        ])
                    ]
                ]
            ]
        ];
    }

    /**
     * Declaration of the different attributes available for the
     * block to be used.
     * 
     * @return array
     */
    protected function _attributes(): array
    {
        return [
            "class", "id", "style", "x-action", "x-options"
        ];
    }

    /**
     * Default values of the block
     * 
     * @return array
     */
    protected function _default(): array
    {
        return [
            "class" => "navigation-wrapper w-full",
            "@nav|class" => "flex navigation-content w-full",
            "@nav|style" => [
                "list-style" => "none",
                "display" => "flex",
                "flex-wrap" => "wrap",
                "margin-top" => "10px",
                "margin-bottom" => "10px",
            ],
            "content" => [
                // By using arrays we can spawn blocks instead of raw html
                [
                    // Properties of our item
                    "tag" => "core:navigation-item",
                    "label" => "Home",
                    "@a|href" => "/home",
                ],
                [
                    "tag" => "core:navigation-item",
                    "label" => "Blog",
                    "@a|href" => "/blog",
                ],
                [
                    "tag" => "core:navigation-item",
                    "label" => "About",
                    "@a|href" => "/about",
                ],
                [
                    "tag" => "core:navigation-item",
                    "label" => "Contact",
                    "@a|href" => "/contact",
                ],
            ],
        ];
    }

    /**
     * Specifies the markup strucutre
     * 
     * @return string
     */
    protected function _markup(): string
    {
        return "<div><nav x-inner-content></nav></div>";
    }
}
