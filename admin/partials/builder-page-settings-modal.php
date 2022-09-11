<?php
global $container;
?>
<div id="builder-page-settings-modal" x-options='{"data-id":"builder-settings-modal"}' class="modal hidden opacity-0 transition-opacity duration-200 ease-in-out flex flex-wrap fixed bottom-0 left-0 items-start content-start">
    <div class="col-12">
        <?php
        echo $container->view->partial('builder-browse-modal-page_settings', 'admin');
        ?>
    </div>
</div>