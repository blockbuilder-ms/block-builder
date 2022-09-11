<?php

namespace BB\Includes\Abstracts;

abstract class Container
{
    /**
     * Extensions
     */
    protected $extensions = [];

    /**
     * Theme support
     */
    protected $supports = [];

    /**
     * Registered post types
     */
    protected $post_types = [];

    /**
     * Registered styles
     */
    protected $styles = [];

    /**
     * Registered scripts
     */
    protected $scripts = [];

    abstract function run();
}
