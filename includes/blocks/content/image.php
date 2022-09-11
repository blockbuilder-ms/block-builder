<?php

namespace BB\Includes\Blocks\Content;

use BB\Includes\Blocks\Block;

class Image extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:image";

    /**
     * Category of the block
     * 
     * @var string
     */
    protected $category = 'Content';

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
        do_action('bb_image_before_controls', $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "image",
            "description" => "Contains controls regarding the block content."
        ], function ($controls) {
            $controls->media([
                "label" => "Pick image",
                "target" => "@img|src",
                "only" => ".png,.jpg,.jpeg,.svg,.webp",
                "class" => "col-12",
            ]);

            $controls->dimension([
                'label' => 'Image Width',
                'target' => 'style.width',
                'class' => 'col-12'
            ]);

            $controls->dimension([
                'label' => 'Image Height',
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
            "belongs-to" => "image",
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

            $controls->text([
                "label" => "Title",
                "target" => "title",
                "class" => "col-12"
            ]);

            $controls->readOnlyCtrl([
                "label" => "Unique ID",
                "target" => "data-id",
                "class" => "col-12"
            ]);

            return $controls->asArray();
        });

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Border",
            "name" => "border",
            "belongs-to" => "image",
            "description" => "Contains controls regarding the block borders."
        ], function ($controls) {
            $controls->select([
                "label" => "Border style",
                "target" => "style.border-style",
                "class" => "col-12",
                "options" => [
                    "solid" => "Solid",
                    "dotted" => "Dotted",
                    "double" => "Double",
                ]
            ]);

            $controls->group([
                "label" => "Border Width",
                "name" => "border-width",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => 'style.border-left-width',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => 'style.border-top-width',
                    'class' => 'col-6 last'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => 'style.border-right-width',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => 'style.border-bottom-width',
                    'class' => 'col-6 last'
                ]);

                return $controls->asArray();
            });

            $controls->group([
                "label" => "Border Radius",
                "name" => "border-radius",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => 'style.border-left-radius',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => 'style.border-top-radius',
                    'class' => 'col-6 last'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => 'style.border-right-radius',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => 'style.border-bottom-radius',
                    'class' => 'col-6 last'
                ]);

                return $controls->asArray();
            });

            return $controls->asArray();
        });

        /**
         * Icon Control section
         */
        $controls->section([
            "label" => "Spacing",
            "name" => "spacing",
            "belongs-to" => "image",
            "description" => "Contains controls regarding the block spacing like translate, margin and padding."
        ], function ($controls) {
            $controls->group([
                "label" => "Padding",
                "name" => "padding",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 last'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 last'
                ]);

                return $controls->asArray();
            });

            $controls->group([
                "label" => "Margin",
                "name" => "margin",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 last'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 last'
                ]);

                return $controls->asArray();
            });

            $controls->group([
                "label" => "Translate",
                "name" => "translate",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 last'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 first'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => '@icon.style.font-size',
                    'class' => 'col-6 last'
                ]);

                return $controls->asArray();
            });

            return $controls->asArray();
        });

        /**
         * Icon Control section
         */
        $controls->section([
            "label" => "Animation",
            "name" => "animation",
            "belongs-to" => "image",
            "description" => "Contains controls regarding the block animation."
        ], function ($controls) {
            $controls->select([
                'label' => 'Transition property',
                'target' => 'style.transition-property',
                'class' => 'col-12',
                'options' => [
                    "all" => "All", "opacity" => "Opacity"
                ],
            ]);

            $controls->text([
                'label' => 'Transition duration',
                'target' => 'style.transition-duration',
                'class' => 'col-6 first',
                "conditional" =>  [
                    "append" => "<small class='opacity-50'>ms</small>",
                ]
            ]);

            $controls->select([
                'label' => 'Transition timing functiong',
                'target' => 'style.transition-timing-function',
                'class' => 'col-6 last',
                'options' => [
                    "ease-in" => "ease-in",
                    "ease-out" => "ease-out",
                    "ease-in-out" => "ease-in-out"
                ],
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
            "class", "id", "src", "alt", "style", "x-action", "x-options", "onClick",
            "onMouseOver", "onMouseOut"
        ];
    }

    /**
     * Default values of the block
     * 
     * @return array
     */
    protected function _structure(): array
    {
        return [
            "img"
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
            "class" => "image-wrapper w-full",
            "@img|class" => "w-full",
            "@img|src" => BLOCKBUILDER_FRONTEND_URI . "/images/placeholder-image.png",
        ];
    }

    /**
     * Specifies the markup strucutre
     * 
     * @return string
     */
    protected function _markup(): string
    {
        return "<div><img /></div>";
    }
}
