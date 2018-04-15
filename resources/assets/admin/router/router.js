// import Home from '../components/Home.vue';
// import Login from '../components/Login.vue';
// import HunterIndex from '../components/hunter/Index';
// const Home = () => import('../components/Home.vue')
// const Login = () => import('../components/Login.vue')
// const HunterIndex = () => import('../components/hunter/Index')

export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home.vue'),
            meta: {
                title: '首页',
                auth: true
            },
            children: [
                {
                    path: '/hunter',
                    name: 'hunter.index',
                    redirect: { name: 'hunter.client' },    // 先重定向都客户列表, 后面改为我的推荐
                    component: () => import('../components/hunter/Index'),
                    meta: {
                        title: '猎场.首页'
                    },
                    children: [
                        {
                            path: 'client',
                            name: 'hunter.client',
                            meta: {
                                title: '猎场.客户列表'
                            },
                            component: () => import('../components/hunter/client/Client'),
                        },
                        {
                            path: 'client/:id',
                            name: 'hunter.client.detail',
                            meta: {
                                title: '猎场.客户详情'
                            },
                            component: () => import('../components/hunter/client/Detail'),
                        },
                        {
                            path: 'job',
                            name: 'hunter.job',
                            meta: {
                                title: '猎场.职位列表'
                            },
                            component: () => import('../components/hunter/job/Job'),
                        },
                    ]
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Login.vue'),
            meta: {
                auth: false
            }
        },


        // {
        //     path: '/articles',
        //     name: 'article.list',
        //     component: ArticleList,
        //     meta: {
        //         auth: true
        //     }
        // }
    ]
};