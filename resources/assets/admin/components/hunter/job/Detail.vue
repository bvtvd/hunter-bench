<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="职位详情" name="name1">
                    <Row>
                        <!--职位的一生-->
                        <Col span="8" class-name="padding-half-rem-x">
                            <Card>
                                <p slot="title">
                                    <Icon type="android-bicycle"></Icon>
                                    职位的一生
                                </p>
                                <Timeline>
                                    <TimelineItem v-for="item in life" :color="lifeTimeColor[item.type]" :key="item.id">

                                        <Icon type="trophy" slot="dot" v-if="item.type == 4"></Icon>
                                        <Icon type="heart-broken" slot="dot" v-if="item.type == 3"></Icon>
                                        <Icon type="android-walk" slot="dot" v-if="item.type == 1"></Icon>
                                        <Icon type="flag" slot="dot" v-if="item.type == 2"></Icon>
                                        <Icon type="close-circled" slot="dot" v-if="item.type == 9"></Icon>
                                        <Icon type="wrench" slot="dot" v-if="item.type == 5"></Icon>
                                        <Icon type="thumbsup" slot="dot" v-if="item.type == 6"></Icon>
                                        <Icon type="heart-broken" slot="dot" v-if="item.type == 7"></Icon>
                                        <Icon type="close-circled" slot="dot" v-if="item.type == 8"></Icon>

                                        <p class="time">{{item.created_at}}</p>
                                        <p class="content">{{item.remark}}</p>
                                    </TimelineItem>
                                </Timeline>
                            </Card>
                        </Col>
                        <Col span="16">
                            <!--推荐详情-->
                            <!--推荐提醒-->
                            <Row>
                                <Col span="12" class-name="padding-half-rem-x">
                                    <Card>
                                        <p slot="title">
                                            <Icon type="more"></Icon>
                                            推荐详情
                                        </p>
                                        <Form :label-width="80">
                                            <FormItem label="客户">
                                                {{job.client}}
                                            </FormItem>
                                            <FormItem label="职位">
                                                {{job.name}}
                                            </FormItem>
                                            <FormItem label="备注">
                                                {{job.remark}}
                                            </FormItem>
                                            <FormItem label="创建时间">
                                                {{job.created_at}}
                                            </FormItem>
                                        </Form>
                                    </Card>
                                </Col>
                                <Col span="12" class-name="padding-half-rem-x">
                                    <infor-card
                                            id-name="visit_count"
                                            :end-val="parseInt(job.recommend_number)"
                                            iconType="ios-eye"
                                            color="#64d572"
                                            :iconSize="50"
                                            intro-text="已推荐"
                                    ></infor-card>

                                    <br>

                                    <Card>
                                        <p slot="title">
                                            <Icon type="coffee" color="#19be6b"></Icon>
                                            职位状态
                                        </p>
                                        <h2 style="text-align: center;color: #2d8cf0">{{job.status_value}}</h2>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </TabPane>
                <Button type="info" @click="handleBack" icon="ios-undo" size="small" slot="extra">返回</Button>
            </Tabs>
        </Row>
    </div>
</template>

<script>
    import inforCard from './components/inforCard.vue';

    export default {
        mounted() {
            this.job_id = this.$route.params.id;

            // 获取推荐的一生
            this.getJobLife();
            // 获取推荐详情
            this.getJobDetail();
        },
        components: {
            inforCard
        },
        data() {
            return {
                job_id : 0,
                life: [],
                lifeTimeColor: {
                    1 : '#2d8cf0',
                    2 : '#ff9900',
                    3 : '#80848f',
                    4 : '#19be6b',
                    9 : '#80848f',
                    7 : '#80848f',
                    8: '#80848f',
                    6: '#ed3f14'
                },
                job: {
                    recommend_number: 0
                },
            }
        },
        methods: {
            // 返回
            handleBack(){
                this.$router.go(-1);
            },
            // 获取职位的一生
            getJobLife(){
                this.$http.get('/jobs/life', {
                    params: {
                        id: this.job_id
                    }
                }).then( response => {
                    this.life = response.data;
                })
            },
            getJobDetail(){
                this.$http.get(`/jobs/${this.job_id}`).then( response => {
                    this.job = response.data;
                })
            }
        }
    }
</script>

<style scoped>
    .padding-half-rem-x{
        padding:0 0.5rem;
    }
    .notice-border{
        border-bottom: #e9eaec solid 1px;
        margin-bottom: 0.5rem;
    }
</style>
