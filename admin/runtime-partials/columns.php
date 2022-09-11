<?php

namespace BB\Admin\RuntimePartials;

use BB\Includes\Views\Runtime as ViewRuntime;

class Columns extends ViewRuntime
{
    public function __construct()
    {
        /**
         * Actions used by the current view runtime
         */
        $this->actions = [
            ['init', 1, [$this, 'defaultColumnSizes']],
        ];

        parent::__construct();
    }

    /**
     * Will register the default column sizes with the block editor
     * 
     * @return void
     */
    public function defaultColumnSizes(): void
    {
        global $container;
        // Standard sizes
        $container->builder->addColumnSize("1-100", [100]);
        $container->builder->addColumnSize("2-50", [50, 50]);
        $container->builder->addColumnSize("3-33", [33, 33, 33]);
        $container->builder->addColumnSize("4-25", [25, 25, 25, 25]);
        $container->builder->addColumnSize("5-20", [20, 20, 20, 20, 20]);
        $container->builder->addColumnSize("6-16.67", [16.67, 16.67, 16.67, 16.67, 16.67, 16.67]);
        $container->builder->addColumnSize("12-8.33", [8.33, 8.33, 8.33, 8.33, 8.33, 8.33, 8.33, 8.33, 8.33, 8.33, 8.33, 8.33]);

        // Special sizes
        $container->builder->addColumnSize("2-(25/75)", [25, 75]);
        $container->builder->addColumnSize("2-(75/25)", [75, 25]);

        $container->builder->addColumnSize("3-(30/40/30)", [30, 40, 30]);
        $container->builder->addColumnSize("3-(20/60/20)", [20, 60, 20]);
        $container->builder->addColumnSize("3-(15/70/15)", [15, 75, 15]);
        $container->builder->addColumnSize("3-(10/80/10)", [10, 80, 10]);

        $container->builder->addColumnSize("4-(15/15/35/35)", [15, 15, 35, 35]);
        $container->builder->addColumnSize("4-(35/35/15/15)", [35, 35, 15, 15]);

        $container->builder->addColumnSize("5-(10/10/60/10/10)", [10, 10, 60, 10, 10]);
        $container->builder->addColumnSize("5-(15/15/40/15/15)", [15, 15, 40, 15, 15]);
    }
}
