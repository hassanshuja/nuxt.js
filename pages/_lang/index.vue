<template>
    <div>
        <Newsletter></Newsletter>
        <div id="section_part">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-6  top_front">
                        <div class="product_img">
                            <div class="pro_first">
                                <nuxt-link :to="$i18n.path(data.section_1.redirect_link)" exact>
                                    <img v-lazy="data.section_1.image_url">
                                </nuxt-link>
                                <div class="top_shop">
                                    <nuxt-link :to="$i18n.path(data.section_1.redirect_link)" exact><button class="shop_now_men">{{data.section_1.button_text}}</button></nuxt-link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="product_img">
                            <div class="pro_first">
                                <nuxt-link :to="$i18n.path(data.section_2.redirect_link)" exact><img v-lazy="data.section_2.image_url"></nuxt-link>
                                <div class="top_shop">
                                    <nuxt-link :to="$i18n.path(data.section_2.redirect_link)" exact><button class="shop_now_men">{{data.section_2.button_text}}</button></nuxt-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-sm-12 col-md-12 right_content">
                    <div class="banner_below">
                        <nuxt-link :to="$i18n.path(data.section_3.redirect_link)" exact><img v-lazy="data.section_3.image_url"></nuxt-link>
                        <div class="top_in_shop">
                            <button class="shop_brand">{{data.section_3.button_text}}</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
        <about-content ></about-content>
    </div>
</template>

<script>
    import Newsletter from "../../components/Model/Newsletter";
    import AboutContent from "../../components/Front/AboutContent";
    import { mapGetters } from 'vuex'
    export default {
        name: "home-index",
        components: {AboutContent, Newsletter},
        computed:{
            ...mapGetters(['common'])
        },
        data(){
            return{
                data : []
            }
        },
        // transition: 'bounce',
        mounted(){
            setTimeout(function () {
                $('#mypopup').modal('show');
            },2000);

            $(document).on('click', '.slicknav_btn', function() {
                $('body').toggleClass("overflow");

                var header = $('div#header .container').height();
                var header_top = $('div#header_top').height();
                var new_height = parseInt(header) + parseInt(header_top);
                var win_height = $(window).height();
                var final_height = parseInt(win_height) - parseInt(new_height) + parseInt(7);

                setInterval(function(){
                    $('.slicknav_nav').css('height', final_height);
                }, 300);
            });
            $(document).on('click','.close',function(){
                $('.search-input').removeClass('show');
            });
        },
        async asyncData ({ app,store }) {
            app.$axios.setHeader('lang', store.state.locale)
            let response = await app.$axios.$get('page/home');

            return {
                data: response.data
            }
        }
    }
</script>

<style scoped>
    .border_up{
        float: left;
        width: 100%;
        border-bottom: 0.5px solid #979797;
        padding: 19px;
        padding-top: 0;
        opacity: 0.3
    }
</style>
