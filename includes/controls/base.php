<?php

namespace BB\Includes\Controls;

class Base
{
    /**
     * Blocks currently registered
     * 
     * @var array
     */
    public $controls = [
        "column-picker" => \BB\Includes\Controls\ColumnPicker::class,
        "dimension" => \BB\Includes\Controls\Dimension::class,
        "group" => \BB\Includes\Controls\Group::class,
        "media" => \BB\Includes\Controls\Media::class,
        "number" => \BB\Includes\Controls\Number::class,
        "range" => \BB\Includes\Controls\Range::class,
        "read-only-ctrl" => \BB\Includes\Controls\ReadOnlyCtrl::class,
        "section" => \BB\Includes\Controls\Section::class,
        "select" => \BB\Includes\Controls\Select::class,
        "text" => \BB\Includes\Controls\Text::class,
        "textarea" => \BB\Includes\Controls\Textarea::class,
        "toggle" => \BB\Includes\Controls\Toggle::class,
        "url" => \BB\Includes\Controls\Url::class,
        "wp-editor" => \BB\Includes\Controls\wpEditor::class,
    ];

    /**
     * The used entries
     * 
     * @var array
     */
    public $entries = [];

    /**
     * Renders the template of the controls
     * 
     * @return void
     */
    public function renderControlTemplates(): void
    {
        foreach ($this->controls as $k => $control) {
?>
            <template id="bb-control-<?php echo $k ?>">
                <?php
                echo (new $control)->markup();
                ?>
            </template>
<?php
        }
    }

    /**
     * Magic method to handle build event of control upon call
     * plus adding it to the entries stack to keep track
     * 
     * @param string $key
     * @param array $arguments
     * @return mixed
     */
    public function __call(string $key, array $arguments = [])
    {
        $pieces = preg_split('/(?=[A-Z])/', $key);

        $pieces = array_map(function ($entry) {
            return strToLower($entry);
        }, $pieces);

        $key = implode('-', $pieces);
        $name = isset($arguments['name']) ? $arguments['name'] : false;
        $class = isset($this->controls[$key]) ? $this->controls[$key] : false;
        if (false !== $class && method_exists($class, 'build')) {
            if ($name) {
                do_action("dd_before_block_control_{$name}", $this);
            }

            $result = (new $class($this))->build($arguments);
            $this->entries[] = $result;

            if ($name) {
                do_action("dd_after_block_control_{$name}", $this);
            }

            return $result;
        }
    }

    /**
     * Returns the entries array
     * 
     * @return array
     */
    public function asArray(): array
    {
        return $this->entries;
    }

    /**
     * Returns the entries array in json format.
     * 
     * @return string
     */
    public function toJson(): string
    {
        return json_encode($this->entries);
    }

    /**
     * Construction of the object
     */
    public function __construct()
    {
        if (!defined('BB_CONTROLS_INITIALIZED')) {
            define('BB_CONTROLS_INITIALIZED', true);
            add_action('bb_control_templates', [$this, 'renderControlTemplates']);
        }

        $this->controls = apply_filters('bb_block_builder_controls', $this->controls);
    }
}
