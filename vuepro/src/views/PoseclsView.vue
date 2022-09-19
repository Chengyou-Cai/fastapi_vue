<template>
  <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
    <a-divider>Pose Classification</a-divider>
    <button @click="get_message">{{ message }}</button>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { method_get } from "@/api/index";
export default defineComponent({
  setup() {
    function get_message() {
      method_get("/hello/").then((res) => {
        this.message = res.data.message;
      });
    }

    return {
      message: ref("change data"),
      get_message,
    };
  },
});
</script>
