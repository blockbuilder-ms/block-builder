<?php

namespace BB\Api\Controllers;

final class PluginsController extends Controller
{
    public function activate($request)
    {
        global $container;
        $params = $request->get_params();
        $state = $container->plugin->activate($params["key"]);

        if (!$state) {
            $code = 404;
            $responseMessage = "Failed to activate plugin";
            $responseBody = false;
        } else {
            $code = 200;
            $responseMessage = "Plugin activated";
            $responseBody = true;
        }

        return new \WP_REST_Response(
            array(
                'status' => $code,
                'response' => $responseMessage,
                'body_response' => $responseBody,
            )
        );
    }

    public function deactivate($request)
    {
        global $container;

        $params = $request->get_params();
        $state = $container->plugin->deactivate($params["key"]);

        if (!$state) {
            $code = 404;
            $responseMessage = "Failed to deactivate plugin";
            $responseBody = false;
        } else {
            $code = 200;
            $responseMessage = "Plugin deactivated";
            $responseBody = true;
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
