<?php

namespace BB\Api\Controllers;

final class LazyloadController extends Controller
{
    public function __invoke($request)
    {
        global $container, $post;
        $params = $request->get_params();
        $code = 404;
        $responseMessage = "<h3>Failed to load data</h3>";
        $responseBody = false;

        if (!isset($params['key'])) {

            return new \WP_REST_Response(
                array(
                    'status' => $code,
                    'response' => $responseMessage,
                    'body_response' => $responseBody,
                )
            );
        }

        $postId = $request->get_header("X-WP-PostId");
        $post = $postId;

        $key = str_replace("--", ".", $params["key"]);
        $data = $container->view->partial($key, isset($params["space"]) ? $params["space"] : "admin");

        if ($data !== false) {
            $code = 200;
            $responseMessage = "<h3>Data was loaded<h3>";
            $responseBody = $data;
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
