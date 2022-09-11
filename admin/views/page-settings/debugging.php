<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('page-settings.debugging.debug', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.debugging.monitor', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.debugging.debugbar', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>