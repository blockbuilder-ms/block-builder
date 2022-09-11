<?php

namespace BB\Api\Controllers;

final class PostsController extends Controller
{
    public function __invoke($request)
    {
        $data = $request->get_params();
        $responseMessage = "Posts was fetched";
        $code = 200;
        $responseBody = [];

        $posts = \get_posts(["post_type" => "post", "posts_per_page" => -1]);

        if (0 === count($posts)) {
            $responseMessage = "No posts was found";
            $code = 404;
            $responseBody = [];
        }

        if (isset($data['fields'])) {
            // Limit the return set
            foreach ($posts as $post) {
                $responseBody["block-builder/v1/post/content/" . $post->ID] = '#' . $post->ID . ' - ' . $post->post_title;
            }
        } else {
            foreach ($posts as $post) {
                $responseBody[$post->ID] = $post;
            }
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
