<?php
$default = (isset($default) ? $default : "Choose..");

if (!isset($arguements['options']) || count($arguements['options']) == 0) {
    $arguements['options'] = [];
    $arguements['options'][] = ["label" => "No options was found", "value" => "n/a"];
}

if (is_array($value)) {
    if (count($value) === 0) {
        $value = $default;
    } else {
        $value = implode(',', $value);
    }
}
?>
<div x-action="select" x-options='<?php echo (json_encode($arguements)) ?>' name="<?php echo $name ?>" class="mt-1"></div>