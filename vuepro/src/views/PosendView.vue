<template>
  <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
    <a-divider>Pose nD</a-divider>
    <a-row>
      <a-col :span="8">
        <a-card title="Input" :style="{ width: '100%', minHeight: '450px' }">
          <antd-upload></antd-upload>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          title="Pose 2D Output"
          :style="{ width: '100%', minHeight: '450px' }"
        >
          <a-space direction="vertical">
            <a-button type="primary" @click="show1 = !show1">Output</a-button>
            <antd-image
              v-if="show1"
              src1="/api/download/plot2d.jpg"
              src2="/api/download/plot3d.jpg"
            >
            </antd-image>
            <antd-empty v-else></antd-empty>
          </a-space>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card
          title="Pose 3D Output"
          :style="{ width: '100%', minHeight: '450px' }"
        >
          <a-space direction="vertical">
            <a-button type="primary" @click="show2 = !show2">Output</a-button>
            <antd-image
              v-if="show2"
              src1="/api/download/plot3d.jpg"
              src2="/api/download/plot2d.jpg"
            >
            </antd-image>
            <antd-empty v-else></antd-empty>
          </a-space>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import AntdUpload from "../components/AntdUpload.vue";
import AntdImage from "../components/AntdImage.vue";
import AntdEmpty from "../components/AntdEmpty.vue";
export default defineComponent({
  components: {
    AntdUpload,
    AntdImage,
    AntdEmpty,
  },
  setup() {
    let show1 = ref(false);
    let show2 = ref(false);

    return {
      show1,
      show2,
    };
  },
});
</script>
