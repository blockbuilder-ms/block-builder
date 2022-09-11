<?php
global $container;

echo $container->view->partial("lazyload.general.use-color-layout", "colors");
echo $container->view->partial("lazyload.general.add-shortcut-to-taskbar", "colors");
