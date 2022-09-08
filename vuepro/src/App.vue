<template>
  <a-config-provider :locale="zhCN">
    <!-- <div id="app">
      <router-view />
    </div> -->
    <RouterView />
  </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/es/locale-provider/zh_CN";

export default {
  data() {
    return {
      zhCN,
    };
  },
};
</script>

<style></style>
