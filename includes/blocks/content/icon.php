<?php

namespace BB\Includes\Blocks\Content;

use BB\Includes\Blocks\Block;

class Icon extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:icon";

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
    protected $version = '0.0.6';

    /**
     * Dependencies of the block
     * 
     * @var array
     */
    protected $dependencies = [
        'core:column'
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
        do_action("bb_icon_before_controls", $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "icon",
            "description" => "Contains controls regarding the block content."
        ], function ($controls) {
            $controls->select([
                "label" => "Layout",
                "target" => "x-layout",
                "class" => "col-12",
                "options" => [
                    "default" => "Choose",
                    "style-1" => "Style 1",
                    "style-2" => "Style 2",
                ],
            ]);

            return $controls->asArray();
        });

        /**
         * Performs an action after adding controls to the section
         */
        do_action("bb_icon_after_controls", $controls);

        return $controls->asArray();
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
            "x-layout", "x-hydrate", "label", "class", "id", "style",
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
            "default" => [
                "content" => [
                    [
                        "tag" => "core:row",
                        "content" => [
                            [
                                "tag" => "core:column",
                                "x-each" => "core:post",
                                "x-style" => "default",
                            ]
                        ]
                    ]
                ]
            ],
            "style-1" => [
                "content" => [
                    [
                        "tag" => "core:row",
                        "content" => [
                            [
                                "tag" => "core:column",
                                "x-each" => "core:post",
                                "x-style" => "style-1",
                            ]
                        ]
                    ]
                ]
            ],
            "style-2" => [
                "content" => [
                    [
                        "tag" => "core:row",
                        "content" => [
                            [
                                "tag" => "core:column",
                                "x-each" => "core:post",
                                "x-style" => "style-2",
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }

    /**
     * Specifies the markup strucutre
     * 
     * @return array
     */
    protected function _markup(): array
    {
        return [
            "default" => "<div x-content></div>",
            "style-1" => "<div x-inner-content></div>",
        ];
    }
}
