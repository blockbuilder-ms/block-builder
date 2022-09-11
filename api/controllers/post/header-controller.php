<?php

namespace BB\Api\Controllers\Post;

use BB\Api\Controllers\Controller;

final class HeaderController extends Controller
{
    public function update($request)
    {
        global $container;
        $code = 200;
        $responseMessage = 'Header was saved';
        $responseBody = true;
        $params = $request->get_params();

        $id = $params["key"];
        $html = $params["body"]["html"];
        $structure = $params["body"]["structure"];

        $headerId = get_post_meta($id, "bb_header", true);

        if (!$headerId) {
            $headerId = $container->settings->header;
        }

        if (!$container->post->save($headerId, [
            "post_content" => $html,
            "post_block_builder_structure" => $structure,
        ])) {
            $code = 500;
            $responseMessage = 'Could not save the header';
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
}
