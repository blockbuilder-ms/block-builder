<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Meta description
        </label>
        <div class="w-full mt-1">
            <?php
            echo wp_editor(get_the_excerpt(), 'post_excerpt', [
                'editor_class' => 'resize-none h-36',
            ]);
            ?>
        </div>
    </div>
</div>