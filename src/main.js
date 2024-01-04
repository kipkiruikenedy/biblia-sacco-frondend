import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./style.css";
import VueSplide from '@splidejs/vue-splide';




const app = createApp(App);

app.use(router); // Use Vue Router

app.use( VueSplide);
app.mount('#app');
