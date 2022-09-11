<?php

namespace BB\Includes\Blocks\Layout;

use BB\Includes\Blocks\Block;

class Column extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:column";

    /**
     * Category of the block
     * 
     * @var string
     */
    protected $category = 'Layout';

    /**
     * Version of the block
     * 
     * @var string
     */
    protected $version = '0.0.9';

    /**
     * Dependencies of the block
     * 
     * @var array
     */
    protected $dependencies = [
        'core:row',
    ];

    /**
     * Declares that the block contains content blocks
     * 
     * @var bool
     */
    protected $hasContent = true;

    /**
     * Declares that the block contains multiple column layout
     * 
     * @var bool
     */
    protected $hasColumns = true;

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
        do_action('bb_column_before_controls', $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "column",
            "description" => "Contains controls regarding the block content."
        ], function ($controls) {
            $controls->dimension([
                'label' => 'Width',
                'target' => 'style.width',
                'class' => 'col-12',
            ]);

            $controls->dimension([
                'label' => 'Height',
                'target' => 'style.height',
                'class' => 'col-12'
            ]);

            return $controls->asArray();
        });

        /**
         * General Control section
         */
        $controls->section([
            "label" => "General",
            "name" => "general",
            "belongs-to" => "column",
            "description" => "Contains general block modifications."
        ], function ($controls) {
            $controls->text([
                "label" => "Id",
                "target" => "id",
                "class" => "col-12",
                "conditional" => [
                    "prepend" => "#"
                ]
            ]);

            $controls->text([
                "label" => "Class",
                "target" => "class",
                "class" => "col-12"
            ]);

            $controls->readOnlyCtrl([
                "label" => "Unique ID",
                "target" => "x-options._id",
                "class" => "col-12"
            ]);

            return $controls->asArray();
        });

        /**
         * Performs an action after adding controls to the section
         */
        do_action('bb_column_after_controls', $controls);

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
            "class" => "col",
            "style" => [
                "padding-left" => "15px",
                "padding-right" => "15px",
            ],
            "@span|class" => "flex items-center content-center justify-center roboto w-full",
            "@a|style" => [
                "margin-top" => "35px",
            ],
            "@span|style" => [
                "font-size" => "14px",
                "font-weight" => "700",
                "padding-bottom" => "35px",
                "font-family" => "Roboto, 'sans-serif'",
                "display" => "flex",
                "text-align" => "center",
                "align-items" => "center",
                "align-content" => "center",
                "justify-content" => "center",
            ]
        ];
    }

    /**
     * Specifies the markup strucutre
     * 
     * @return string
     */
    protected function _markup(): string
    {
        global $container;

        return "<div x-inner-content>" . $container->view->partial("append-to-column", "admin")  . "</div>";
    }
}
