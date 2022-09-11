<?php
global $container;

$path = $container->builder->permalink(get_the_ID());
?>

<div class="iframe-wrapper bg-primary flex flex-wrap justify-center w-full">
    <div id="responsive-view-bar" x-responsive-view class="w-full flex select-none items-center justify-center text-white opacity-0 hidden duration-200 ease-in-out transition-all" style="height:40px;background:#333;">
        <div class="inner flex justify-center items-center">
            <div class="flex items-center">
                <span class="text-xs mr-2 roboto">Viewport</span>
                <select id="viewport" class="rounded outline-none py-1 px-1 border-1 text-white bg-transparent">
                    <?php
                    foreach ($container->builder->viewports as $dimension => $label) :
                    ?>
                        <option value="<?php echo $dimension; ?>" <?php echo $dimension == 1920 ? 'selected' : '' ?> class="text-black"><?php echo $label; ?></option>
                    <?php
                    endforeach;
                    ?>
                </select>

                <a title="Click to apply changes" x-action="event" x-options='{"name":"bb-responsive-update-before"}' class="bg-primary cursor-pointer px-4 py-1 text-sm ml-2 rounded opacity-75 hover:opacity-100 duration-200 ease-in-out transition-all">Apply</a>
            </div>
        </div>
    </div>
    <div id="iframe-inner-wrap" class="bg-white w-full duration-200 ease-in-out transition-all">
        <iframe id="builder-frame" class="duration-200 ease-in-out transition-all" style="width:100%; height: calc( 100vh - 50px);border:0px;" src="<?php echo $path ?>"></iframe>
    </div>
</div>