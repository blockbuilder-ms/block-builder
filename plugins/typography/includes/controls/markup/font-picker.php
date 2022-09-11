<div id="{id}" class="form-group mb-4">
    <label>{label}</label>
    <div class="flex justify-between items-center content-center w-full mt-1">
        <span class="flex items-center text-sm" x-value>Current font family</span>
        <input type="hidden" name="{target}" x-value-hidden>
        <button x-action="font-picker" class="button button-primary border-0 font-picker flex flex-wrap py-1 px-4 bg-primary cursor-pointer text-white">
            Update
        </button>
    </div>

    <div class="font-picker-modal opacity-0 hidden duration-200 ease-in-out transition-opacity absolute top-0 left-0 flex flex-wrap items-start content-start bg-white h-full">
        <div class="flex w-full justify-between items-center">
            <h5 class="w-full mb-0 mt-0">Available Fonts <small>Hover to view example</small></h5>
            <a x-close title="Click to close the font picker window." class="cursor-pointer">
                <svg xmlns=" http://www.w3.org/2000/svg" style="width:14px;" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
        <div class="font-search w-full flex mt-1">
            <input x-search type="search" name="font-search" class="w-full px-2 py-2 border outline-none" placeholder="Search for the font" />
        </div>

        <div class="font-picker-container flex flex-wrap w-full items-start content-start font-container">
            <?php
            if (isset($fonts) && is_array($fonts) && 0 !== count($fonts)) :
                foreach ($fonts as $k => $font) :
                    $mode = 'even';

                    if ($k & 1) {
                        $mode = 'odd';
                    }
            ?>
                    <div x-key="<?php echo strtolower($font['family']) ?>" class="flex flex-wrap justify-between items-center w-full py-1 bg-extra-<?php echo $mode === 'even' ? '1' : '2' ?> px-4">
                        <span class="font-title"><?php echo $font['family'] ?></span>
                        <span class="font-pick flex">
                            <button x-preview x-font="<?php echo $font['family'] ?>" class="primary-button cursor-pointer mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>

                            <button x-add x-font="<?php echo $font['family'] ?>" x-type="<?php echo $font['category'] ?>" class="primary-button cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" style="width:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </span>
                    </div>
                <?php
                endforeach;
            else :
                ?>
                <div class="text-sm px-2">
                    <p class="mt-0 mb-0">We were unable to fetch any fonts.</p>
                    <p class="mt-0 mb-0">Please check your Api key.</p>
                </div>
            <?php
            endif;
            ?>
        </div>
    </div>
</div>