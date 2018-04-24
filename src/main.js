import Vue from "vue";

import router from "./routes/router";
import store from "./stores";

import App from "./App";

// Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
