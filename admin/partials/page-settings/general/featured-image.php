<?php
global $post;
?>
<div class="form-group w-full flex flex-wrap">
    <div class="w-full">
        <?php if (has_post_thumbnail($post->ID)) : ?>
            <?php $src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full'); ?>
            <input type="hidden" name="featured-image" x-page-setting value="<?php echo get_post_thumbnail_id($post->ID) ?>">
            <img class="w-full object-cover h-36" src="<?php echo $src[0] ?>">
            <div class="w-full flex flex-wrap items-center content-center justify-center">
                <a x-action="media" x-subaction="open" class="text-decoration-none font-bold text-xs py-2" href="#">Update featured image</a>
            </div>
        <?php else : ?>
            <div class="w-full flex flex-wrap items-center content-center justify-center bg-white h-36">
                <h4 class="w-full text-center px-4 text-sm">No featured image has been set for this <?php echo get_post_type(get_the_ID()); ?></h4>
                <a x-action="media" x-subaction="open" class="text-decoration-none text-xs" href="#">Set featured image</a>
            </div>
        <?php endif; ?>
    </div>
</div>