<?php

namespace BB\Api\Controllers\Post;

use BB\Api\Controllers\Controller;

final class StyleController extends Controller
{
    public function update($request)
    {
        global $container;

        $code = 200;
        $responseMessage = 'Style was saved';
        $responseBody = true;

        $params = $request->get_params();
        $id = $params["key"];
        $data = $params["body"]["style"];


        if (!$container->style->build($id, 'style', $data)) {
            $code = 500;
            $responseMessage = 'Was not able to save style';
            $responseBody = false;
        }

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
