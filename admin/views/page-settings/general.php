<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('page-settings.general.featured-image', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.title', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.permalink', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.status', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.author', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.excerpt', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.category', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.general.tags', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>