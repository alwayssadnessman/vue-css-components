import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
const app = createApp(App).use(store);
app.config.globalProperties.$axios = axios;
app.use(VueAxios,axios).use(router).use(store).use(ElementPlus).mount('#app');
