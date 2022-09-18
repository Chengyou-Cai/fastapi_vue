<template>
  <a-config-provider :locale="zhCN">
    <!-- <RouterView /> -->
    <a-layout id="components-layout-demo-custom-trigger">
      <antd-sider></antd-sider>
      <a-layout>
        <antd-header></antd-header>
        <antd-content></antd-content>
        <antd-footer></antd-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/es/locale-provider/zh_CN";

import "@/assets/mine.css";
import { defineComponent } from "vue";
import AntdSider from "./components/AntdSider.vue";
import AntdHeader from "./components/AntdHeader.vue";
import AntdContent from "./components/AntdContent.vue";
import AntdFooter from "./components/AntdFooter.vue";

export default defineComponent({
  components: {
    AntdSider,
    AntdHeader,
    AntdContent,
    AntdFooter,
  },
  data() {
    return {
      zhCN,
    };
  },
});
</script>

<style></style>
