<?php
$authors = get_users([
    'fields'  => ['ID', 'display_name'],
    'orderby' => 'display_name',
]);
?>
<div class="form-group w-full flex flex-wrap my-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Which roles can use the builder
        </label>
        <select class="form-input py-2 px-4 mt-1">
            <?php
            if (0 !== count($authors)) {
                foreach ($authors as $author) {
                    echo '<option value="' . $author->ID . '">' . $author->display_name . '</option>';
                }
            } else {
                echo '<option value="0">No users were found.</option>';
            }
            ?>
        </select>
    </div>
</div>