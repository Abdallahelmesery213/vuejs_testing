<template>
  <button v-if="liked" @click="toggleLike">UnLiked</button>
  <button v-if="!liked" @click="toggleLike">Like</button>
  <div>{{ likes }} likes</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["liked", "likes"]),
  },
  methods: {
    toggleLike() {
      return this.$store.dispatch("toggleLike");
    },
  },
};
</script>
