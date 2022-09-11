<?php

namespace BB\Includes\Views;

class Runtime
{
    protected $actions = [];

    protected $filters = [];

    public function __construct()
    {
        foreach ($this->filters as $hook) {
            add_filter($hook[0], $hook[2], $hook[1], isset($hook[3]) ? $hook[3] : 1);
        }

        foreach ($this->actions as $hook) {
            add_action($hook[0], $hook[2], $hook[1], isset($hook[3]) ? $hook[3] : 1);
        }
    }
}
