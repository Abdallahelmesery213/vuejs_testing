/* eslint-disable vue/no-deprecated-filter */
<template>
  <div class="post-box mb-3">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content }}</p>
    <div class="row">
      <div class="col-md-6">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="col-md-6 text-end">
        <span class="post-category">{{ upperCase() }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "post",
  props: ["views", "title", "date", "content", "author", "category"],
  methods: {
    upperCase: function () {
      return this.category.toUpperCase();
    },
  },
};
</script>
<style scoped lang="scss">
.post-box {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #fff;
    background-color: rgb(68, 128, 68);
    border-radius: 4px;
    padding: 1px 5px;
    font-weight: bold;
    text-align: center;
  }
  .post-date {
    padding: 0 0 5px;
    color: #888;
    display: block;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .post-author {
    background-color: #607dbb;
    color: #fff;
    padding: 6px 10px;
    border-radius: 4px;
  }
  .post-category {
    background-color: #e91e63;
    color: #fff;
    padding: 6px 10px;
    border-radius: 4px;
  }
}
</style>
