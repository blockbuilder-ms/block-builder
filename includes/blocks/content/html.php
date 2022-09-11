<?php

namespace BB\Includes\Blocks\Content;

use BB\Includes\Blocks\Block;

class Html extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:html";

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
        do_action('bb_html_before_controls', $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "html",
            "description" => "Contains controls regarding the block content."
        ], function ($controls) {
            $controls->wpEditor([
                'label' => 'HTML',
                'target' => 'content',
                'class' => 'col-12',
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
            "class", "id", "style", "content",
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
            "content" => "Click to change the content",
            "class" => "html-wrapper w-full",
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
