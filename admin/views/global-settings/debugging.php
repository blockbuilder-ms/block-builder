<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('global-settings.debugging.rebuild-column-sizes', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('global-settings.debugging.inline-styles', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('global-settings.debugging.disable-webp', 'admin', [
        'runtime' => $this,
    ]);
    ?>
</div>