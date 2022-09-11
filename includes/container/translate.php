<?php

namespace BB\Includes\Container;

final class Translate
{
    public function loadDomain($name, $root)
    {
        load_theme_textdomain($name, $root);
    }
}
