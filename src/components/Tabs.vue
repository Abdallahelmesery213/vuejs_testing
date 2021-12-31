<template>
  <h2 class="mt-3 mb-5">Tabs</h2>
  <ul>
    <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']">
      tab one
    </li>
    <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']">
      tab two
    </li>
    <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']">
      tab three
    </li>
    <li @click="activeTab = '4'" :class="[activeTab === '4' ? 'active' : '']">
      tab four
    </li>
  </ul>
  <div class="tab-content">
    <div class="content-one" v-if="activeTab === '1'">content one</div>
    <div class="content-two" v-if="activeTab === '2'">content two</div>
    <div class="content-three" v-if="activeTab === '3'">content three</div>
    <div class="content-four" v-if="activeTab === '4'">content four</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      activeTab: "1",
    };
  },
};
</script>
<style scoped>
ul li {
  display: inline-block;
  background-color: #ccc;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  -webkit-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
}
ul li.active {
  opacity: 1;
}
.tab-content {
  background-color: #ccc;
  padding: 10px 20px;
  width: 80%;
  margin: 5px auto;
  min-height: 80px;
}
</style>
