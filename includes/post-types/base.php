<?php

namespace BB\Includes\PostTypes;

abstract class Base
{
    public function register()
    {
        add_action('init', [$this, '_register']);
    }

    public function all()
    {
        return get_posts(['post_type' => $this->slug]);
    }

    public function _register()
    {
        $options = $this->options;

        if (isset($this->supports)) {
            $options['supports'] = $this->supports;
        }

        if (method_exists($this, 'labels')) {
            $options['labels'] = $this->labels();
        }

        register_post_type($this->slug, $options);
    }

    abstract protected function labels();
}
