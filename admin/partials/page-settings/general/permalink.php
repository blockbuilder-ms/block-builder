<?php global $post;

if (is_string($post)) {
    $post = get_post($post);
} ?>
<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Url
        </label>
        <div x-action="toggle" x-options='{"HideToggleWhenActive":true}' class="flex flex-wrap w-full">
            <div x-toggle>
                <a href="#" class="text-xs mr-2"><?php echo get_permalink($post->ID) ?></a>
            </div>
            <div x-container class="flex hidden opacity-0 items-center w-full">
                <span class="text-xs mr-2"><?php echo str_replace($post->post_name . '/', '', get_permalink($post->ID)) ?></span><input type="text" x-page-setting class="form-input px-4 py-2 w-full my-1" name="post_name" value="<?php echo $post->post_name; ?>">
            </div>
        </div>
    </div>
</div>