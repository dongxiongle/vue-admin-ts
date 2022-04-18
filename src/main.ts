import {createApp} from 'vue';
import App from './app.vue';
import router  from './router';
import ElementPlus  from 'element-plus';
import  'element-plus/dist/index.css';
import './assets/css/reset.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');