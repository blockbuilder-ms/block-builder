<?php

namespace BB\Plugins\Finder\Frontend;

use BB\Includes\Views\Runtime as ViewRuntime;

class Runtime extends ViewRuntime
{
    public function __construct()
    {
        global $container;

        parent::__construct();
    }
}
