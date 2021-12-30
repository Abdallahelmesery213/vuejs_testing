<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="post-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "../components/Blog/BlogPosts";
import jsonPosts from "../json/blog-posts";
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "Using API To Show My Data",
      posts: jsonPosts,
    };
  },
  namme: "blog",
  components: {
    BlogPosts,
  },
};
</script>
