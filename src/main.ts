import { createApp } from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import ConfigApi from './config/api';
import filters from "@/core/helpers/filters";
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

//imports for app initialization
import MockAdapter from "@/core/mock/MockService";
import ApiService from "@/core/services/ApiService";
import MarketApi from "@/core/services/marketApi";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";



const app = createApp(App);


app.use(store);
app.use(router);
app.use(ElementPlus);
app.provide('$filters', filters)
app.provide("$configapi", ConfigApi);
app.provide('host', 'http://localhost')
declare global {
  interface Window {
    tvWidget?: any;
  }
};
ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.mount("#app");
/*

app.config.globalProperties.$filters = filters;
app.config.globalProperties.green = "yellow";
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    green: "yellow"
  }
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
*/

