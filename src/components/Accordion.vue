<template>
  <h2 class="mt-3 mb-5">Accordion</h2>
  <div class="question-box" v-for="(question, index) in questions" :key="index">
    <h4 @click="question.open = !question.open" class="question">
      {{ question.title }}
    </h4>
    <transition name="fade" class="question-reply">
      <p v-text="question.reply" v-show="question.open"></p>
    </transition>
  </div>
</template>
<script>
let questions = {
  "Question one": {
    open: true,
    title: "One What Happen bla bla ?",
    reply: "You can do bla bla bla",
  },
  "Question two": {
    open: false,
    title: "two What Happen bla bla ?",
    reply: "You can do bla bla bla",
  },
  "Question three": {
    open: false,
    title: "three What Happen bla bla ?",
    reply: "You can do bla bla bla",
  },
  "Question four": {
    open: false,
    title: "four What Happen bla bla ?",
    reply: "You can do bla bla bla",
  },
};
export default {
  data: function () {
    return {
      questions: questions, //questions, like react
    };
  },
};
</script>
<style scoped>
h4 {
  background-color: #ccc;
  padding: 20px;
  cursor: pointer;
}
p {
  background-color: #999a9d;
  padding: 20px;
  transition: background-color 0.2s ease-in-out;
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
