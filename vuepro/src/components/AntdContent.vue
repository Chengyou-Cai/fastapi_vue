<template>
  <a-layout-content
    :style="{
      margin: '0px 16px',
      padding: '24px',
      minHeight: '280px',
    }"
  >
    <router-view></router-view>
  </a-layout-content>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
