<?php

namespace BB\Includes\Blocks\Extend;

class Extension
{
    public function applyTo($target)
    {
        $this->parent = $target;

        if (method_exists($this, 'resolve')) {
            $this->resolve();
        }
    }
}
