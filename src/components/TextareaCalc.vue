<template>
  <div class="text-area">
    <h4>write your message {{ maxlength }} characters allowed</h4>
    <textarea
      @input="countChars"
      :maxlength="maxlength"
      v-model="message"
    ></textarea>
    <span class="counter" :class="{ zero: reachZero }">
      Left | <span>{{ remlength }}</span>
    </span>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      maxlength: 20,
      message: "",
      remlength: 20,
      reachZero: false,
    };
  },
  methods: {
    countChars: function () {
      this.remlength = this.maxlength - this.message.length;
      this.reachZero = this.remlength === 0;
      // console.log(this.reachZero);
    },
  },
};
</script>
<style scoped>
.text-area {
  margin: 20px auto;
  width: 400px;
  text-align: center;
}
textarea {
  resize: none;
  padding: 10px;
  background-color: #e9e8e8;
  border: 1px solid #ccc;
  width: 400px;
  height: 150px;
}
textarea:active,
textarea:focus {
  outline: none;
  border: 2px solid rgb(125, 141, 192);
}
.counter {
  display: block;
  text-align: right;
  padding-top: 5px;
}
.counter.zero span {
  color: #f00;
  font-weight: bold;
}
</style>
