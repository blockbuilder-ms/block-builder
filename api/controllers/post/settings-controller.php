<?php

namespace BB\Api\Controllers\Post;

use BB\Api\Controllers\Controller;

final class SettingsController extends Controller
{
    public function update($request)
    {
        global $container;
        $params = $request->get_params();
        $code = 500;
        $responseMessage = 'Could not save';
        $responseBody = false;

        if (!isset($params['key']) || !isset($params['body'])) {
            // Missing key and body
            return new \WP_REST_Response(
                array(
                    'status' => $code,
                    'response' => $responseMessage,
                    'body_response' => $responseBody,
                )
            );
        }

        $postId = $params['key'];
        if ($container->post->save($postId, $params['body'])) {
            $code = 200;
            $responseMessage = 'Post was saved';
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
