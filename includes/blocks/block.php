<?php

namespace BB\Includes\Blocks;

class Block
{
    /**
     * Controller object base.
     */
    protected $controlBase = false;

    /**
     * Catgory of the block
     * 
     * @var string
     */
    protected $category = "undefined";

    /**
     * Defines whether or not its an universal public block
     * 
     * @var bool
     */
    public $public = true;

    /**
     * Version of the block
     * 
     * @var string
     */
    protected $version = "1.0.0";

    /**
     * Markup of the block
     * 
     * @var string
     */
    protected $markup = "";

    /**
     * Dependencies of the block
     * 
     * @var array
     */
    protected $dependencies = [];

    /**
     * Attributes of the block
     * 
     * @var array
     */
    protected $attributes = [];

    /**
     * Default attribute values for the block
     * 
     * @var array
     */
    protected $default = [];

    /**
     * Fetches thumbnail uri of block
     * 
     * @return string
     */
    public function getThumbnail(): string
    {
        return '';
    }

    /**
     * Fetches tag of block
     * 
     * @return string
     */
    public function getTag(): string
    {
        return $this->tag;
    }

    /**
     * Fetches category of block
     * 
     * @return string
     */
    public function getCategory(): string
    {
        return $this->category;
    }

    /**
     * Fetches version of block
     * 
     * @return array
     */
    public function getDependencies(): array
    {
        return $this->dependencies;
    }

    /**
     * Fetches markup of block
     * 
     * @return string
     */
    public function isPublic(): string
    {
        return $this->public;
    }

    /**
     * Fetches markup of block
     * 
     * @return array|string
     */
    public function getMarkup()
    {
        return $this->markup;
    }

    /**
     * Fetches version of block
     * 
     * @return string
     */
    public function getVersion(): string
    {
        return $this->version;
    }

    /**
     * Checks if markup is multi or singular layout
     * 
     * @return bool
     */
    public function isMultiMarkup(): bool
    {
        return is_array($this->getMarkup());
    }

    /**
     * Converts the block into an array, removing the markup
     * from it beforehand.
     * 
     * @return array
     */
    public function toArray(): array
    {
        $context = get_object_vars($this);
        unset($context['markup']);

        return $context;
    }

    /**
     * Constructs the base of our block
     * 
     * @return void
     */
    public function __construct()
    {
        $this->controlBase = new \BB\Includes\Controls\Base();

        if (method_exists($this, '_markup')) {
            $this->markup = $this->_markup();
        }

        if (method_exists($this, '_attributes')) {
            $this->attributes = $this->_attributes();
        }

        if (method_exists($this, '_structure')) {
            $this->structure = $this->_structure();
        }

        if (method_exists($this, '_default')) {
            $this->default = $this->_default();
        }

        if (method_exists($this, '_controls')) {
            $this->controls = $this->_controls();
        }

        if (method_exists($this, '_context')) {
            $this->context = $this->_context();
        }
    }
}
