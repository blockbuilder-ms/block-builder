<?php

namespace BB\Api\Controllers\Post;

use BB\Api\Controllers\Controller;

final class FooterController extends Controller
{
    public function update($request)
    {
        global $container;
        $code = 200;
        $responseMessage = 'Footer was saved';
        $responseBody = true;
        $params = $request->get_params();

        $id = $params["key"];
        $html = $params["body"]["html"];
        $structure = $params["body"]["structure"];

        $footerId = get_post_meta($id, "bb_footer", true);

        if (!$footerId) {
            $footerId = $container->settings->footer;
        }

        if (!$container->post->save($footerId, [
            "post_content" => $html,
            "post_block_builder_structure" => $structure,
        ])) {
            $code = 500;
            $responseMessage = 'Could not save the footer';
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
