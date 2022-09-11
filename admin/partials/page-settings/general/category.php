<?php
global $container;
$categories = get_categories(["post_type" => get_post_type(get_the_ID())]);
$post_categories = wp_get_post_categories(get_the_ID());
$values = array();
$options = array();

foreach ($categories as $c) {
    $options[] = ['value' => $c->slug, 'label' => $c->name];
}

foreach ($post_categories as $c) {
    $cat = get_category($c);
    $values[$cat->slug] = $cat->name;
}
?>
<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-xs">
            Category
        </label>
        <?php
        echo $container->view->partial("component.multi-select", "admin", [
            "value" => $values,
            "name" => "post_category",
            "attributes" => [
                "x-page-setting" => true,
            ],
            "arguements" => [
                "options" => $options
            ]
        ]);
        ?>
    </div>
</div>