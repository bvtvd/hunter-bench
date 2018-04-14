<template>
    <div>
        <h1>client detail {{ client_id }}</h1>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route)
            this.client_id = this.$route.params.id;
        },
        data() {
            return {
                client_id: 0,
            }
        }
    }
</script>
