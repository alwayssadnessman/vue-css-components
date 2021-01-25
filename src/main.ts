import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(VueAxios,axios).use(router).use(ElementPlus).mount('#app');
