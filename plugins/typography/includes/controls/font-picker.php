<?php

namespace BB\Plugins\Typography\Includes\Controls;

use BB\Includes\Controls\Control;

class FontPicker extends Control
{
    protected $id = 'font-picker';
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
        return $this->markupFile('font-picker', [
            'dir' => dirname(__FILE__) . '/markup/',
            'fonts' => \BB\Plugins\Typography\Includes\Google\Fonts::all()
        ]);
    }
}
