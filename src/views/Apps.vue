<template>
  <div class="our-app container">
    <h1>{{ pageName }}</h1>
    <ShowHidePass />
    <hr class="mt-4 mb-4" />
    <ProductTitle />
    <hr class="mt-4 mb-4" />
    <ValidateForm />
    <hr class="mt-4 mb-4" />
    <TodoList />
    <hr class="mt-4 mb-4" />
    <ToggleClass />
    <hr class="mt-4 mb-4" />
    <Tabs />
    <hr class="mt-4 mb-4" />
    <ShowHideMess />
    <hr class="mt-4 mb-4" />
    <Accordion />
    <hr class="mt-4 mb-4" />
    <TextareaCalc />
    <hr class="mt-4 mb-4" />
  </div>
</template>
<script>
import ShowHidePass from "../components/ShowHidePass.vue";
import ProductTitle from "../components/ProductTitle.vue";
import ValidateForm from "../components/ValidationForm.vue";
import TodoList from "../components/TodoList.vue";
import ToggleClass from "../components/ToggleClass.vue";
import Tabs from "../components/Tabs.vue";
import ShowHideMess from "../components/ShowHideMess.vue";
import Accordion from "../components/Accordion.vue";
import TextareaCalc from "../components/TextareaCalc";
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
    TodoList,
    ToggleClass,
    Tabs,
    ShowHideMess,
    Accordion,
    TextareaCalc,
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
