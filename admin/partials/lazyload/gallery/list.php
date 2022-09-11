<?php
$query_images_args = array(
    'post_type'      => 'attachment',
    'post_mime_type' => 'image',
    'post_status'    => 'inherit',
    'posts_per_page' => -1,
);

$query_images = new WP_Query($query_images_args);
?>
<div id="image-gallery" x-listview class="flex flex-wrap mt-4">
    <div class="w-full flex items-center image-actions">
        <a title="Click to view advanced filters">
            <svg xmlns="http://www.w3.org/2000/svg" style="width:16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
        </a>

        <div class="col-4">
            <input x-search type="search" class="w-full py-2 px-4 outline-none" placeholder="Search by image name and ID" />
        </div>
    </div>
    <div class="image-entries overflow-y-auto max-h-70 flex flex-wrap w-full mt-4" x-entries>
        <?php
        foreach ($query_images->posts as $image) :
            $imageUrl = wp_get_attachment_url($image->ID, "medium");
        ?>
            <div class="col-2 mb-4 relative">
                <!-- <div class="flex items-center justify-center w-full absolute top-0 left-0 h-36 loading">
                    <div class="w-full duration-200 ease-in-out transition-all" x-spinner>
                        <div class="flex justify-center">
                            <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="w-full h-36 object-cover relative rounded" style="background-image: url(<?php echo $imageUrl ?>)"></div>
                <div class="w-full absolute top-0 left-0 h-36 bg-primary opacity-50 rounded"></div>
                <div class="w-full flex flex-wrap items-center content-center justify-center absolute top-0 left-0 h-36 rounded">
                    <a x-action="event" x-options='{"name":"bb-media-view","attributes":{"image_id":"<?php echo $image->ID ?>","image_url":"<?php echo $imageUrl ?>","name":"{name}"}}' class="cursor-pointer mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:32px" class="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </a>
                    <a x-action="event" x-options='{"name":"bb-media-pick","attributes":{"image_id":"<?php echo $image->ID ?>","image_url":"<?php echo $imageUrl ?>","name":"{name}"}}' class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width:32px" class="text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </a>
                </div>
            </div>
        <?php
        endforeach;
        ?>
    </div>
</div>

<div id="video-gallery" class="flex flex-wrap">
    <div class="video-actions">

    </div>
    <div class="video-entries">

    </div>
</div>