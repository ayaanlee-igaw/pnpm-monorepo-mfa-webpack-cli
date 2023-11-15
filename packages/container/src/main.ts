import '@monorepo/element-plus-design-system/src/styles/styles.scss';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import router from './router';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.mount('#app');
