<?php

namespace BB\Includes\Container;

final class View
{
    /**
     * Checks if current view is admin faced
     */
    public function isApi()
    {
        return strpos($this->link, apply_filters('bb_api_prefix', 'wp-json')) !== false;
    }

    /**
     * Checks if current view is admin faced
     */
    public function isAdmin()
    {
        return strpos($this->link, apply_filters('bb_admin_prefix', 'wp-admin')) !== false;
    }

    /**
     * Checks if current view is public
     */
    public function isPublic()
    {
        return strpos($this->link, apply_filters('bb_admin_prefix', 'wp-admin')) === false;
    }

    /**
     * Fetches a partial view file for render
     */
    public function injectStyle($name, $view = 'public')
    {
        switch ($view) {
            case 'public':

                break;

            case 'admin':
                $path = BLOCKBUILDER_ADMIN_URI . '/style/' . $name . '.css';

                return '<link type="text/css" rel="stylesheet" href="' . $path . '">';

                break;

            default:
                if (strpos($view, '.') !== false) {
                    $path = BLOCKBUILDER_URI;
                    $steps = explode('.', $view);
                    foreach ($steps as $step) {
                        $path .= $step . '/';
                    }

                    return '<link type="text/css" rel="stylesheet" href="' . $path  . $name . '.css' . '">';
                }

                do_action("bb_partial_{$view}", $name);
        }
    }

    /**
     * Fetches a partial view file for render
     */
    public function injectScript($name, $view = 'public')
    {
        switch ($view) {
            case 'public':

                break;

            case 'admin':
                $path = BLOCKBUILDER_ADMIN_URI . '/js/' . implode('/', explode('.', $name)) . '.js';

                return '<script type="text/javascript" src="' . $path . '"></script>';
                break;

            default:
                do_action("bb_script_{$view}", $name);
        }
    }

    /**
     * Fetches a partial view file for render
     */
    public function partial($name, $view = 'public', $extract = [])
    {
        switch ($view) {
            case 'public':

                break;

            case 'admin':
                $path = BLOCKBUILDER_ADMIN_PATH . '\\partials\\' . implode('\\', explode('.', $name)) . '.php';

                if (!file_exists($path)) {
                    return '<p>Partial not found: ' . $name . '</p>';
                }

                extract($extract);

                ob_start();
                require $path;
                $content = str_replace(array("\r", "\n"), '', ob_get_contents());
                ob_end_clean();

                return $content;
                break;

            default:
                $res = apply_filters("bb_partial_{$view}", $name, $extract);
                return $res;
        }
    }

    public function __construct()
    {
        $this->link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    }
}
