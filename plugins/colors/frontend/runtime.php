<?php

namespace BB\Plugins\Colors\Frontend;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        global $container;

        /**
         * Actions used by the current view runtime
         */
        $this->actions = [];


        parent::__construct();
    }
}
