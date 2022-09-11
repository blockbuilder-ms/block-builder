<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('page-settings.seo.title', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.seo.description', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('page-settings.seo.keywords', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>