import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'v-smooth-scroll'
import router from './router'

var app = createApp(App);
app.use(router);
app.use(VueSmoothScroll, {
    duration: 200,
    updateHistory: false,
  });
app.mount('#app');
