<?php
$default = (isset($default) ? $default : "Choose..");

if (!isset($options) || count($options) == 0) {
    $options['N/A'] = "No options was found";
}

?>
<div x-action="select" class="multi-select w-full mb-4 mt-1">
    <div x-toggle class="input form-input flex bg-white cursor-pointer">
        <div class="px-4 py-2 text-xs w-full flex justify-between items-center">
            <span x-current><?php echo isset($value) ? $value : $default ?></span>
            <svg xmlns="http://www.w3.org/2000/svg" style="height:14px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    </div>
    <div class="container">
        <?php
        if (isset($options)) :
            foreach ($options as $value => $label) :
        ?>
                <span x-option x-value="<?php echo $value ?>"><?php echo $label ?></span>
        <?php
            endforeach;
        endif;
        ?>
        <select class="hidden" name="<?php echo $name ?>">
            <?php
            if (isset($options)) :
                foreach ($options as $value => $label) :
            ?>
                    <option value="<?php echo $value ?>"><?php echo $label ?></option>
            <?php
                endforeach;
            endif;
            ?>
        </select>
    </div>

</div>