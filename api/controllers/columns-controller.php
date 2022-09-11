<?php

namespace BB\Api\Controllers;

final class ColumnsController extends Controller
{
    public function store($request)
    {
        global $container;

        var_dump($container->builder->getColumnSizes());


        // $settings = $container->settings->all();

        // if (!is_array($settings)) {
        //     $code = 404;
        //     $responseMessage = "Settings was not found";
        //     $responseBody = false;
        // } else {
        //     $code = 200;
        //     $responseMessage = "Settings has been fetched";
        //     $responseBody = $settings;
        // }

        // return new \WP_REST_Response(
        //     array(
        //         'status' => $code,
        //         'response' => $responseMessage,
        //         'body_response' => $responseBody,
        //     )
        // );
    }
}
