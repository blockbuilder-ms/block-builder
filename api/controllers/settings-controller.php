<?php

namespace BB\Api\Controllers;

final class SettingsController extends Controller
{
    public function __invoke($request)
    {
        global $container;

        $settings = $container->builder->settings();

        if (!is_array($settings)) {
            $code = 404;
            $responseMessage = "Settings was not found";
            $responseBody = false;
        } else {
            $code = 200;
            $responseMessage = "Settings has been fetched";
            $responseBody = $settings;
        }

        return new \WP_REST_Response(
            array(
                'status' => $code,
                'response' => $responseMessage,
                'body_response' => $responseBody,
            )
        );
    }
}
