import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue'
import router from './Router';
import sidemenu from './Components/sidemenu.vue';

const app = createApp(App);
app.component("sidemenu", sidemenu);
app.use(router);
app.mount('#app-vue');
