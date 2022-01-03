<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <hr class="mb-5" />
    <Counter />
    <hr class="mb-5" />
    <CounterInfo />
    <hr class="mb-5" />
    <h2>like Module</h2>
    <LikeModule />
  </div>
</template>
<script>
import Counter from "../components/CounterByRedux/Counter";
import CounterInfo from "../components/CounterByRedux/CounterInfo";
import LikeModule from "../components/CounterByRedux/LikeModule";
export default {
  data: function () {
    return {
      pageName: "About Vuex",
    };
  },
  components: {
    Counter,
    CounterInfo,
    LikeModule,
  },
  name: "about",
};
</script>
