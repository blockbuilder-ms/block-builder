<?php
global $container;

?>
<html lang="en">

<head>
    <title>Block Builder preview</title>
    <?php
    /**
     * Styles
     */
    echo $container->view->injectStyle('grid', 'admin');
    echo $container->view->injectStyle('builder', 'admin');
    ?>
</head>

<body>
    <?php
    echo $container->header->generate(get_the_ID());

    echo $container->post->generate(get_the_ID());

    echo $container->footer->generate(get_the_ID());
    ?>
</body>

</html>