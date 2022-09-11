<?php

/**
 * Make sure $block is set correctly.
 */
if (!isset($block)) {
    return;
}

$reflect = new ReflectionClass($block);
$name = $reflect->getShortName();

$thumbnail = $block->getThumbnail();
$version = $block->getVersion();
$tag = $block->getTag();
$dependencies = $block->getDependencies();
$category = $block->getCategory();
?>

<div id="block-single" class="col-6 mb-4">
    <a x-action="drag" draggable="true" x-options='{"type":"block","tag":"<?php echo $tag ?>"}' class="inner cursor-pointer bg-white px-2 mr-2 py-2 flex flex-wrap">
        <?php if ($thumbnail !== '') : ?>
            <div class="thumbnail w-full mb-2">
                <img class="w-full" src="<?php echo $thumbnail; ?>">
            </div>
        <?php endif; ?>
        <h2 class="text-md mx-0 my-0 w-full">
            <span class="flex text-xs w-full justify-between mb-1">
                <span class="flex items-center content-center leading-0"><?php echo $name ?></span>
                <svg xmlns="http://www.w3.org/2000/svg" style="height:12px;" class="opacity-50" fill=" none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
            </span>
            <small class="flex text-xs font-regular text-wide">
                <?php echo $category ?>
                -
                <?php echo $version ?>
            </small>
            <small class="flex text-xs font-regular text-wide mt-2">
                <span class="bb-badge px-2 py-1 rounded">
                    <small><?php echo $tag ?></small>
                </span>
            </small>
        </h2>
    </a>
</div>