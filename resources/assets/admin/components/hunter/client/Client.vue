<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="客户管理" name="name1">
                    <Table :columns="columns" :data="data" size="small"></Table>
                    <div class="page">
                        <Page :total="parseInt(pageData.total)" :page-size="parseInt(pageData.per_page)" :current="parseInt(pageData.current_page)" @on-change="handlePageChange" @on-page-size-change="handlePageSizeChange" size="small" :page-size-opts="[10, 20, 30, 50, 100]" show-elevator show-sizer></Page>
                    </div>
                </TabPane>
                <!--列表搜索-->
                <!--<Input v-model="value4" icon="ios-search" placeholder="Enter something..." style="width: 200px;margin-right: 1rem" slot="extra"></Input>-->
                <Button type="success" @click="showAddClientModel" icon="ios-personadd" size="small" slot="extra">新增客户</Button>
            </Tabs>
        </Row>

        <!--新增客户弹出框-->
        <Modal
                title="新增客户"
                v-model="addClientModel"
                class-name="vertical-center-modal"
                ok-text="提交"
                :loading="addClientModelLoading"
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
    </div>
</template>

<script>
    export default {
        mounted() {
            // 请求列表数据
            this.getListData();
        },
        data() {
            return {
                addClientModel: false,
                addClientModelLoading: true,
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
                        render: (h, params) => {
                            return h('span', this.getListIndex(params.index));
                        }
                    },
                    {
                        title: '客户',
                        key: 'name',
                    },
                    {
                        title: '创建时间',
                        key: 'created_at'
                    },
                    {
                        title: '操作',
                        render: (h, params) => {
                            return h('div', [
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
                                            // 跳转到详情页
                                            this.goClientDetail(params.row.id);
                                        }
                                    }
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    style: {
                                        color: '#ff9900'
                                    },
                                }, '修改')
                            ]);
                        }
                    }
                ],
                data: [],
            }
        },
        methods: {
            getListData(){
                this.$http.get('/clients', { params: this.listQuery}).then( response => {
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
            showAddClientModel(){
                this.addClientModel = true;
            },
            // 新增客户提交
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // 发送提交请求
                        this.$http.post('/clients', this.formValidate).then( response => {
                            this.$Message.success('添加成功');

                            this.addClientModelLoading = false; //加载恢复
                            this.addClientModel = false;       // 关闭弹窗
                            // 数据清空
                            this.$refs['formValidate'].resetFields();
                            // 重新请求表单
                            this.listQuery.page = 1;
                            this.getListData();
                        }).catch( response => {
                            this.addClientModelLoading = false;
                        })

                    } else {
                        this.addClientModelLoading = false;
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
            }
        }
    }
</script>

<style scope lang="less">
    .page{
        padding-top: 1rem;
    }
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>