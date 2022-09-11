<?php

namespace BB\Includes\Blocks;

class Base
{
    /**
     * Blocks currently registered
     * 
     * @var array
     */
    public $blocks = [
        \BB\Includes\Blocks\Button\Button::class,
        \BB\Includes\Blocks\Button\FancyLink::class,
        \BB\Includes\Blocks\Button\Link::class,
        \BB\Includes\Blocks\Content\Image::class,
        \BB\Includes\Blocks\Content\Badge::class,
        \BB\Includes\Blocks\Content\Carousel::class,
        \BB\Includes\Blocks\Content\ContentBox::class,
        \BB\Includes\Blocks\Content\Divider::class,
        \BB\Includes\Blocks\Content\FancyList::class,
        \BB\Includes\Blocks\Content\Html::class,
        \BB\Includes\Blocks\Content\Icon::class,
        \BB\Includes\Blocks\Content\Navigation::class,
        \BB\Includes\Blocks\Content\NavigationItem::class,
        \BB\Includes\Blocks\Content\Iframe::class,
        \BB\Includes\Blocks\Content\Post::class,
        \BB\Includes\Blocks\Content\Posts::class,
        \BB\Includes\Blocks\Content\PriceTable::class,
        \BB\Includes\Blocks\Content\Shortcode::class,
        \BB\Includes\Blocks\Content\Slider::class,
        \BB\Includes\Blocks\Content\Table::class,
        \BB\Includes\Blocks\Content\Testimonial::class,
        \BB\Includes\Blocks\Content\Video::class,
        \BB\Includes\Blocks\Input\Checkbox::class,
        \BB\Includes\Blocks\Input\Date::class,
        \BB\Includes\Blocks\Input\Form::class,
        \BB\Includes\Blocks\Input\Number::class,
        \BB\Includes\Blocks\Input\Radiobox::class,
        \BB\Includes\Blocks\Input\Select::class,
        \BB\Includes\Blocks\Input\Text::class,
        \BB\Includes\Blocks\Input\Textarea::class,
        \BB\Includes\Blocks\Input\Time::class,
        \BB\Includes\Blocks\Layout\Row::class,
        \BB\Includes\Blocks\Layout\Column::class,
        \BB\Includes\Blocks\Layout\Grid::class,
        \BB\Includes\Blocks\Text\Header::class,
        \BB\Includes\Blocks\Text\Paragraph::class,
    ];

    /**
     * Renders the template of the blocks
     * 
     * @return void
     */
    public function renderBlockTemplates(): void
    {
        foreach ($this->blocks as $block) {
            $inst = new $block;

            if ($inst->isMultiMarkup()) {
                foreach ($inst->getMarkup() as $key => $markup) {
?>
                    <template id="bb-block-<?php echo $inst->getTag() ?>-<?php echo $key ?>">
                        <?php
                        echo $markup;
                        ?>
                    </template>
                <?php
                }
            } else {
                ?>
                <template id="bb-block-<?php echo $inst->getTag() ?>">
                    <?php
                    echo (new $inst)->getMarkup();
                    ?>
                </template>
<?php
            }
        }
    }

    /**
     * Returns the block stack as json format
     * 
     * @return string
     */
    public function asJson(): string
    {
        return json_encode(array_map(function ($entry) {
            return (new $entry)->toArray();
        }, $this->blocks));
    }

    /**
     * Constructs our block base
     * 
     * @return object
     */
    public function __construct()
    {
        do_action('bb_before_registering_blocks', $this->blocks, $this);

        /**
         * Allow to extend or change the blocks using filter
         */
        $this->blocks = apply_filters('bb_register_blocks', $this->blocks, $this);
        $this->controlBase = new \BB\Includes\Controls\Base();

        do_action('bb_after_registering_blocks', $this->blocks, $this);

        add_action('bb_block_templates', [$this, 'renderBlockTemplates']);
    }
}
