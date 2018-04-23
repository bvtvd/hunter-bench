<template>
    <div class="layout">
        <Layout>
            <div ref="header">
                <Header>
                    <Menu mode="horizontal" theme="dark" :active-name="activeName">
                        <div class="layout-logo">

                        </div>
                        <div class="layout-nav" >
                            <MenuItem name="home">
                                <Icon type="ios-navigate"></Icon>
                                <span @click="$router.push({ name: 'home'})">首页</span>
                            </MenuItem>
                            <MenuItem name="hunter">
                                <Icon type="ios-keypad"></Icon>
                                <span @click="$router.push({ name: 'hunter.index'})">猎场</span>
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-paper"></Icon>
                                Item 4
                            </MenuItem>
                            <MenuItem name="5">
                                <Dropdown>
                                    <span>{{$auth.user().name}}</span>&nbsp;
                                    <Avatar :src="$auth.user().avatar" v-if="$auth.user().avatar"/>
                                    <Avatar icon="person" style="background-color: #87d068" v-else/>
                                    <DropdownMenu slot="list">
                                        <DropdownItem>驴打滚</DropdownItem>
                                        <DropdownItem>炸酱面</DropdownItem>
                                        <DropdownItem disabled>豆汁儿</DropdownItem>
                                        <DropdownItem>冰糖葫芦</DropdownItem>
                                        <DropdownItem   name="logout" divided>
                                            <span @click="logout">退出</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
            </div>
            <Content :style="{padding: '0 50px'}">
                <div ref="breadcrumb" :style="{margin: '20px 0'}">
                    <Breadcrumb>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <Card>
                    <div :style="{'min-height': contentMinHeight}">
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
            <div ref="footer">
                <Footer class="layout-footer-center">
                    <p>Power by Hans</p>
                    <p>&reg; seizeone.site</p>
                </Footer>
            </div>
        </Layout>
    </div>
</template>
<script>
    const breadcrumbMargin = 40;
    const cardPadding = 36;

    export default {
        mounted(){
            this.setContentMinHeight()
            this.lightCurrentMenu();
            this.setEchoAuthorization();
            this.setBroadcast();
        },
        data() {
            return {
                contentMinHeight: '700px',
                activeName: 'home',
            }
        },
        methods: {
            // 设置内容宽度
            setContentMinHeight(){
                let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                let headerHeight = this.$refs.header.offsetHeight;
                let breadcrumbHeight = this.$refs.breadcrumb.offsetHeight;
                let footerHeight = this.$refs.footer.offsetHeight;
                let contentMinHeight = (h - headerHeight - breadcrumbHeight - footerHeight - breadcrumbMargin - cardPadding) + 'px';
                this.contentMinHeight = contentMinHeight;
            },
            /* 登出 */
            logout(){
                this.$auth.logout({
                    makeRequest: true,
                    redirect: '/login'
                });
            },
            // 获取当前路由别名
            getCurrentRouteName(){
                return this.$router.currentRoute.name;
            },
            // 获取第一层路由的名称
            getFirstRouteName(){
                return this.getCurrentRouteName().split('.')[0];
            },
            // 点亮当前菜单
            lightCurrentMenu(){
                this.activeName = this.getFirstRouteName();
            },
            // 设置echo 认证请求token
            setEchoAuthorization() {
                this.$echo.options.auth.headers.Authorization = 'Bearer ' + this.$auth.token();
            },
            // 设置广播监听
            setBroadcast() {
                // 监听私人频道
                this.$echo.private(`App.User.${this.$auth.user().id}`)
                    .notification((notification) => {   // 监听服务端通知
                        this.$Notice.open({
                            title: notification.title,
                            desc: notification.content,
                            duration: 0
                        });
                    });
            }
        }
    }
</script>


<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 525px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>

