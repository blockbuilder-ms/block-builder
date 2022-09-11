<?php

/**
 * Shows the current blocks available to use.
 */
global $container;
$base = $container->builder->getTemplates();

?>

<div id="templates" class="browse-modal-container opacity-0 hidden transition-all ease-in-out duration-200 flex flex-wrap w-full py-4 pr-2">
    <?php
    foreach ($base->templates as $template) {
        echo $container->view->partial('template-single', 'admin', [
            'template' => $template
        ]);
    }
    ?>
</div>