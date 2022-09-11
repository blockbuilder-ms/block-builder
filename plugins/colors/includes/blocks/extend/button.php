<?php

namespace BB\Plugins\Colors\Includes\Blocks\Extend;

use BB\Includes\Blocks\Extend\Extension;

class Button extends Extension
{
    /**
     * Will run when the extension is being resolved.
     * The extension of the parent should be done inside of this method.
     * 
     * @return void
     */
    protected function resolve(): void
    {
        $this->addColorPickerFields();
    }

    /**
     * Will add all the different color picker fields the button needs
     * like for background and normal text color, border color and more.
     * 
     * @return void
     */
    private function addColorPickerFields(): void
    {
        add_filter("bb_section_button_font_content", function ($current, $controls) {
            $controls->colorPicker([
                "id" => "text-color",
                'label' => 'Text Color',
                'target' => 'style.color',
                'class' => 'col-12'
            ]);

            return $controls->asArray();
        }, 10, 2);

        add_filter("bb_section_button_icon_content", function ($current, $controls) {
            $controls->colorPicker([
                "id" => "icon-color",
                'label' => 'Icon Color',
                'target' => '@icon.style.color',
                'class' => 'col-12'
            ]);

            return $controls->asArray();
        }, 10, 2);

        add_filter("bb_section_button_general_content", function ($current, $controls) {
            $controls->colorPicker([
                "id" => "background-color",
                'label' => 'Background Color',
                'target' => 'style.background-color',
                'class' => 'col-12'
            ]);

            return $controls->asArray();
        }, 10, 2);


        add_filter("bb_section_button_border_content", function ($current, $controls) {
            $controls->colorPicker([
                "id" => "border-color",
                'label' => 'Border Color',
                'target' => 'style.border-color',
                'class' => 'col-12'
            ]);

            return $controls->asArray();
        }, 10, 2);
    }
}
