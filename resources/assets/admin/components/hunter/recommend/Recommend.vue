<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="我的推荐" name="name1">
                    <Table :columns="columns" :data="data" size="small"></Table>
                    <div class="page">
                        <Page :total="parseInt(pageData.total)" :page-size="parseInt(pageData.per_page)" :current="parseInt(pageData.current_page)" @on-change="handlePageChange" @on-page-size-change="handlePageSizeChange" size="small" placement="top" :page-size-opts="[10, 20, 30, 50, 100]" show-elevator show-sizer></Page>
                    </div>
                </TabPane>

                <!--列表搜索-->
                <!--<Input v-model="value4" icon="ios-search" placeholder="Enter something..." style="width: 200px;margin-right: 1rem" slot="extra"></Input>-->
                <!--<Button type="success" @click="showAddModel" icon="ios-personadd" size="small" slot="extra">新增客户</Button>-->
            </Tabs>
        </Row>

        <!--新增客户弹窗-->
        <Modal
                title="新增客户"
                v-model="addModel"
                class-name="vertical-center-modal"
                ok-text="提交"
                :loading="addModelLoading"
                @on-ok="handleSubmit('formValidate')">
            <div>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="客户名称" prop="name">
                        <Input v-model="formValidate.name" placeholder="客户公司名称"></Input>
                    </FormItem>
                    <FormItem label="备注" prop="remark">
                        <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12">
                                <Button type="dashed" long @click="handleAddClientJobs" icon="plus-round">添加职位</Button>
                            </Col>
                        </Row>
                    </FormItem>
                </Form>
            </div>
        </Modal>

        <!--设置提醒弹窗-->
        <Modal
                title="设置提醒"
                v-model="notificationModel"
                class-name="vertical-center-modal"
                ok-text="提交"
                :loading="notificationModelLoading"
                @on-ok="handleNotificationSubmit('notificationValidate')">
            <div>
                <Form ref="notificationValidate" :model="notificationValidate" :rules="notificationRuleValidate" :label-width="80">
                    <FormItem label="标题" prop="title">
                        <Input v-model="notificationValidate.title" placeholder="面试提醒"></Input>
                    </FormItem>
                    <FormItem label="提醒时间" prop="time">
                        <DatePicker type="datetime" v-model="notificationValidate.time" :options="notificationOptions" placeholder="选择提醒时间" @on-change="notificationTimeChange"></DatePicker>
                    </FormItem>
                    <FormItem label="内容" prop="content">
                        <Input v-model="notificationValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="提醒面试者(手机号码)3个小时后去XX公司面试XX岗位"></Input>
                    </FormItem>
                </Form>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        beforeCreate(){
        },
        mounted() {
            this.getListData(); // 请求列表数据

        },
        data() {
            return {
                addModel: false,
                addModelLoading: true,
                formValidate: {
                    name: '',
                    remark: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '客户名称不能为空', trigger: 'blur' }
                    ],
                },
                listQuery: {
                    page: 1,
                    limits: 10,
                },
                pageData: {
                    current_page: 1,
                    last_page: 0,
                    per_page: 10,
                    total: 0,
                },
                columns: [
                    {
                        // type: 'index',
                        title: '#',
                        // key: 'index',
                        width: 90,
                        render: (h, params) => {
                            return h('span', this.getListIndex(params.index));
                        }
                    },
                    {
                        title: '职位',
                        key: 'job_client',
                    },
                    {
                        title: '人选',
                        key: 'candidate_name_mobile',
                    },
                    {
                        title: '推荐时间',
                        key: 'created_at'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        render: (h, params) => {
                            return this.getStatusContent(h, params);
                        }
                    },
                    {
                        title: '操作',
                        minWidth: 200,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                        // icon: 'ios-lightbulb-outline'
                                    },
                                    style: {
                                        color: '#2d8cf0'
                                    },
                                    on: {
                                        click: () => {
                                            // 设置提醒弹窗
                                            this.showNotificationModel(params.row);

                                        }
                                    }
                                }, '设置提醒'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#19be6b'
                                    },
                                }, '面试'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#ff9900'
                                    },
                                }, 'mark')
                            ]);
                        }
                    }
                ],
                data: [],
                notificationModel: false,
                notificationModelLoading: true,
                notificationValidate: {
                    title: '',
                    time: '',
                    content: '',
                    recommend_id: '',
                },
                notificationRuleValidate: {
                    title: [
                        { required: true, message: '请填写标题', trigger: 'blur' }
                    ],
                    time: [
                        { required: true, message: '请选择提醒时间', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '请填写提醒内容', trigger: 'blur' }
                    ],
                },
                notificationOptions:  {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
            }
        },
        methods: {
            getListData(){
                this.$http.get('/recommends', { params: this.listQuery}).then( response => {
                    this.data = response.data.data; // 列表数据
                    this.pageData = response.data.meta; // 填充分页数据
                });
            },
            getListIndex(index){
                return ((this.pageData.current_page - 1) * this.pageData.per_page) + index + 1;
            },
            handlePageChange(page){
                this.listQuery.page = page;
                this.getListData();
            },
            handlePageSizeChange(per_page){
                this.listQuery.limits = per_page;
                this.getListData();
            },
            // 展示新增客户弹框
            showAddModel(){
                this.addModel = true;
            },
            // 新增客户提交
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // 发送提交请求
                        this.$http.post('/clients', this.formValidate).then( response => {
                            this.$Message.success('添加成功');

                            this.addModelLoading = false; //加载恢复
                            this.addModel = false;       // 关闭弹窗
                            // 数据清空
                            this.$refs['formValidate'].resetFields();
                            // 重新请求表单
                            this.listQuery.page = 1;
                            this.getListData();
                        }).catch( response => {
                            this.addModelLoading = false;
                        })

                    } else {
                        this.addModelLoading = false;
                    }
                })
            },
            // 顺便添加客户职位
            handleAddClientJobs(){

            },
            // 跳转到客户详情页
            goClientDetail(id) {
                this.$router.push({
                    name: 'hunter.client.detail',
                    params: { id: id },
                })
            },
            // 获取推荐状态内容,
            getStatusContent(h, params){
                // 1. 推荐中, 2, 失败, 3, 成功, 4, 关闭,
                let status = params.row.status;
                let content;
                if(1 == status){  // 推荐中
                    content = h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small',
                                icon: 'android-chat'
                            },
                            style: {
                                color: '#ff9900'
                            }
                        }, '推荐中...')
                    ]);
                }else if(2 == status){  // 失败
                    content = h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small',
                                icon: 'sad-outline'
                            },
                            style: {
                                color: '#bbbec4'
                            }
                        }, '失败')
                    ]);
                }else if(3 == status){  // 成功
                    content = h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small',
                                icon: 'happy-outline'
                            },
                            style: {
                                color: '#19be6b'
                            }
                        }, '推荐成功')
                    ]);
                }else if(4 == status){
                    content = h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small',
                                icon: 'ios-close'
                            },
                            style: {
                                color: '#bbbec4'
                            }
                        }, '已关闭')
                    ]);
                }
                return content;
            },
            showNotificationModel(item) {
                this.notificationValidate.title = '面试提醒';
                this.notificationValidate.content = `提醒 ${item.candidate_name_mobile} 3 个小时之后去 ${item.client} 面试 ${item.job_name}`;
                this.notificationValidate.recommend_id = item.id;

                this.notificationModel = true;
            },
            // 设置提示时间改变
            notificationTimeChange(value){
                console.log(value);
                this.notificationValidate.time = value;
            },
            // 设置提醒提交
            handleNotificationSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // 发送提交请求
                        this.$http.post('/recommends/remind', this.notificationValidate).then( response => {
                            this.$Message.success('设置成功');

                            this.notificationModelLoading = false; //加载恢复
                            this.notificationModel = false;       // 关闭弹窗
                            // 数据清空
                            this.$refs[name].resetFields();

                            // // 重新请求表单
                            // this.listQuery.page = 1;
                            // this.getListData();
                        }).catch( response => {
                            this.notificationModelLoading = false;
                        })

                    } else {
                        this.notificationModelLoading = false;
                    }
                })
            },
        }
    }
</script>

<style scope lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>