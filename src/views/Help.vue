<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pageName: "Help",
      pageDescription: "This is Help Description",
    };
  },
  namme: "help",
};
</script>
