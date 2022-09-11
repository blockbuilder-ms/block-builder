<?php
global $container;

?>
<html lang="en">

<head>
    <title>Block Builder - Font Example</title>
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=<?php echo isset($_GET['font-family']) ? $_GET['font-family'] : 'Open Sans' ?>&display=swap" />
</head>

<style>
    * {
        font-family: "<?php echo isset($_GET['font-family']) ? $_GET['font-family'] : 'Open Sans' ?>";
        margin: 0px;
    }

    body {
        padding: 15px;
        text-align: center;
    }
</style>

<body>
    <h2>Font Example</h2>
    <p>This is how the chosesn font looks when used in text</p>
</body>

</html>