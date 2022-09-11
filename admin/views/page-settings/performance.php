<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('page-settings.performance.optimized-load', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.performance.static-serve', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.performance.minify-output', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>