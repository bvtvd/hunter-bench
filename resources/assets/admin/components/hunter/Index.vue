<template>
    <div class="layout">
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu :active-name="activeName" theme="light" width="auto" :open-names="['1']" @on-select="menuSelect">
                    <MenuItem name="recommend">
                        <template>
                            <Icon type="android-hangout"></Icon>
                            我的推荐
                        </template>
                    </MenuItem>
                    <MenuItem name="client">
                        <template>
                            <Icon type="social-yen"></Icon>
                            客户管理
                        </template>
                    </MenuItem>
                    <MenuItem name="candidate">
                        <template>
                            <Icon type="ios-people"></Icon>
                            人选管理
                        </template>
                    </MenuItem>
                    <MenuItem name="job">
                        <template>
                            <Icon type="briefcase"></Icon>
                            职位管理
                        </template>
                    </MenuItem>
                </Menu>
            </Sider>
            <Content :style="{padding: '24px', background: '#fff'}">
                <router-view></router-view>
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('job.index');
            this.lightCurrentMenu();    // 点亮当前菜单
        },
        data() {
            return {
                activeName: 'recommend',
            }
        },
        methods: {
            // 获取当前路由别名
            getCurrentRouteName(){
                return this.$router.currentRoute.name;
            },
            // 获取第二层路由的名称
            getSubRouteName(){
                return this.getCurrentRouteName().split('.')[1];
            },
            // 点亮当前菜单
            lightCurrentMenu(){
                this.activeName = this.getSubRouteName();
            },
            menuSelect(name){
                this.$router.push({ name : 'hunter.' + name});
            }
        }
    }
</script>


<style scoped>
    .layout{
        border: none;
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
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>