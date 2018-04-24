<template>
    <div>
        <Row>
            <Alert show-icon>
                <p>点击推荐选择人选可以给该职位推荐不同的人选</p>
                <p>点击mark可以更改职位状态为成功或失败</p>
            </Alert>
            <Tabs value="name1">
                <TabPane label="职位管理" name="name1">
                    <Table :columns="columns" :data="data" size="small"></Table>
                    <div class="page">
                        <Page :total="parseInt(pageData.total)" :page-size="parseInt(pageData.per_page)" :current="parseInt(pageData.current_page)" @on-change="handlePageChange" @on-page-size-change="handlePageSizeChange" size="small" placement="top" :page-size-opts="[10, 20, 30, 50, 100]" show-elevator show-sizer></Page>
                    </div>
                </TabPane>
                <!--列表搜索-->
                <!--<Input v-model="value4" icon="ios-search" placeholder="Enter something..." style="width: 200px;margin-right: 1rem" slot="extra"></Input>-->
                <Button type="success" @click="showAddModel" icon="ios-personadd" size="small" slot="extra">新增职位</Button>
            </Tabs>
        </Row>


        <!--新增职位弹出框-->
        <Modal
                title="新增职位"
                v-model="addModel"
                class-name="vertical-center-modal"
                ok-text="提交"
                :loading="addModelLoading"
                @on-ok="handleSubmit('formValidate')">
            <div>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="所属客户" prop="client_id">
                        <Select v-model="formValidate.client_id" placeholder="选择客户(可输入名称搜索)" filterable>
                            <Option :value="client.id + ''" v-for="client in clients" :key="client.id" v-html="client.name">New York</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="职位名称" prop="name">
                        <Input v-model="formValidate.name" placeholder="职位名称"></Input>
                    </FormItem>
                    <FormItem label="备注" prop="remark">
                        <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                </Form>
            </div>
        </Modal>

        <!--推荐职位弹窗-->
        <Modal
                title="职位推荐"
                v-model="recommendModel"
                class-name="vertical-center-modal"
                ok-text="提交"
                :loading="recommendModelLoading"
                @on-ok="handleRecommendSubmit('recommendValidate')"
                @on-cancel="handleRecommendCancel('recommendValidate')">
            <div>
                <Form ref="recommendValidate" :model="recommendValidate" :rules="recommendRuleValidate" :label-width="80">
                    <FormItem label="人选" prop="candidate_id">
                        <Select v-model="recommendValidate.candidate_id" filterable multiple>
                            <Option v-for="item in candidateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                </Form>
            </div>
        </Modal>
    </div>
</template>

<script>
    import MarkPoptip  from './components/MarkPoptip';

    export default {
        mounted() { // 优先级较低
            this.getListData();
            this.getClientListData();   // 获取客户列表
            this.getCandidateListData(); // 获取人选列表
        },
        created() { // 优先级较高

        },
        data() {
            return {
                addModel: false,
                addModelLoading: true,
                formValidate: {
                    client_id: '',
                    name: '',
                    remark: ''
                },
                ruleValidate: {
                    client_id: [
                        { required: true, message: '请选择职位所属客户', trigger: 'change' }
                    ],
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
                        title: '#',
                        render: (h, params) => {
                            return h('span', this.getListIndex(params.index));
                        }
                    },
                    {
                        title: '职位名称',
                        key: 'name',
                    },
                    {
                        title: '所属客户',
                        key: 'client_name',
                    },
                    {
                        title: '创建时间',
                        key: 'created_at',
                        minWidth: 150
                    },
                    {
                        title: '职位状态',
                        key: 'status',
                        render: (h, params) => {
                            return this.getStatusContent(h, params);
                        }
                    },
                    {
                        title: '已推数',
                        key: 'recommend_number'
                    },
                    {
                        title: '操作',
                        minWidth: 250,
                        // type: 'html',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#2d8cf0'
                                    },
                                    on: {
                                        click: () => {
                                            // 跳转到详情页
                                            this.goJobDetail(params.row.id);
                                        }
                                    }
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#19be6b'
                                    },
                                    on: {
                                        click: () => {
                                            // 推荐弹窗
                                            this.showRecommendModel(params.row.id)
                                        }
                                    }
                                }, '推荐'),
                                h(MarkPoptip, {
                                    props: {
                                        job_id: params.row.id
                                    },
                                    on: {
                                        statusUpdated: () => {
                                            this.getListData();
                                        }
                                    }
                                }),
                                // h('Button', {
                                //     props: {
                                //         type: 'text',
                                //         size: 'small'
                                //     },
                                //     style: {
                                //         color: '#ff9900'
                                //     },
                                // }, '修改')
                            ]);
                        }
                    }
                ],
                data: [],
                clients: [],
                recommendValidate: {
                    candidate_id: [],
                    job_id: null,
                },
                recommendRuleValidate: {
                    candidate_id: [
                        { required: true, type: 'array', min: 1, message: '请选择至少一个人选', trigger: 'change' }
                    ],
                },
                recommendModel: false,
                recommendModelLoading: true,
                candidateList: []
            }
        },
        methods: {
            getListData(){
                this.$http.get('/jobs', { params: this.listQuery}).then( response => {
                    this.data = response.data.data; // 列表数据
                    this.pageData = response.data.meta; // 填充分页数据
                });
            },
            // 获取客户列表
            getClientListData(){
                this.$http.get('/clients', { params: {page: 1, limits: 10000}}).then( response => {
                    this.clients = response.data.data; // 列表数据
                });
            },
            getListIndex(index){
                return ((this.pageData.current_page - 1) * this.pageData.per_page) + index + 1;
            },
            // 获取人选列表
            getCandidateListData() {
                this.$http.get('/candidates', {
                    params: {
                        page: 1,
                        limits: 10000
                    }
                }).then( response => {
                    this.candidateList = this.handleFormatCandidateListData(response.data.data); // 列表数据
                });
            },
            // 整理人选列表
            handleFormatCandidateListData(data) {
                let container = [];
                if (data.length > 0){
                    data.forEach( item => {
                        let label = item.name_mobile;
                        item.current_job && (label += `-${item.current_job}`);
                        item.current_company && (label += `-${item.current_company}`);
                        item.education && (label += `-${item.education}`);
                        item.school && (label += `-${item.school}`);

                        container.push({
                            value: item.id,
                            label: label
                        });
                    })
                }
                return container;
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
                        //发送提交请求
                        this.$http.post('/jobs', this.formValidate).then( response => {
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
            // 跳转到职位详情页
            goJobDetail(id) {
                this.$router.push({
                    name: 'hunter.job.detail',
                    params: { id: id },
                })
            },
            // 获取职位内容,
            getStatusContent(h, params){
                // 1. 寻找人选, 2, 推荐中, 3, 失败, 4, 成功,  5. 关闭,
                let status = params.row.status;
                let content;
                if(1 == status){    // 寻找中
                    content = h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small',
                                icon: 'ios-search'
                            },
                            style: {
                                color: '#ed3f14'
                            }
                        }, '寻找中...')
                    ]);
                }else if(2 == status){  // 推荐中
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
                        }, '已推荐')
                    ]);
                }else if(3 == status){  // 失败
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
                }else if(4 == status){  // 成功
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
                }else if(5 == status){
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
            // 推荐职位提交
            handleRecommendSubmit(name){
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //发送提交请求
                        this.$http.post('/recommends', this.recommendValidate).then( response => {
                            this.$Message.success('添加成功');
                            this.recommendModelLoading = false; //加载恢复
                            this.recommendModel = false;       // 关闭弹窗
                            // 数据清空
                            this.$refs[name].resetFields();
                            // 重新请求表单
                            this.listQuery.page = 1;
                            this.getListData();
                        }).catch( response => {
                            this.recommendModelLoading = false;
                        })
                    } else {
                        this.recommendModelLoading = false;
                    }
                })
            },
            // 展示推荐弹窗
            showRecommendModel(job_id){
                this.recommendModel = true;
                this.recommendValidate.job_id = job_id;
            },
            // 推荐弹窗选择取消
            handleRecommendCancel(name){
                this.$refs[name].resetFields();
            }
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