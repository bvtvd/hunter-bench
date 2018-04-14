import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router/router';
import iView from 'iview';
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(iView);

axios.defaults.baseURL = 'http://apidemo.test/api';

Vue.router = new VueRouter(router);
Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router;

const app = new Vue(App).$mount('#app');