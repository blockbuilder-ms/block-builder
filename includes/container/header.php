<?php

namespace BB\Includes\Container;

final class Header
{
    public function register()
    {
        (new \BB\Includes\PostTypes\Header)->register();
    }

    public function all()
    {
        return (new \BB\Includes\PostTypes\Header)->all();
    }

    public function generate($id)
    {
        global $container;

        if (0 === $id) {
            return '';
        }

        if (false === $container->settings->show_header) {
            return '';
        }

        /**
         * Building a html version of the structure
         * 
         * @var array $structure the structure that will generate the content
         * @var bool $builder specifies whether or not the instance is a builder instance 
         */
        $html = $this->render([], true);

        return $html;
    }

    private function render($structure, $builder = false)
    {
        global $container;

        if (0 === count($structure)) {
            return $container->view->partial('content.header-not-found', 'admin');
        }
    }
}
