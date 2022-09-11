<?php

namespace BB\Includes\Templates;

class Base
{
    /**
     * Blocks currently registered
     */
    public $templates = [];

    public function add($name, $path)
    {
        if (!file_exists($path)) {
            return;
        }

        $file = file_get_contents($path);

        try {
            $arr = json_decode($file, true);
            $this->templates[$name] = $arr;
        } catch (\Exception $e) {
            $this->templates[$name] = $file;
        }
    }

    public function _load($which)
    {
        $path = dirname(__FILE__) . "/{$which}/register.php";

        if (!file_exists($path)) {
            return;
        }

        extract([
            'template' => $this
        ]);

        require_once $path;
    }

    public function __construct()
    {
        do_action('bb_before_template_load', $this->templates, $this);

        $this->_load('actions');
        $this->_load('content');
        $this->_load('footers');
        $this->_load('forms');
        $this->_load('headers');
        $this->_load('text');

        do_action('bb_after_template_load', $this->templates, $this);
    }
}
