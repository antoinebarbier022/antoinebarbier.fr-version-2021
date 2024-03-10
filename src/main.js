import { createApp } from "vue";
import App from "./App.vue";
import VueSmoothScroll from "v-smooth-scroll";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";

var app = createApp(App);
app.use(router);
app.use(VueSplide);
app.use(VueSmoothScroll, {
  duration: 200,
  updateHistory: false,
});
app.mount("#app");
