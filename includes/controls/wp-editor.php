<?php

namespace BB\Includes\Controls;

class wpEditor extends Control
{
    protected $id = 'wp-editor';
    /**
     * Builds the structure of the control
     * 
     * @param array $args
     * @return array
     */
    public function _build(array $args = []): array
    {
        $type = "control";
        $data = [
            "type" => $type,
            "_id" => $this->id,
        ];

        foreach ($args[0] as $k => $v) {
            $data[$k] = $v;
        }

        return $data;
    }

    /**
     * Returns content of a markup file
     * 
     * @return string
     */
    public function markup(): string
    {
        return $this->markupFile('wp-editor');
    }
}
