<?php

/**
 * Make sure $block is set correctly.
 */
if (!isset($template)) {
    return;
}

$name = $template['name'];

$thumbnail = isset($template['thumbnail']) ? $template['thumbnail'] : '';
$version = isset($template['version']) ? $template['version'] : '';
$category = isset($template['category']) ? $template['category'] : '';
?>
<div id="block-single" class="col-12 mb-4">
    <div class="inner bg-white px-2 py-2 mx-2 flex flex-wrap">
        <?php if ($thumbnail !== '') : ?>
            <div class="thumbnail w-full mb-2">
                <img class="w-full" src="<?php echo $thumbnail; ?>">
            </div>
        <?php endif; ?>
        <h2 class="text-md mx-0 my-0">
            <?php echo $name ?>
            <small class="flex text-xs font-regular text-wide">
                <?php echo $category ?>
                -
                <?php echo $version ?>
            </small>
        </h2>
        <a class="button-primary cursor-pointer flex items-center justify-center content-center uppercase font-bold mt-4 w-full rounded">
            Append Template
        </a>
    </div>

</div>