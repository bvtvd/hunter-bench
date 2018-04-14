<template>
    <div>
        <h1>Laravel 5 - 酷炫的后台</h1>
        <h2>欢迎您, {{ $auth.user().name }}</h2>
    </div>

</template>

<script>
    export default {
        mounted() {
            console.log(this.$auth.user())
            this.user = this.$auth.user();
        },
        data() {
            return {
                user: {}
            }
        }
    }
</script>
