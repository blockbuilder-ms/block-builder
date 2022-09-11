<?php

namespace BB\Includes\Controls;

class Section extends Control
{
    protected $id = 'section';

    /**
     * Builds the structure of the control
     * 
     * @param array $args
     * @return array
     */
    public function _build(array $args = []): array
    {
        $base = new Base;
        $type = $this->id;

        $name = isset($args[0]['name']) ? $args[0]['name'] : '';
        $belongsTo = isset($args[0]['belongs-to']) ? $args[0]['belongs-to'] : '';
        $description = isset($args[0]['description']) ? $args[0]['description'] : '';
        $label = isset($args[0]['label']) ? $args[0]['label'] : '';
        $options = isset($args[0]['options']) ? $args[0]['options'] : [];
        $content = isset($args[1]) && is_callable($args[1]) ? $args[1]($base) : [];

        return [
            "name" => $name !== '' ? $name . '-edit' : '',
            "description" => $description !== '' ? $description : '',
            "label" => $label,
            "belongs-to" => $belongsTo,
            "type" => $type,
            "_id" => $this->id,
            "options" => $options,
            "content" => $belongsTo && $name ? apply_filters("bb_section_{$belongsTo}_{$name}_content", $content, $base) : $content,
        ];
    }

    /**
     * Returns content of a markup file
     * 
     * @return string
     */
    public function markup(): string
    {
        return $this->markupFile('section');
    }
}
