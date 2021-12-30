<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/" exact><a>ELMESERY</a></router-link>
      </div>
      <ul>
        <router-link to="/" tag="li" exact> <a>Home</a> </router-link>
        <router-link to="/about" tag="li"> <a>About</a> </router-link>
        <router-link to="/blog" tag="li"> <a>Blog</a> </router-link>
        <router-link to="/apps" tag="li"> <a>Apps</a> </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped lang="scss">
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  padding: 20px;
  display: flex;
  .logo {
    font-size: 24px;
    float: left;
    width: 200px;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  ul {
    width: calc(100% - 200px);
    float: left;
    text-align: right;
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      margin-left: 20px;
    }
    .router-link-active {
      color: #fff;
      font-weight: bold;
      color: red !important;
    }
  }
}
</style>
