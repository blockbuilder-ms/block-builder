<?php

namespace BB\Includes\Container;

final class Builder
{
    private $settingsKeys = [
        "auto_save", "auto_save_interval", "show_header", "show_footer", "container_width", "header", "footer", "inline_styles", "disable_webp"
    ];

    public $viewports = [
        344 => "Small Mobile",
        411 => "Medium Mobile",
        560 => "Large Mobile",
        680 => "Small Tablet",
        768 => "Medium Tablet",
        1024 => "Large Tablet",
        1280 => "Small Laptop",
        1366 => "Laptop(HD Ready)",
        1600 => "Small Desktop",
        1920 => "Medium Desktop(FULL HD)",
        3840 => "Large Desktop(4K)",
    ];

    public $columns = [];

    private $blockNamespace = "\\BB\\Includes\\Blocks";
    public $blocks = [];

    private $templateNamespace = BLOCKBUILDER_INC_PATH . '\\templates';
    protected $templates = [];

    public function settings()
    {
        global $container;
        $stack = [];

        $keys = apply_filters('bb-builder_settings-keys', $this->settingsKeys);

        foreach ($keys as $key) {
            $stack[$key] = $container->settings->{$key};
        }

        return $stack;
    }

    /**
     * Gets a builder instance of permalink. Allowing us to apply changes.
     */
    public function permalink($id)
    {
        if (0 === $id) {
            return false;
        }

        $path = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        return str_replace('action=block_builder', 'action=block_builder_preview', $path);
    }

    /**
     * Generates HTML markup to be used for rendering
     */
    public function render(array $structure, bool $builder)
    {
        global $container;

        if (0 === count($structure)) {
            return $container->view->partial('content.not-found', 'admin');
        }
    }

    public function getColumnSizes()
    {
        return $this->columns;
    }

    public function addColumnSize($name, $sizes)
    {
        $this->columns[$name] = $sizes;
    }

    public function getBlocks()
    {
        return $this->blocks;
    }

    private function _loadBlocks()
    {
        $this->blocks = (new \BB\Includes\Blocks\Base());
    }

    public function getTemplates()
    {
        return $this->templates;
    }

    private function _loadTemplates()
    {
        $this->templates = (new \BB\Includes\Templates\Base());
    }

    private function _searchInFiles($path, $extension = '.php')
    {
        $found = [];

        $files = @scandir($path);

        if (!is_array($files)) {
            return;
        }

        $files = array_filter($files, function ($file) {
            return $file !== '..' && $file !== '.';
        });

        if (0 === count($files)) {
            return;
        }

        foreach ($files as $file) {
            if (is_dir($path . '\\' . $file)) {
                $filesFound = $this->_searchInFiles($path . '\\' . $file, $extension);

                if (is_array($filesFound) && 0 !== count($filesFound)) {
                    $found = array_merge($found, $filesFound);
                }
            }

            if (is_file($path . '\\' . $file) && strpos($file, $extension) !== false) {
                $found[] = $path . '\\' . $file;
            }
        }

        return $found;
    }


    private function _searchInNamespaces($path, $extension = '.php')
    {
        $namespaces = array();
        foreach (get_declared_classes() as $name) {
            if (preg_match_all("@[^\\\]+(?=\\\)@iU", $name, $matches)) {
                $matches = $matches[0];
                $parent = &$namespaces;
                while (count($matches)) {
                    $match = array_shift($matches);
                    if (!isset($parent[$match]) && count($matches))
                        $parent[$match] = array();
                    $parent = &$parent[$match];
                }
            }
        }

        return $namespaces;
    }

    public function __construct()
    {
        $this->_loadBlocks();
        $this->_loadTemplates();
    }
}
