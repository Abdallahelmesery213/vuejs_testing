<template>
  <h2>Counter: {{ counter }}</h2>
  <br />
  <h2>Counter Double: {{ doubledCounter }}</h2>
  <br />
  <h2>Counter by mutations: {{ counter }}</h2>
  <br />
  <h2>Counter by actions: {{ counter }}</h2>
  <br />
  <button @click="increase">Increase</button>
  <button @click="decrease">decrease</button>
  <button @click="increment">increment</button>
  <button @click="increaseAfterSec">increaseAfterSec</button>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter;
    },
  },
  methods: {
    increase() {
      return this.$store.state.counter++;
    },
    decrease() {
      return this.$store.state.counter--;
    },
    increment() {
      // using  mutations
      return this.$store.commit("increment");
    },
    increaseAfterSec() {
      return this.$store.dispatch("increaseAfterSec");
    },
  },
};
</script>
