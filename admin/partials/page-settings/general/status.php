<?php
global $post;
?>
<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Status
        </label>
        <select x-page-setting name="post-status" class="form-input py-2 px-4 mt-1">
            <option <?php echo $post->post_status === "draft" ? "selected" : "" ?> value="draft">Draft</option>
            <option <?php echo $post->post_status === "publish" ? "selected" : "" ?> value="publish">Publish</option>
            <option <?php echo $post->post_status === "private" ? "selected" : "" ?> value="private">Private</option>
            <option <?php echo $post->post_status === "scheduled" ? "selected" : "" ?> value="scheduled">Scheduled</option>
        </select>
    </div>
</div>