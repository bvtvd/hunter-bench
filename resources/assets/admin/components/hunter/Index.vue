<template>
    <div class="layout">
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu active-name="" theme="light" width="auto" :open-names="['1']">
                    <MenuItem name="1-1">
                        <template>
                            <Icon type="android-hangout"></Icon>
                            我的推荐
                        </template>
                    </MenuItem>
                    <MenuItem name="hunter.client">
                        <template>
                            <Icon type="social-yen"></Icon>
                            <span @click="$router.push({ name: 'hunter.client'})">客户管理</span>
                        </template>
                    </MenuItem>
                    <MenuItem name="">
                        <template>
                            <Icon type="ios-people"></Icon>
                            人选管理
                        </template>
                    </MenuItem>
                    <MenuItem name="">
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
            console.log('Component mounted.')
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