<?php

namespace BB\Includes\Blocks\Input;

use BB\Includes\Blocks\Block;

class Date extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:date";

    /**
     * Category of the block
     * 
     * @var string
     */
    protected $category = 'Input';

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
        'core:form',
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
        do_action('bb_date_before_controls', $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "date",
            "description" => "Contains controls regarding the block content."
        ], function ($controls) {
            $controls->text([
                'label' => 'date Label',
                'target' => 'content',
                'class' => 'col-12',
            ]);

            $controls->toggle([
                'label' => 'Show Icon',
                'target' => '@icon',
                'class' => 'col-4'
            ]);

            $controls->toggle([
                'label' => 'Place Icon on the left',
                'target' => '@icon',
                'class' => 'col-4'
            ]);

            return $controls->asArray();
        });

        /**
         * General Control section
         */
        $controls->section([
            "label" => "General",
            "name" => "general",
            "belongs-to" => "date",
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

            $controls->select([
                "label" => "Tag",
                "target" => "type",
                "class" => "col-12",
                "options" => [
                    "a" => "Anchor Link",
                    "date" => "date",
                ],
            ]);

            $controls->readOnlyCtrl([
                "label" => "Unique ID",
                "target" => "x-options._id",
                "class" => "col-12"
            ]);

            return $controls->asArray();
        });

        /**
         * Link Control section
         */
        $controls->section([
            "label" => "Link",
            "name" => "link",
            "belongs-to" => "date",
            "description" => "Contains modifications regarding external and internal link."
        ], function ($controls) {
            $controls->toggle([
                'label' => 'Internal Link?',
                'target' => 'href',
                'class' => 'col-4'
            ]);

            $controls->toggle([
                'label' => 'Preload Link?',
                'target' => 'href',
                'class' => 'col-4'
            ]);

            $controls->url([
                'label' => 'URL',
                'target' => 'href',
                'class' => 'col-12'
            ]);

            $controls->select([
                "label" => "Target",
                "target" => "target",
                "options" => [
                    "_blank" => "New window/tab", "_self" => "Same window"
                ],
                "class" => "col-12"
            ]);

            return $controls->asArray();
        });

        /**
         * Text Control section
         */
        $controls->section([
            "label" => "Font",
            "name" => "font",
            "belongs-to" => "date",
            "description" => "Contains controls regarding the block fonts."
        ], function ($controls) {
            $controls->text([
                'label' => 'Font Size',
                'target' => 'style.font-size',
                'class' => 'col-4 first'
            ]);

            $controls->select([
                'label' => 'Font Weight',
                'target' => 'style.font-weight',
                'class' => 'col-4',
                "options" => [
                    "100" => "100",
                    "200" => "200",
                    "300" => "300",
                    "400" => "400",
                    "500" => "500",
                    "600" => "600",
                    "700" => "700",
                    "800" => "800",
                    "900" => "900",
                ]
            ]);

            $controls->select([
                'label' => 'Font Style',
                'target' => 'style.font-style',
                'class' => 'col-4 last',
                "options" => [
                    "regular" => "Regular",
                    "italic" => "Italic",
                    "bold" => "Bold",
                ]
            ]);

            $controls->text([
                'label' => 'Line Height',
                'target' => 'style.line-height',
                'class' => 'col-4 first'
            ]);

            $controls->text([
                'label' => 'Letter Spacing',
                'target' => 'style.letter-spacing',
                'class' => 'col-4'
            ]);

            $controls->select([
                'label' => 'Text Align',
                'target' => 'style.text-align',
                'class' => 'col-4 last',
                "options" => [
                    "left" => "Left",
                    "center" => "Center",
                    "right" => "Right",
                ]
            ]);

            $controls->fontPicker([
                'label' => 'Font Family',
                'target' => 'style.font-family',
                'class' => 'col-12',
                "options" => [
                    "none-found" => "No font families was found.",
                ]
            ]);

            return $controls->asArray();
        });

        /**
         * Icon Control section
         */
        $controls->section([
            "label" => "Icon",
            "name" => "icon",
            "belongs-to" => "date",
            "description" => "Contains controls regarding the block icon."
        ], function ($controls) {
            $controls->text([
                'label' => 'Icon Size',
                'target' => '@icon.style.font-size',
                'class' => 'col-4 first'
            ]);

            $controls->select([
                'label' => 'Icon Stroke Width',
                'target' => '@icon.style.stroke-width',
                'class' => 'col-4',
                "options" => [
                    "1" => "1px",
                    "2" => "2px",
                    "3" => "3px",
                    "4" => "4px",
                    "5" => "5px",
                ]
            ]);

            $controls->select([
                'label' => 'Icon Align',
                'target' => 'style.font-style',
                'class' => 'col-4 last',
                "options" => [
                    "left" => "Left",
                    "center" => "Center",
                    "right" => "Right",
                ]
            ]);

            $controls->select([
                'label' => 'Choose Icon',
                'target' => '@icon.content',
                'class' => 'col-12',
                "options" => [
                    "none-found" => "No font families was found.",
                ]
            ]);

            return $controls->asArray();
        });

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Border",
            "name" => "border",
            "belongs-to" => "date",
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
            "belongs-to" => "date",
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
            "belongs-to" => "date",
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
        do_action('bb_date_after_controls', $controls);

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
            "class", "id", "name", "value", "checked", "style", "x-action", "x-options", "onClick",
            "onMouseOver", "onMouseOut", "onChange"
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
            "class" => "date-input-wrapper",
            "@input|type" => "date",
            "@input|class" => "date-input",
        ];
    }

    /**
     * Specifies the markup strucutre
     * 
     * @return string
     */
    protected function _markup(): string
    {
        return "<div><input></div>";
    }
}
