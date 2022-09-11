<?php

namespace BB\Plugins\Colors\Includes\Blocks;

class Base
{
    /**
     * Blocks currently registered
     * 
     * @var array
     */
    public $blocks = [];

    public $extends = [
        \BB\Includes\Blocks\Button::class => \BB\Plugins\Colors\Includes\Blocks\Extend\Button::class
    ];

    /**
     * Constructs our block extension base
     * 
     * @return object
     */
    public function __construct()
    {
        foreach ($this->extends as $target => $ext) {
            try {
                (new $ext)->applyTo($target);
            } catch (\Exception $e) {
                // Supress failures for now. while developing.
                continue;
            }
        }
    }
}
