<?php

namespace BB\Plugins\Typography\Includes\Google;

class Fonts
{
    private static $endpoint = "https://www.googleapis.com/webfonts/v1/webfonts?key={key}";

    private static $targetDir = ABSPATH . 'wp-content/uploads/';

    public static function all()
    {
        global $container;

        if (file_exists(self::$targetDir . 'google-fonts.json')) {
            $fonts = json_decode(file_get_contents(self::$targetDir . 'google-fonts.json'), true);

            return $fonts;
        }

        $key = $container->settings->google_api_key;

        if (!$key) {
            // Key not found, return empty array.
            return [];
        }

        $endpoint = str_replace('{key}', $key, self::$endpoint);
        $result = file_get_contents($endpoint);
        file_put_contents(self::$targetDir . 'google-fonts.json', json_encode(json_decode($result)->items));

        return $result;
    }
}
