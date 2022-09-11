<?php

namespace BB\Includes\Blocks\Content;

use BB\Includes\Blocks\Block;

class Post extends Block
{
    /**
     * Tag name of the block
     * 
     * @var string
     */
    protected $tag = "core:post";

    /**
     * Category of the block
     * 
     * @var string
     */
    protected $category = 'Adv. Content';

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
        do_action("bb_post_before_controls", $controls);

        /**
         * Content Control section
         */
        $controls->section([
            "label" => "Content",
            "name" => "content",
            "belongs-to" => "post",
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

            $controls->select([
                "label" => "Post",
                "target" => "x-hydrate",
                "class" => "col-12",
                "x-if" => "x-layout!=default",
                "lazyload" => true,
                "lazyload_using" => "block-builder/v1/posts/?fields=ID,post_title",
            ]);

            return $controls->asArray();
        });

        /**
         * Performs an action after adding controls to the section
         */
        do_action("bb_post_after_controls", $controls);

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
                "style" => [
                    "height" => ["200", "px"],
                    "display" => "flex",
                    "justify-content" => "center",
                    "align-items" => "center",
                    "align-content" => "center",
                ],
                "label" => "Please choose a style for the post.",
            ],
            "style-1" => [
                "content" => [
                    [
                        "tag" => "core:row",
                        "content" => [
                            [
                                "tag" => "core:column",
                                "style" => [
                                    "display" => "flex",
                                ],
                                "content" => [
                                    [
                                        "tag" => "core:image",
                                        "x-slot" => ["@img|src", "attachments.post_thumbnail"],
                                        "style" => [
                                            "width" => ["100", "%"],
                                            "height" => ["100", "%"],
                                            "border-top-left-radius" => ['8', 'px'],
                                            "border-top-right-radius" => ['8', 'px'],
                                        ]
                                    ]
                                ]
                            ],
                        ],
                    ],
                    [
                        "tag" => "core:row",
                        "style" => [
                            "display" => "flex",
                            "flex-wrap" => "wrap",
                            "width" => ["100", "%"],
                        ],
                        "content" => [
                            [
                                "tag" => "core:column",
                                "style" => [
                                    "width" => ["100", "%"],
                                    "padding-left" => ['15', 'px'],
                                    "padding-top" => ['15', 'px'],
                                    "padding-right" => ['15', 'px'],
                                    "padding-bottom" => ['15', 'px'],
                                    "box-shadow" => "0 5px 10px -4px rgba(0,0,0,.25)",
                                ],
                                "content" => [
                                    [
                                        "tag" => "core:row",
                                        "style" => [
                                            "width" => ["100", "%"],
                                        ],
                                        "content" => [
                                            [
                                                "tag" => "core:column",
                                                "style" => [
                                                    "width" => ["100", "%"],
                                                    "padding-left" => ['0', 'px'],
                                                    "padding-right" => ['0', 'px'],
                                                ],
                                                "content" => [
                                                    [
                                                        "tag" => "core:header",
                                                        "x-key" => "post_title",
                                                        "style" => [
                                                            "font-family" => "'Roboto', sans-serif",
                                                            "font-size" => ['1.2', 'rem'],
                                                            "text-transform" => "capitalize",
                                                            "margin-top" => ['5', 'px'],
                                                            "margin-bottom" => ['0', 'px'],
                                                        ]
                                                    ]
                                                ]
                                            ],
                                        ],
                                    ],
                                    [
                                        "tag" => "core:row",
                                        "style" => [
                                            "width" => ["100", "%"],
                                        ],
                                        "content" => [
                                            [
                                                "tag" => "core:column",
                                                "style" => [
                                                    "width" => ["100", "%"],
                                                    "padding-left" => ['0', 'px'],
                                                    "padding-right" => ['0', 'px'],
                                                ],
                                                "content" => [
                                                    [
                                                        "tag" => "core:paragraph",
                                                        "x-key" => "post_excerpt",
                                                        "style" => [
                                                            "font-family" => "'Open Sans', sans-serif",
                                                            "font-size" => ['0.9', 'rem'],
                                                            "line-height" => ['1.2', 'rem'],
                                                            "margin-top" => ['5', 'px'],
                                                            "margin-bottom" => ['5', 'px'],
                                                            "max-height" => ['60', 'px'],
                                                            "overflow" => "hidden",
                                                        ]
                                                    ]
                                                ]
                                            ],
                                        ],
                                    ],
                                    [
                                        "tag" => "core:row",
                                        "style" => [
                                            "width" => ["100", "%"],
                                        ],
                                        "content" => [
                                            [
                                                "tag" => "core:column",
                                                "style" => [
                                                    "width" => ["100", "%"],
                                                    "display" => 'flex',
                                                    "border-top-width" => ['1', 'px'],
                                                    "border-bottom-width" => ['0', 'px'],
                                                    "border-left-width" => ['0', 'px'],
                                                    "border-right-width" => ['0', 'px'],
                                                    "border-color" => "#e5e5e5",
                                                    "border-style" => "solid",
                                                    "padding-top" => ["10", "px"],
                                                    "padding-right" => ["10", "px"],
                                                    "padding-left" => ['0', 'px'],
                                                    "margin-top" => ["10", "px"],
                                                    "justify-content" => "flex-end"
                                                ],
                                                "content" => [
                                                    [
                                                        "tag" => "core:link",
                                                        "label" => "Click to read more",
                                                        "style" => [
                                                            "font-family" => "'Roboto', sans-serif",
                                                            "font-size" => ['0.8', 'rem'],
                                                            "line-height" => ['1.2', 'rem'],
                                                            "text-decoration" => "none",
                                                            "font-weight" => "700",
                                                            "cursor" => "pointer",
                                                        ],
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ],
                            ],
                        ],
                    ],
                ],
                "style" => [
                    "height" => "auto",
                    "display" => "flex",
                    "flex-wrap" => "wrap",
                    "margin-top" => ['15', 'px'],
                    "border-top-left-radius" => ['8', 'px'],
                    "border-top-right-radius" => ['8', 'px'],
                    "border-bottom-left-radius" => ['8', 'px'],
                    "border-bottom-right-radius" => ['8', 'px'],
                    "justify-content" => "flex-start",
                    "align-items" => "flex-start",
                    "align-content" => "flex-start",
                    "border-color" => "#e5e5e5",
                    "border-style" => "solid",
                    "border-top-width" => ["1", "px"],
                    "border-right-width" => ["1", "px"],
                    "border-left-width" => ["1", "px"],
                    "border-bottom-width" => ["1", "px"]
                ],
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
            // "style-1" => "<div><div id='post-image' x-key='attachments.post_thumbnail'></div><div id='post-content'><h4 id='post-title' x-key='post_title' x-if='showTitle'></h4><span id='post-subtitle' x-key='post_subtitle' x-if='showSubtitle'></span><div id='post-excerpt' x-key='post_excerpt' x-if='showExcerpt'></div><div id='post-actions'><a x-slot='[\"href\",\"permalink\"]'>Click to read more</a></div></div></div>"
        ];
    }
}
