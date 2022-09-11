<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('page-settings.layout.header', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.layout.footer', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>