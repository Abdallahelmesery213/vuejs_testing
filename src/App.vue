<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
