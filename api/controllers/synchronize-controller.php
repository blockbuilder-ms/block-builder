<?php

namespace BB\Api\Controllers;

final class SynchronizeController extends Controller
{
    public function update($request)
    {
        global $container;

        $params = $request->get_params();
        $container->settings->{$params['key']} = $params['body']['data'];
        $result = $container->settings->save();

        $code = 200;
        $responseMessage = 'Data was synchronized';
        $responseBody = $result;

        return new \WP_REST_Response(
            array(
                'status' => $code,
                'response' => $responseMessage,
                'body_response' => $responseBody,
            )
        );
    }

    public function delete()
    {
    }
}
