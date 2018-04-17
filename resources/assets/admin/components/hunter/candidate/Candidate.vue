<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="人选管理" name="name1">
                    <Table :columns="columns" :data="data" size="small"></Table>
                    <div class="page">
                        <Page :total="parseInt(pageData.total)" :page-size="parseInt(pageData.per_page)" :current="parseInt(pageData.current_page)" @on-change="handlePageChange" @on-page-size-change="handlePageSizeChange" size="small" placement="top" :page-size-opts="[10, 20, 30, 50, 100]" show-elevator show-sizer></Page>
                    </div>
                </TabPane>
                <!--列表搜索-->
                <!--<Input v-model="value4" icon="ios-search" placeholder="Enter something..." style="width: 200px;margin-right: 1rem" slot="extra"></Input>-->
                <Button type="success" @click="showAddModel" icon="ios-personadd" size="small" slot="extra">新增人选</Button>
            </Tabs>
        </Row>

        <!--新增客户弹出框-->
        <Modal
                title="新增人选"
                v-model="addModel"
                class-name="vertical-center-modal"
                ok-text="提交"
                :loading="addModelLoading"
                @on-ok="handleSubmit('formValidate')">
            <div>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="姓名" prop="name">
                        <Input v-model="formValidate.name" placeholder="人选姓名"></Input>
                    </FormItem>
                    <FormItem label="手机号" prop="mobile">
                        <Input v-model="formValidate.mobile" placeholder="人选手机号码"></Input>
                    </FormItem>
                    <FormItem label="公司" prop="current_company">
                        <Input v-model="formValidate.current_company" placeholder="目前所在公司"></Input>
                    </FormItem>
                    <FormItem label="职位" prop="current_job">
                        <Input v-model="formValidate.current_job" placeholder="目前职位"></Input>
                    </FormItem>
                    <FormItem label="学历" prop="education">
                        <Input v-model="formValidate.education" placeholder="最高学历"></Input>
                    </FormItem>
                    <FormItem label="毕业时间" prop="graduation_at">
                        <DatePicker type="date" placeholder="选择毕业时间" v-model="formValidate.graduation_at" @on-change="graduationChange"></DatePicker>
                    </FormItem>
                    <FormItem label="毕业院校" prop="school">
                        <Input v-model="formValidate.school" placeholder="人选毕业院校"></Input>
                    </FormItem>
                    <FormItem label="状态" prop="status">
                        <RadioGroup v-model="formValidate.status">
                            <Radio :label="1">在职</Radio>
                            <Radio :label="2">离职</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="备注" prop="remark">
                        <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
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
                addModel: false,
                addModelLoading: true,
                formValidate: {
                    name: '',
                    mobile: '',
                    current_company: null,
                    current_job: null,
                    education: null,
                    graduation_at: null,
                    school: null,
                    status: 1,
                    remark: null
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '人选姓名不能为空', trigger: 'blur' }
                    ],
                    mobile: [
                        { required: true, message: '人选手机号不能为空', trigger: 'blur' },
                        { type: 'string', pattern: /^1[\d]{10}$/ , message: '请输入正确的是手机号码', trigger: 'blur' }
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
                        title: '姓名(手机号)',
                        key: 'name_mobile',
                        minWidth: 190
                    },
                    {
                        title: '公司',
                        key: 'current_company',
                    },
                    {
                        title: '职位',
                        key: 'current_job',
                    },
                    {
                        title: '最高学历',
                        key: 'education',
                    },
                    {
                        title: '毕业院校',
                        key: 'school',
                    },
                    {
                        title: '毕业时间',
                        key: 'graduation_at',
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
                this.$http.get('/candidates', { params: this.listQuery}).then( response => {
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
                        this.$http.post('/candidates', this.formValidate).then( response => {
                            this.$Message.success('添加成功');

                            this.addModelLoading = false; //加载恢复
                            this.addModel = false;       // 关闭弹窗
                            // 数据清空
                            this.$refs['formValidate'].resetFields();
                            // 重新请求表单
                            // this.listQuery.page = 1;
                            // this.getListData();
                        }).catch( response => {
                            this.addModelLoading = false;
                        })

                    } else {
                        this.addModelLoading = false;
                    }
                })
            },
            // 毕业时间选择
            graduationChange(value) {
                this.formValidate.graduation_at = value;
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
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>