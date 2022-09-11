<?php

namespace BB\Plugins\ContextMenu\Frontend;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        global $container;

        parent::__construct();
    }
}
