import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import VueParticles from "vue-particles";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/dist/vuetify.css";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Antd);
Vue.use(VueParticles);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
