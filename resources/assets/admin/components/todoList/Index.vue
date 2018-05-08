<template>
    <div>
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu
                        :active-name="1"
                        theme="light"
                        width="auto"
                        :open-names="[3]"
                        ref="menu"
                >
                    <template v-for="item in categories">
                        <MenuItem :name="item.id" v-if="item.children.length == 0" :key="item.id">
                            <template>
                                <Icon type="clock" v-if="item.name == '今天'"></Icon>
                                <Icon type="calendar" v-if="item.name == '未来7天'"></Icon>
                                {{ item.name }}
                            </template>
                        </MenuItem>
                        <Submenu :name="item.id" :key="item.id" v-if="item.children.length > 0">
                            <template slot="title">
                                <Icon type="android-apps"></Icon>
                                {{ item.name }}
                            </template>
                            <MenuItem :name="child.id" v-for="child in item.children" :key="child.id">
                                <template>
                                    <div class="width:10px;height:10px;background-color:red"></div>
                                    {{ child.name }}
                                </template>
                            </MenuItem>
                        </Submenu>

                    </template>
                </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                Content
            </Content>
        </Layout>
    </div>
</template>

<script>
    export default {
        beforeMount(){
            this.getCategoryList();
        },
        mounted() {

        },
        data(){
            return {
                categories: [],
            }
        },
        methods: {
            // 获取分类层级列表
            getCategoryList(){
                this.$http.get('/todo/category/tree').then( response => {
                    this.categories = response.data;
                    this.initLightMenu();
                })
            },
            // 初始化点亮菜单
            initLightMenu(){
                this.$nextTick( () => {
                    console.log('hello')
                    this.$refs.menu.updateOpened();
                    this.$refs.menu.updateActiveName();
                })
            }
        }
    }
</script>

<style scoped>

</style>