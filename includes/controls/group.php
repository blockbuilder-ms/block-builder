<?php

namespace BB\Includes\Controls;

class Group extends Control
{
    protected $id = 'group';

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
        $description = isset($args[0]['description']) ? $args[0]['description'] : '';
        $label = isset($args[0]['label']) ? $args[0]['label'] : '';
        $options = isset($args[0]['options']) ? $args[0]['options'] : [];
        $content = isset($args[1]) && is_callable($args[1]) ? $args[1]($base) : [];

        return [
            "name" => $name !== '' ? $name . '-edit' : '',
            "description" => $description !== '' ? $description : '',
            "label" => $label,
            "type" => $type,
            "_id" => $this->id,
            "options" => $options,
            "content" => apply_filters("bb_group_{$name}_content", $content, $base),
        ];
    }

    /**
     * Returns content of a markup file
     * 
     * @return string
     */
    public function markup(): string
    {
        return $this->markupFile('group');
    }
}
