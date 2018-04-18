<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="人选详情" name="name1">
                    <Row>
                        <Col span="16">
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
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formValidate')">修改</Button>
                                <!--<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>-->
                            </FormItem>
                        </Form>
                        </Col>
                    </Row>
                </TabPane>

                <Button type="info" @click="handleBack" icon="ios-undo" size="small" slot="extra">返回</Button>
            </Tabs>
        </Row>


    </div>
</template>

<script>
    export default {
        mounted() {
            this.candidate_id = this.$route.params.id;
            this.getDetail();   // 获取人选详情
        },
        data() {
            return {
                candidate_id: 0,
                formValidate: {
                    id: 0,
                    user_id: 0,
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
            }
        },
        methods: {
            getDetail(){
                this.$http.get(`/candidates/${this.candidate_id}`).then( response => {
                    this.formValidate = response.data;
                    console.log(this.formValidate);
                })
            },
            // 返回
            handleBack(){
                this.$router.go(-1);
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // 发送修改请求
                        this.$http.put(`/candidates/${this.candidate_id}`, this.formValidate).then( response => {
                            this.$Message.success('修改成功');
                        })
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            // 毕业时间选择
            graduationChange(value) {
                this.formValidate.graduation_at = value;
            },
        }
    }
</script>
