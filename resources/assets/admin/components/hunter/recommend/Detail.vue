<template>
    <div>
        <Row>
            <Tabs value="name1">
                <TabPane label="推荐详情" name="name1">
                    <Row>
                        <!--推荐的一生-->
                        <Col span="8" class-name="padding-half-rem-x">
                            <Card>
                                <p slot="title">
                                    <Icon type="android-bicycle"></Icon>
                                    推荐的一生
                                </p>
                                <Timeline>
                                    <TimelineItem v-for="item in life" :color="lifeTimeColor[item.type]" :key="item.id">
                                        <Icon type="trophy" slot="dot" v-if="item.type == 4"></Icon>
                                        <Icon type="heart-broken" slot="dot" v-if="item.type == 3"></Icon>
                                        <Icon type="android-walk" slot="dot" v-if="item.type == 1"></Icon>
                                        <Icon type="flag" slot="dot" v-if="item.type == 2"></Icon>
                                        <Icon type="close-circled" slot="dot" v-if="item.type == 9"></Icon>
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
                                                {{recommend.client}}
                                            </FormItem>
                                            <FormItem label="职位">
                                                {{recommend.job}}
                                            </FormItem>
                                            <FormItem label="人选">
                                                {{recommend.candidate_name}}
                                            </FormItem>
                                            <FormItem label="人选手机">
                                                {{recommend.candidate_mobile}}
                                            </FormItem>
                                            <FormItem label="状态">
                                                {{recommend.status_value}}
                                            </FormItem>
                                            <FormItem label="推荐时间">
                                                {{recommend.created_at}}
                                            </FormItem>
                                        </Form>
                                    </Card>
                                </Col>
                                <Col span="12" class-name="padding-half-rem-x">
                                    <Card>
                                        <p slot="title">
                                            <Icon type="android-notifications"></Icon>
                                            推荐提醒
                                        </p>
                                        <div>
                                            <div :class="{'notice-border': index != (reminds.length -1)}" v-for="(item, index) in reminds" :key="item.id">
                                                <h4>{{item.title}}{{index}}</h4>
                                                <p style="color: #80848f">提醒时间: {{item.notice_at}}</p>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </div>
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
    export default {
        mounted() {
            this.recommend_id = this.$route.params.id;

            // 获取推荐的一生
            this.getRecommendLife();
            // 获取推荐详情
            this.getRecommendDetail();
            // 获取推荐提醒
            this.getRemindList()
        },
        data() {
            return {
                recommend_id : 0,
                life: [],
                lifeTimeColor: {
                    1 : '#2d8cf0',
                    2 : '#ff9900',
                    3 : '#80848f',
                    4 : '#19be6b',
                    9 : '#80848f'
                },
                recommend: {},
                reminds: []
            }
        },
        methods: {
            // 返回
            handleBack(){
                this.$router.go(-1);
            },
            getRecommendLife(){
                this.$http.get('/recommends/life', {
                    params: {
                        id: this.recommend_id
                    }
                }).then( response => {
                    this.life = response.data;
                })
            },
            getRecommendDetail(){
                this.$http.get(`/recommends/${this.recommend_id}`).then( response => {
                    this.recommend = response.data;
                })
            },
            getRemindList(){
                this.$http.get(`/recommends/remind`, {
                    params: {
                        id: this.recommend_id
                    }
                }).then( response => {
                    this.reminds = response.data;
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
