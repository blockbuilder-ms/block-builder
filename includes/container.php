<?php

namespace BB\Includes;

use BB\Includes\Abstracts\Container as AbstractContainer;

final class Container extends AbstractContainer
{
    public function __construct()
    {
    }

    /**
     * Extends the container.
     */
    public function extend($property, $className)
    {
        try {
            $this->extensions[$property] = new $className;

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Fetch extension if one is available.
     * 
     * @return bool|mixed
     */
    public function __get($key)
    {
        if (isset($this->extensions[$key])) {
            return $this->extensions[$key];
        }

        return isset($this->{$key}) ? $this->{$key} : false;
    }

    /**
     * Runs the container
     */
    public function run()
    {
    }
}
