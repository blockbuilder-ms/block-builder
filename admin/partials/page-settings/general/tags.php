<?php
global $container;
$postTags = get_terms('post_tag');

$args = array(
    'type' => get_post_type(),
    'orderby' => 'name',
    'order' => 'ASC'
);
$tagsObject = get_tags($args);

$tags = [];

foreach ($tagsObject as $tag) {
    $tags[] = ["value" => $tag->ID, "label" => $tag->name];
}
?>

<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Tags
        </label>
        <?php
        echo $container->view->partial("component.multi-select", "admin", [
            "value" => $values,
            "name" => "post_tags",
            "attributes" => [
                "x-page-setting" => true,
            ],
            "arguements" => [
                "options" => $tags
            ]
        ]);
        ?>
    </div>
</div>