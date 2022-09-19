<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="0">
        <router-link to="/index">
          <field-binary-outlined />
          <span class="nav-text">Index</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu key="1">
        <template #title>
          <robot-outlined />
          <span>Pose</span>
        </template>
        <a-menu-item key="sub1">
          <router-link to="/posend">Pose nD</router-link>
        </a-menu-item>
        <a-menu-item key="sub2">
          <router-link to="/posecls">Pose Classification</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="2">
        <appstore-outlined />
        <span class="nav-text">Segmentation</span>
      </a-menu-item>
      <a-menu-item key="3">
        <appstore-add-outlined />
        <span class="nav-text">Human Parsing</span>
      </a-menu-item>
      <a-menu-item key="4">
        <eye-outlined />
        <span class="nav-text">Virtual TryOn</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { defineComponent, ref } from "vue";
import {
  FieldBinaryOutlined,
  EyeOutlined,
  RobotOutlined,
  AppstoreOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    FieldBinaryOutlined,
    EyeOutlined,
    RobotOutlined,
    AppstoreOutlined,
    AppstoreAddOutlined,
  },
  setup() {
    return {
      selectedKeys: ref(["0"]),
      collapsed: ref(false),
    };
  },
});
</script>
