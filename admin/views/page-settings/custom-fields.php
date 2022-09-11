<div class="px-4 flex flex-wrap">
    <?php

    echo $container->view->partial('page-settings.custom-fields.create', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.custom-fields.list', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>