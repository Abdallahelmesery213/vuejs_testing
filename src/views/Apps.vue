<template>
  <div class="our-app container">
    <h1>{{ pageName }}</h1>
    <ShowHidePass />
    <hr class="mt-4 mb-4" />
    <ProductTitle />
    <hr class="mt-4 mb-4" />
    <ValidateForm />
    <hr class="mt-4 mb-4" />
  </div>
</template>
<script>
import ShowHidePass from "../components/ShowHidePass.vue";
import ProductTitle from "../components/ProductTitle.vue";
import ValidateForm from "../components/ValidationForm.vue";
export default {
  data: function () {
    return {
      pageName: "Applications",
    };
  },

  components: {
    ShowHidePass,
    ProductTitle,
    ValidateForm,
  },
  name: "apps",
};
</script>
<style scoped>
h1 {
  border: 2px solid #ccc;
  margin-bottom: 50px;
  padding: 20px;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 0 10px #ddd;
  color: #cb4444;
  font-weight: bold;
}
</style>
