<?php

namespace BB\Includes\PostTypes;

final class Header extends Base
{
    protected $name = 'Header';
    protected $slug = 'header';

    protected $supports = [
        'title', 'author', 'custom-fields', 'revisions'
    ];

    protected $options = [
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'header'),
        'hierarchical' => true,
        'query_var' => true,
    ];

    protected function labels()
    {
        return [
            'name' => _x($this->name . 's', 'plural'),
            'singular_name' => _x($this->name, 'singular'),
            'menu_name' => _x($this->name, 'admin menu'),
            'name_admin_bar' => _x($this->name, 'admin bar'),
            'add_new' => _x('Add New', 'add new'),
            'add_new_item' => __('Add new ' . $this->slug, 'bb-block-builder'),
            'new_item' => __('New ' . $this->slug, 'bb-block-builder'),
            'edit_item' => __('Edit ' . $this->slug, 'bb-block-builder'),
            'view_item' => __('View ' . $this->slug, 'bb-block-builder'),
            'all_items' => __('All ' . $this->slug . 's', 'bb-block-builder'),
            'search_items' => __('Search ' . $this->slug . 's', 'bb-block-builder'),
            'not_found' => __('No ' . $this->slug . 's found', 'bb-block-builder'),
        ];
    }
}
