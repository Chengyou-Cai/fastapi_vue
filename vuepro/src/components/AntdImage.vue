<template>
  <a-image
    :preview="{ visible: false }"
    :width="200"
    :src="src1"
    @click="visible = true"
  />
  <div style="display: none">
    <a-image-preview-group
      :preview="{ visible, onVisibleChange: (vis) => (visible = vis) }"
    >
      <a-image :src="src1" />
      <a-image :src="src2" />
    </a-image-preview-group>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    src1: String,
    src2: String,
  },
  setup() {
    return {
      visible: ref(false),
    };
  },
});
</script>
