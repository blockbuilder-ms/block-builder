<?php

namespace BB\Includes\Container;

final class Post
{
    private $primaryColumns =  [
        "ID",
        "post_author",
        "post_date",
        "post_date_gmt",
        "post_content",
        "post_content_filtered",
        "post_title",
        "post_excerpt",
        "post_status",
        "post_type",
        "comment_status",
        "ping_status",
        "post_password",
        "post_name",
        "to_ping",
        "pinged",
        "post_modified",
        "post_modified_gmt",
        "post_parent",
        "menu_order",
        "post_mime_type",
        "guid",
        "import_id",
        "post_category",
        "tags_input",
        "tax_input",
        "meta_input"
    ];

    /**
     * Will generate builder markup
     */
    public function generate($id)
    {
        global $container;

        if (0 === $id) {
            return '';
        }

        /**
         * Building a html version of the structure
         * 
         * @var array $structure the structure that will generate the content
         * @var bool $builder specifies whether or not the instance is a builder instance 
         */
        $html = $container->builder->render([], true);

        return $html;
    }

    public function getStructure($id)
    {
        $structure = get_post_meta($id, 'post_block_builder_structure', true);

        if (!$structure) {
            $structure = [];
        }

        return $structure;
    }

    public function getFullStructure($id)
    {
        global $container;

        $structure = get_post_meta($id, 'post_block_builder_structure', true);

        $headerId = get_post_meta($id, "bb_header", true);
        $footerId = get_post_meta($id, "bb_footer", true);

        if (!$headerId) {
            $headerId = $container->settings->header;
        }

        if (!$footerId) {
            $footerId = $container->settings->footer;
        }

        $headerStructure = [];
        $footerStructure = [];

        if ($headerId) {
            $headerStructure = get_post_meta($headerId, 'post_block_builder_structure', true);
        }

        if ($footerId) {
            $footerStructure = get_post_meta($footerId, 'post_block_builder_structure', true);
        }

        return [
            'header' => $headerStructure ? $headerStructure : [],
            'content' => $structure ? $structure : [],
            'footer' =>  $footerStructure ? $footerStructure : [],
        ];
    }
    public function save($id, $data)
    {
        $primary = $this->primaryColumns;
        $primaryKeys = [];
        $secondaryKeys = [];

        foreach ($data as $k => $v) {
            if (in_array($k, $primary)) {
                // Primary key
                $primaryKeys[$k] = $v;
                continue;
            }

            $secondaryKeys[$k] = $v;
        }

        $args = [
            "ID" => $id,
            "meta_input" => $secondaryKeys,
        ];

        $args = array_merge($args, $primaryKeys);

        if (!\wp_update_post($args)) {
            // Failed to update
            return false;
        }

        return true;
    }

    public function empty($id): bool
    {
        $structure = $this->getStructure($id);

        return 0 === count($structure);
    }

    public function toArray($id): array
    {
        $post = \get_post($id);

        return (array) $post;
    }
}
