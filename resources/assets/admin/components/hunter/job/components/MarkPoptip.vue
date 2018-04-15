<template>
    <Poptip placement="right">
        <Button type="text" size="small" style="color: #ff9900">mark</Button>
        <div class="mark-poptip" slot="content">
            <p><Button type="success" size="small" icon="happy-outline" @click="$Message.info(job_id + '')">成功</Button></p>
            <p><Button type="default" size="small" icon="sad-outline">失败</Button></p>
            <p><Button type="default" size="small" icon="ios-close">关闭</Button></p>
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
        }
    }
</script>

<style scoped>
    .mark-poptip p {
        padding: 2.5px 0;
    }
</style>
