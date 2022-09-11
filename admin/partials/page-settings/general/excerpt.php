<?php
global $post;

function setExcerptXPageSettings($html)
{
    return str_replace('id=', 'x-page-setting id=', $html);
}

add_filter('the_editor', 'setExcerptXPageSettings', 10);
?>
<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Excerpt
        </label>
        <?php
        echo wp_editor($post->post_excerpt, 'post_excerpt', [
            'editor_class' => 'resize-none h-36',
        ]);
        ?>
    </div>
</div>
<?php
remove_filter('the_editor', 'setExcerptXPageSettings', 10);
