<template>
  <h2 class="mt-3 mb-4">Show And Hide Message</h2>
  <button @click="message = !message">
    {{ message ? "Hide Message" : "Show Message" }}
  </button>
  <transition name="fade">
    <p v-if="message">This Is An Alert</p>
  </transition>
</template>
<script>
export default {
  data: function () {
    return {
      message: false,
    };
  },
};
</script>
<style scoped>
button {
  background: #9b8274;
  color: #fff;
  padding: 10px;
  border-color: #9b8274;
  border-radius: 5px;
}
p {
  background-color: #ccc;
  padding: 20px;
  width: 50%;
  margin: 10px auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
