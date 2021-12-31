<template>
  <h2 class="mt-3 mb-5">Toggle Classes</h2>
  <button :class="{ selected: isSelected }" @click="isSelected = !isSelected">
    First method
  </button>
  <button @click="toggle">escond method</button>
  <button @click="toggleAdvanced($event, 'selected')">third method</button>
</template>
<script>
export default {
  data: function () {
    return {
      isSelected: false,
    };
  },
  methods: {
    toggle: function (e) {
      e.target.classList.toggle("selected");
    },
    toggleAdvanced: function (event, className) {
      event.target.classList.toggle(className);
    },
  },
};
</script>
<style scoped>
.selected {
  background-color: green;
  border-color: green;
}
button {
  background-color: red;
  border-color: red;
  color: #fff;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>
