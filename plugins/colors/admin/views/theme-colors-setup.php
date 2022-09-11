<?php
$fonts = \BB\Plugins\Typography\Includes\Google\Fonts::all();
$colorItems = [
    [
        "label" => "Primary Color",
        "type" => "color-picker",
        "name" => "primary-theme-color",
    ],
    [
        "label" => "Secondary Color",
        "type" => "color-picker",
        "name" => "secondary-theme-color",
    ],
    [
        "label" => "Extra color 1",
        "type" => "color-picker",
        "name" => "extra-theme-color-1",
    ],
    [
        "label" => "Extra color 2",
        "type" => "color-picker",
        "name" => "extra-theme-color-1",
    ],
    [
        "label" => "Extra color 3",
        "type" => "color-picker",
        "name" => "extra-theme-color-1",
    ],
];
?>
<div class="accordion-toggle w-full mb-4">
    <a x-action="accordion-toggle" x-options='{ "fullPage": true }' href="#colors-setup" class="accordion-header text-decoration-none justify-between items-center content-center flex py-4 px-4 bg-white mx-4 text-sm">
        <span>Color Setup</span>
        <svg xmlns="http://www.w3.org/2000/svg" style="height:16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </a>

    <div id="colors-setup" class="accordion-content relative hidden opacity-0 transition-all duration-200 ease-in-out">
        <div class="flex justify-between items-center content-center">
            <div class="flex items-center content-center left">
                <a x-back title="Click to go back" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" style="height:24px;" class="mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </a>
                <h2>Colors</h2>
            </div>

            <div class="flex items-center content-center right">
                <div class="mx-4">
                    <input type="search" name="s" class="search-input py-2 px-4 text-sm" placeholder="Search by label">
                </div>
            </div>
        </div>
        <div class="px-4">
            <?php
            foreach ($colorItems as $item) :

                switch ($item['type']):
                    case "color-picker":
            ?>
                        <div class="form-group bg-white rounded w-full flex flex-wrap mb-4">
                            <div x-action="color-picker" id="<?php echo $item['name'] ?>" class="form-group w-full px-4 py-4">
                                <label><?php echo $item['label'] ?></label>
                                <div class="flex justify-between items-center content-center w-full mt-2">
                                    <span class="flex items-center text-sm">
                                        <span class="current-color mr-2" style="background:#000;">
                                            <input type="hidden" name="<?php echo $item['name'] ?>" value="#000" />
                                        </span>
                                        Current color
                                    </span>
                                    <button x-button class="button button-primary border-0 font-picker flex flex-wrap py-1 px-4 bg-primary cursor-pointer text-white">
                                        Update
                                    </button>
                                </div>

                                <div x-container></div>
                            </div>
                        </div>

            <?php
                        break;
                endswitch;
            endforeach;
            ?>
        </div>
    </div>
</div>