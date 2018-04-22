import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router/router';
import iView from 'iview';
// import iView from 'iView';
import Echo from 'laravel-echo';
import 'iview/dist/styles/iview.css'
// const iView = require('iView');

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(iView);

// 设置ECHO
Vue.prototype.$echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    auth: {
        headers: {}
    }
})

axios.defaults.baseURL = 'http://apidemo.test/api';
Vue.router = new VueRouter(router);

// 加载进度条
Vue.router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});
Vue.router.afterEach(route => {
    iView.LoadingBar.finish();
});


Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
App.router = Vue.router;

// const app = new Vue(App).$mount('#app');
const app = new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
        this.setResponseInterceptors();
    },
    methods: {
        setResponseInterceptors(){
            // 添加响应拦截器
            axios.interceptors.response.use(response => response, error => {
                // 对错误响应做点什么
                let status = error.response.status;
                if(400 == status){
                    if(error.response.data.error){
                        this.$Message.error(error.response.data.error);
                    }else if(error.response.data.msg){
                        this.$Message.error(error.response.data.msg);
                    }else{
                        this.$Message.error('操作失败, 请刷新重试');
                    }
                }else{
                    this.$Message.error('服务器除了点小差错, 请联系管理员');
                }
                return Promise.reject(error);
            });
        }
    }
});