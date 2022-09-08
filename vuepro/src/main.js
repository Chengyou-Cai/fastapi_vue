import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import * as echarts from "echarts/core";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { BarChart, PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  GridComponent,
  BarChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
]);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(Antd);

app.mount("#app");
