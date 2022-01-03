<template>
  <h2>CounterInfo: {{ counter }}</h2>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
