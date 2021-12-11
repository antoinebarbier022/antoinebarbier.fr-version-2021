import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'v-smooth-scroll'
//import { Splide } from '@splidejs/splide';
//import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



var app = createApp(App);

app.use(VueSmoothScroll, {
    duration: 50,
    updateHistory: false,
  });
app.mount('#app');
