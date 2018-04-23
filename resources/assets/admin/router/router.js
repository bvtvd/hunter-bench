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
                    redirect: { name: 'hunter.recommend' },    // 先重定向都客户列表, 后面改为我的推荐
                    component: () => import('../components/hunter/Index'),
                    meta: {
                        title: '猎场.首页'
                    },
                    children: [
                        {
                            path: 'recommend',
                            name: 'hunter.recommend',
                            meta: {
                                title: '猎场.我的推荐'
                            },
                            component: () => import('../components/hunter/recommend/Recommend'),
                        },
                        {
                            path: 'recommend/:id',
                            name: 'hunter.recommend.detail',
                            meta: {
                                title: '猎场.推荐详情'
                            },
                            component: () => import('../components/hunter/recommend/Detail'),
                        },
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
                        {
                            path: 'candidate',
                            name: 'hunter.candidate',
                            meta: {
                                title: '猎场.人选管理'
                            },
                            component: () => import('../components/hunter/candidate/Candidate'),
                        },
                        {
                            path: 'candidate/:id',
                            name: 'hunter.candidate.detail',
                            meta: {
                                title: '猎场.人选详情'
                            },
                            component: () => import('../components/hunter/candidate/Detail'),
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