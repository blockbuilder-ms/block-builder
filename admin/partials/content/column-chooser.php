<?php
global $container;
$columnSizes = $container->builder->getColumnSizes();
?>
<div class="<?php echo isset($fixed) ? "fixed fixed-column-chooser " : "" ?>column-view hidden opacity-0 flex flex-wrap items-center justify-center content-center border-b py-8 duration-200 ease-in-out transition-all">
    <?php if (isset($fixed)) : ?>
        <div class="inner flex flex-wrap items-center justify-center content-center bg-white">
        <?php endif; ?>
        <h3 class="w-full text-center roboto mb-2">Please specify the column layout.</h3>
        <p class="w-full text-center roboto mt-0 mb-4">This can dynamicly be altered to fit your needs later on directly on the row.</p>
        <div style="max-width:1600px" class="column-picker mt-4 justify-center flex flex-wrap w-full px-4">
            <?php
            $index = 1;
            $start = 1;

            foreach ($columnSizes as $name => $row) :
                $expl = explode('-', $name);
                $columns = $expl[0];
                $layout = $expl[1];

                $colLab = $columns === "1" ? "column" : "columns";

                if ($index % 6 != 0) {
                    if ($index === $start) {
                        echo "<div class='col-2 first'>";
                        $start = $start + 6;
                    } else {
                        echo "<div class='col-2'>";
                    }
                } else {
                    echo "<div class='col-2 last'>";
                }
            ?>
                <span x-action="event" x-options='{"name":"bb-column-append-before","attributes":{"columns":"<?php echo $name ?>","location":"<?php echo $location ?>"}}' title="Click to add the column layout" class="flex cursor-pointer select-none flex-wrap px-2 py-2 bg-light mb-2 rounded border">
                    <span class="flex w-full mb-2 px-2">
                        <span class="roboto text-sm">
                            <?php

                            if (strpos($layout, "(") !== false) {
                                // Advanced layout
                                $layout = str_replace("/", "% / ", $layout);
                                $layout = str_replace(")", "% )", $layout);
                            } else {
                                $layout = $layout . "%";
                            }

                            echo $columns . " " . $colLab . " <strong class='block opacity-50 text-xs'><small>width of " . $layout . '</small></strong>';
                            ?>
                        </span>
                    </span>
                    <span class="flex w-full justify-center ">
                        <?php
                        foreach ($row as $column) :
                        ?>
                            <div style="flex:0 0 calc(<?php echo $column ?>% - 2%);border:1px solid #ccc;margin-left:.5%;margin-right:.5%;background:#fff; height:30px;" class="rounded-sm"></div>
                        <?php
                        endforeach;
                        ?>
                    </span>
                </span>
        </div>
    <?php
                $index++;
            endforeach;
    ?>
        </div>
        <?php if (isset($fixed)) : ?>
</div>
<?php endif; ?>
</div>