<?php

/**
 * Extracted 
 * @var array $pages
 */

?>
<?php
global $container;
?>
<div x-action="toggle" x-options='{"toggle":["translate-y-10", "opacity-0"]}' class="col-12 bg-white flex flex-wrap">
    <a x-toggle class="cursor-pointer py-4 w-full text-center" title="Click to open the menu">
        <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </a>

    <div class="relative w-full">
        <ul x-container class="tabs hidden translate-y-10 opacity-0 duration-200 ease-in-out transition-all bg-light z-50 shadow-sm absolute top-0 flex flex-wrap w-full">
            <?php
            $initial = true;
            foreach ($pages as $name => $label) :
            ?>
                <li class="w-full">
                    <a x-action="tab" <?php if ($initial) : ?> x-initial="true" <?php endif; ?> href="#typography-<?php echo $name ?>-settings" class="tab text-xs text-decoration-none flex py-4 px-4 cursor-pointer border-b transition-opacity duration-200 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <?php
                        echo $label;
                        ?>
                    </a>
                </li>
            <?php
                $initial = false;
            endforeach;
            ?>
            <li class="w-full">
                <a x-action="modal" x-method="toggle" x-options='{"data-id":"builder-settings-modal"}' class="tab text-xs text-decoration-none flex py-4 px-4 cursor-pointer border-b transition-opacity duration-200 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width:1rem;" class="mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    Back
                </a>
            </li>
        </ul>
    </div>
</div>

<div class="col-12">
    <?php
    $initial = true;
    foreach ($pages as $key => $label) :
    ?>
        <div id="typography-<?php echo $key ?>-settings" x-lazyload="lazyload--<?php echo $key ?>--list" x-space="typography" class="browse-modal-container opacity-0 hidden transition-all ease-in-out duration-200 flex flex-wrap items-start content-start w-full py-4">
            <div class="w-full duration-200 ease-in-out transition-all" x-spinner>
                <div class="flex justify-center">
                    <div class="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    <?php
        $initial = false;
    endforeach;
    ?>
</div>