<div class="px-4 flex flex-wrap">
    <?php
    echo $container->view->partial('global-settings.general.auto-save', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('global-settings.general.full-width-container', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('global-settings.general.container-width', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('global-settings.general.show-header', 'admin', [
        'runtime' => $this,
    ]);

    echo $container->view->partial('global-settings.general.show-footer', 'admin', [
        'runtime' => $this,
    ]);

    ?>
</div>