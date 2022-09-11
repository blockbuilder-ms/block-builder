<?php
$fields = get_post_meta(get_the_ID());

?>
<div class="list-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Custom fields
        </label>

        <div class="w-full flex flex-wrap">
            <?php

            foreach ($fields as $name => $value) :
            ?>
                <div class="w-full">
                    <div class="w-full flex flex-wrap">
                        <div class="w-full flex">
                            <div class="flex w-full justify-between bg-white  py-2 px-4 my-2">
                                <span class="w-full">
                                    <input type="text" class="transparent-input" value="<?php echo $name; ?>" placeholder="Field key">
                                </span>
                                <span class="flex w-full items-center content-center">
                                    <span class="value">
                                        <input type="text" class="transparent-input" value="<?php echo $value[0]; ?>" placeholder="Field value">
                                    </span>
                                </span>
                            </div>
                            <span style="width:40px" class="actions flex items-center content-center">
                                <a class="ml-2 cursor-pointer opacity-50 hover:opacity-100 transition-all ease-in-out duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" style="height:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </a>

                                <a class="ml-2 cursor-pointer opacity-50 hover:opacity-100 transition-all ease-in-out duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" style="height:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
        </div>
    </div>
</div>