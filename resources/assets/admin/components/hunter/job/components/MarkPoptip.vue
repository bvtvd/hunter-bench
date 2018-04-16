<template>
    <Poptip placement="right">
        <Button type="text" size="small" style="color: #ff9900">mark</Button>
        <div class="mark-poptip" slot="content">
            <p><Button type="success" size="small" icon="happy-outline" @click="markSuccess">成功</Button></p>
            <p><Button type="default" size="small" icon="sad-outline" @click="markFail">失败</Button></p>
            <p><Button type="default" size="small" icon="ios-close" @click="markClose">关闭</Button></p>
        </div>
    </Poptip>
</template>

<script>
    export default {
        mounted() {
        },
        props: {
            job_id : {
                default: 0,
                type: Number,
            }
        },
        methods: {
            markSuccess(){
                this.$http.put(`/jobs/mark/success/${this.job_id}`).then( response => {
                    this.$Message.success('操作成功');
                    this.$emit('statusUpdated');    // 重新请求列表数据
                })
            },
            markFail() {
                this.$http.put(`/jobs/mark/fail/${this.job_id}`).then( response => {
                    this.$Message.success('操作成功');
                    this.$emit('statusUpdated');// 重新请求列表数据
                })
            },
            markClose(){
                this.$http.put(`/jobs/mark/close/${this.job_id}`).then( response => {
                    this.$Message.success('操作成功');
                    this.$emit('statusUpdated');// 重新请求列表数据
                })
            }
        }
    }
</script>

<style scoped>
    .mark-poptip p {
        padding: 2.5px 0;
    }
</style>
