<template>
  <div class="my-form">
    <h4 class="mb-3">{{ pageDescription }}</h4>
    <form>
      <input
        :type="fieldType"
        placeholder="show/hide password"
        class="form-control d-inline"
      />
      <button class="btn btn-primary" @click.prevent="swithType">
        show/hide
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pageDescription: "Show Hide Password",
      fieldType: "password",
    };
  },
  methods: {
    swithType() {
      this.fieldType = this.fieldType === "password" ? "text" : "password";
    },
  },
  name: "show-hide-password",
};
</script>
<style scoped>
input {
  width: 30%;
}
</style>
