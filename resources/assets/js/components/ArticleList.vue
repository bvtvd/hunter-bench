<template>
    <div>
        <div class="media" v-for="article in articles" :key="article.id">
            <div class="media-left">
                <!--<a href="#">-->
                    <!--<img class="media-object" src="" alt="article.title" title="article.title">-->
                <!--</a>-->
            </div>
            <div class="media-body">
                <h4 class="media-heading" v-html="article.title">Media heading</h4>
                <div v-html="article.body"></div>
            </div>
        </div>
    </div>
</template>

<style>
    .media {
        //border-bottom: solid 1px #999999 !important;
    }
</style>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                articles: []
            }
        },
        created() {
            this.getArticleList();
        },
        methods: {
            getArticleList(){
                this.$http.get('/articles').then( response => {
                    console.log(response);
                    this.articles = response.data
                })
            }
        }
    }
</script>
