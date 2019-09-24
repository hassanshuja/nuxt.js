<template>
    <div class="blog_main">
        <div class="container-fluid">

            <div class="row infinite-scroll-list">

                <div class="main_blog" v-for="(blog,index) in blogs" :key="index">
                    <div class="col-sm-12 col-md-5 border_btm_in">

                        <div class="blog_left">

                            <img v-lazy="blog.images[0].thumb_image_url">

                        </div>

                    </div>

                    <div class="col-sm-12 col-md-7">

                        <div class="blog_right">

                            <div class="cat_blog">
                                <nuxt-link :to="$i18n.path('blog/category/'+blog.category_url)"  exact>
                                    {{blog.category_name}}
                                </nuxt-link>

                            </div>

                            <div class="blog_name">
                                <nuxt-link :to="$i18n.path('blog/detail/'+blog.slug)" exact>
                                    {{blog.title}}
                                </nuxt-link>

                            </div>

                            <div class="blog_content">

                                <p>{{blog.subtitle}}</p>

                                <span>By {{blog.author}} / {{blog.date}}</span>

                                <span class="right_mobile">{{blog.category_name}}</span>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <no-ssr>
            <infinite-loading
                    ref="infiniteLoading"
                    @infinite="infiniteHandler">
            </infinite-loading>
            </no-ssr>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "index",
        transition(to, from) {
            if (!from) return 'slide-left'
            return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
        },
        data() {
            return {
                skip: 0
            }
        },
        computed:{
            ...mapGetters(['blogs'])
        },
        async fetch ({app,store}) {
            let response = await app.$axios.$get('blog');
            store.dispatch('setBlogs',response.data);
        },
        methods:{
            infiniteHandler() {
                setTimeout(() => {
                    if (this.count < 20) {
                        this.count += 10;
                        this.$refs.infiniteLoading.stateChanger.loaded()
                    } else {
                        this.$refs.infiniteLoading.stateChanger.complete()
                    }
                }, 1000)
            }
        }

    }
</script>

<style scoped>
    .infinite-scroll {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 680px;
        margin: 100px 0;
    }
    .infinite-scroll-list-item {
        height: 60px;
        margin: 10px 0;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 10px;
    }
</style>