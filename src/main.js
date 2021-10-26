import { createApp } from 'vue'
import App from './App.vue'

// global style
import './assets/css/index.less';

// vue-router
import router from './router';
// vuex
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');
