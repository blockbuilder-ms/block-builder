<?php
global $container;
?>
<div id="builder-walker" class="modal hidden opacity-0 transition-opacity duration-200 ease-in-out flex flex-wrap w-96 h-64 fixed bottom-0 left-0 items-start content-start">
    <div class="col-12">
        <?php
        do_action('bb_builder_walker_modal_before_content');
        ?>
        <div class="flex w-full justify-between items-center">
            <h4 class="text-sm px-4">Blocks in {tag}#{id}</h4>
            <div x-if="all" class="select-entry-area px-2">
                <select name="block-tag-entry" class="w-full py-1 px-4 outline-none border">
                    <option value="*">All</option>
                    <option value="header">Header</option>
                    <option value="content">Content</option>
                    <option value="footer">Footer</option>
                </select>
            </div>
        </div>

        <div class="flex mx-2 justify-center">
            <input type="search" name="q" x-search class="w-full px-2 py-2 border outline-none" placeholder="Search by selector or tag" />
        </div>

        <div class="walker-container mt-4 mx-2" x-content></div>
        <?php
        do_action('bb_builder_walker_modal_after_content');
        ?>
    </div>
</div>