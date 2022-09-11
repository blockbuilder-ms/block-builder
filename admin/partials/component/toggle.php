<div class="accordion-toggle w-full mb-4">
    <a x-action="accordion-toggle" x-options='{ "fullPage": true }' href="#<?php echo $toggle['name'] ?>" class="accordion-header text-decoration-none justify-between items-center content-center flex py-4 px-4 bg-white mx-4 text-sm">
        <span><?php echo $toggle['label'] ?></span>
        <svg xmlns="http://www.w3.org/2000/svg" style="height:16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </a>

    <div id="<?php echo $toggle['name'] ?>" class="accordion-content flex flex-wrap hidden opacity-0 transition-all duration-200 ease-in-out">
        <div class="flex justify-between items-center content-center w-full mb-4">
            <div class="flex items-center content-center left">
                <a x-back title="Click to go back" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" style="height:24px;" class="mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </a>
                <h2 class="mt-0 mb-0 text-sm"><?php echo $toggle['label'] ?></h2>
            </div>
        </div>

        <?php
        $view();
        ?>
    </div>
</div>