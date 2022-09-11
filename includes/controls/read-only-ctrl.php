<?php

namespace BB\Includes\Controls;

class readOnlyCtrl extends Control
{
    protected $id = 'read-only-ctrl';

    protected $conditionals = [
        "prepend" => false,
        "append" => false,
    ];

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
            "conditional" => $this->conditionals
        ];

        foreach ($args[0] as $k => $v) {
            if ($k === 'conditional') {
                $data[$k] = array_merge($this->conditionals, $v);
            } else {
                $data[$k] = $v;
            }
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
        return $this->markupFile('read-only-ctrl');
    }
}
