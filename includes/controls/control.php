<?php

namespace BB\Includes\Controls;

class Control
{
    /**
     * Builds the structure of the control element in question
     * 
     * @param array $args
     * @return array
     */
    public function build(array $args): array
    {
        if (!method_exists($this, '_build')) {
            return [];
        }

        $result = $this->_build($args);

        $return = array_filter($result, function ($item) {
            return (is_array($item) && 0 !== count($item)) || (is_string($item) && $item !== '') || is_bool($item);
        });

        return $return;
    }

    /**
     * Checks if a file exists, then fetches it and returns it's content
     * or empty string if no file was found.
     * 
     * @return string
     */
    public function markupFile(string $path, array $args = []): string
    {
        $base = isset($args['dir']) ? $args['dir'] : dirname(__FILE__) . '/markup/';
        extract($args);

        if (file_exists($base . $path . '.php')) {
            ob_start();
            require $base . $path . '.php';
            $content = ob_get_contents();
            ob_end_clean();

            return $content;
        } else {
            return 'File: BASE(' . $base . ') PATH(' . $path . ').php was not found';
        }
    }

    /**
     * Construct of our control base
     * 
     * @param null|object
     * @return object
     */
    public function __construct(?object $base = null)
    {
        $this->base = $base;
    }
}
