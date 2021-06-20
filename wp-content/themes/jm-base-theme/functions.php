<?php

function base_features() {
    show_admin_bar(false);
}

add_action('after_setup_theme', 'base_features');

function base_post_types() {
  // Question Post Type
  register_post_type('questions', array(
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'excerpt'),
    'rewrite' => array('slug' => 'questions'),
    'has_archive' => true,
    'public' => true,
    'taxonomies'  => array( 'category' ),
    'labels' => array(
      'name' => 'Questions',
      'add_new_item' => 'Add New Question',
      'edit_item' => 'Edit Question',
      'all_items' => 'All Questions',
      'singular_name' => 'Question'
    ),
    'menu_icon' => 'dashicons-editor-ol'
  ));

}

add_action('init', 'base_post_types');

?>