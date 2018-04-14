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
                    component: () => import('../components/hunter/Index'),
                    children: [
                        {
                            path: 'client',
                            name: 'hunter.client',
                            component: () => import('../components/hunter/Client'),
                        }
                    ]
                }
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