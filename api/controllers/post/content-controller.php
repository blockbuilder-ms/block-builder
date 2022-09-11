<?php

namespace BB\Api\Controllers\Post;

use BB\Api\Controllers\Controller;

final class ContentController extends Controller
{
    public function __invoke()
    {
    }

    public function single($request)
    {
        $params = $request->get_params();

        if (!isset($params['key'])) {
            return new \WP_REST_Response(
                array(
                    'status' => 500,
                    'response' => "ID was missing",
                    'body_response' => false,
                )
            );
        }

        $post = \get_post($params['key']);

        $post->attachments = [
            "post_thumbnail" => \get_the_post_thumbnail_url($post->ID),
            "gallery_images" => \get_post_gallery_images($post->ID)
        ];

        return  new \WP_REST_Response(
            array(
                'status' => 200,
                'response' => "Post was fetched",
                'body_response' => $post,
            )
        );
    }

    public function update($request)
    {
        global $container;

        $code = 200;
        $responseMessage = 'Content was saved';
        $responseBody = true;
        $params = $request->get_params();

        $id = $params["key"];
        $html = $params["body"]["html"];
        $structure = $params["body"]["structure"];

        if (!$container->post->save($id, [
            "post_content" => $html,
            "post_block_builder_structure" => $structure,
        ])) {
            $code = 500;
            $responseMessage = 'Could not save the content';
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
