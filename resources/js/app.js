import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue'
import router from './Router';
import sidemenu from './Components/sidemenu.vue';
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.component("sidemenu", sidemenu);
app.use(router);
app.mount('#app-vue');
