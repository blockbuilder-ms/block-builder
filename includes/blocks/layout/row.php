<?php

namespace BB\Includes\Blocks\Layout;

use BB\Includes\Blocks\Block;

class Row extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:row";

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
    protected $version = '0.0.7';

    /**
     * Dependencies of the block
     * 
     * @var array
     */
    protected $dependencies = [
        '@root', 'core:column'
    ];

    /**
     * Declares that block is an root item.
     * 
     * @var bool
     */
    protected $root = true;

    /**
     * Declares that we want an action bar rendered for the block
     * 
     * @var bool
     */
    protected $showActionBar = true;

    /**
     * Declares that the block contains a content block
     * 
     * @var bool
     */
    protected $hasContent = true;

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
        do_action('bb_row_before_controls', $controls);

        /**
         * Layout Control section
         */
        $controls->section([
            "label" => "Layout",
            "name" => "layout",
            "belongs-to" => "row",
            "description" => "Contains controls regarding the row layout."
        ], function ($controls) {
            $controls->toggle([
                'label' => 'Reverse row direction',
                'target' => 'columns',
                'class' => 'col-12',
            ]);

            $controls->columnPicker([
                'label' => 'Columns',
                'target' => 'columns',
                'class' => 'col-12',
            ]);


            return $controls->asArray();
        });

        /**
         * Layout Control section
         */
        $controls->section([
            "label" => "General",
            "name" => "general",
            "belongs-to" => "row",
            "description" => "Contains controls regarding the row background."
        ], function ($controls) {

            $controls->text([
                'label' => 'ID',
                'target' => 'id',
                'class' => 'col-12'
            ]);

            $controls->text([
                'label' => 'Class',
                'target' => 'class',
                'class' => 'col-12'
            ]);

            $controls->readOnlyCtrl([
                "label" => "Unique ID",
                "target" => "x-options._id",
                "class" => "col-12"
            ]);

            return $controls->asArray();
        });

        /**
         * Layout Control section
         */
        $controls->section([
            "label" => "Background",
            "name" => "background",
            "belongs-to" => "row",
            "description" => "Contains controls regarding the row background."
        ], function ($controls) {

            $controls->media([
                'label' => 'Background Image',
                'target' => 'style.padding-left',
                'class' => 'col-12'
            ]);

            return $controls->asArray();
        });

        /**
         * Layout Control section
         */
        /**
         * Icon Control section
         */
        $controls->section([
            "label" => "Spacing",
            "name" => "spacing",
            "belongs-to" => "button",
            "description" => "Contains controls regarding the block spacing like translate, margin and padding."
        ], function ($controls) {
            $controls->group([
                "label" => "Padding",
                "name" => "padding",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => 'style.padding-left',
                    'class' => 'col-12'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => 'style.padding-top',
                    'class' => 'col-12'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => 'style.padding-right',
                    'class' => 'col-12'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => 'style.padding-bottom',
                    'class' => 'col-12'
                ]);

                return $controls->asArray();
            });

            $controls->group([
                "label" => "Margin",
                "name" => "margin",
            ], function ($controls) {
                $controls->dimension([
                    'label' => 'Left',
                    'target' => 'style.margin-left',
                    'class' => 'col-12'
                ]);

                $controls->dimension([
                    'label' => 'Top',
                    'target' => 'style.margin-top',
                    'class' => 'col-12'
                ]);

                $controls->dimension([
                    'label' => 'Right',
                    'target' => 'style.margin-right',
                    'class' => 'col-12'
                ]);

                $controls->dimension([
                    'label' => 'Bottom',
                    'target' => 'style.margin-bottom',
                    'class' => 'col-12'
                ]);

                return $controls->asArray();
            });

            return $controls->asArray();
        });

        /**
         * Performs an action after adding controls to the section
         */
        do_action('bb_row_after_controls', $controls);

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
            "class" => "row flex relative",
        ];
    }

    /**
     * Specifies the markup strucutre
     * 
     * @return string
     */
    protected function _markup(): string
    {
        return "<div x-inner-content></div>";
    }
}
