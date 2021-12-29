<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
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
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "../components/Blog/BlogPosts";
import BlogSidebar from "../components/Blog/BlogSidebar";
import jsonPosts from "../json/blog-posts";
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "This is Blog Description",
      posts: jsonPosts,
    };
  },
  namme: "blog",
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
