<template>
    <div >
        <div id="menu2">
            <div class="slicknav_menu">
                       <div class="header_menu">

                <ul>
                    <li>
                        <a href="#" data-toggle="modal" data-target="#login" v-if="!loggedIn">SIGN IN / REGISTER</a>
                        <!-- <a href="#" v-on:click.prevent="logout" v-else>Logout</a> -->
                    </li>
                    <li>
                        <a :href="'men'">MEN</a>
                          <ul>
                            <li>
                                <nuxt-link  :to="$i18n.path('men/newarrivals/-1')" >
                                New Arrivals
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link  :to="$i18n.path('men/sustainable/-2')" >
                                Sustainable products
                                </nuxt-link>
                            </li>
                            <template v-for="(category,index) in categoryListMen">
                            <li  v-bind:key="index">
                                <nuxt-link  :to="$i18n.path('men/category/'+category.parent_id)" exact>
                                    {{ category.parent_name }}
                                </nuxt-link>
                            </li>
                            </template>
                        </ul>
                    </li>
                    <li><nuxt-link :to="'women'">WOMEN</nuxt-link>
                        <ul>
                            <li>
                                <nuxt-link  :to="$i18n.path('women/newarrivals/-1')" >
                                New Arrivals
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link  :to="$i18n.path('women/sustainable/-2')" >
                                Sustainable products
                                </nuxt-link>
                            </li>
                            <template v-for="(category,index) in categoryListWomen">
                            <li  v-bind:key="index">
                                <nuxt-link  :to="$i18n.path('women/category/'+category.parent_id)" exact>
                                    {{ category.parent_name }}
                                </nuxt-link>
                            </li>
                            </template>
                        </ul>
                    </li>
                    <!-- <li><a class='active' href="#">SALE</a>
                        <ul>
                            <li><a href="#">DENIM</a></li>
                        </ul>
                    </li> -->
                    <li><nuxt-link :to="'blog'">BLOG</nuxt-link></li>
                    <li><nuxt-link :to="'brands'">BRANDS</nuxt-link></li>
                    <li><nuxt-link :to="'#'" class="btn_menu" id="language_change">ID / EN</nuxt-link></li>
                </ul>
                <div class="container-fluid">
                    <div class="height_set">
                        <div class="col-sm-6 col-md-6 inline_rest">
                            <div class="header_footer">
                                <p>About Apstrofi</p>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Smart Sizing</a></li>
                                    <li><a href="#">Partnership</a></li>
                                    <li><a href="#">Membership</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                                <div class="asp_head">
                                    <span>Apstrofi © 2019</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 inline_rest">
                            <div class="header_footer">
                                <p>Customer Care</p>
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Orders & Shipping</a></li>
                                    <li><a href="#">Return & Exchange</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>

                            </div>
                            <div class="social_media_header">
                                <div class="center_icon">
                                    <div class='icon social wh'><a href="#"><img src="~assets/images/Whatsapp.svg"><!-- <i class="fa fa-whatsapp" aria-hidden="true"></i> --></a></div>
                                    <div class='icon social fb'><a href="#"><img src="~assets/images/facebook.svg"><!-- <i class='fa fa-facebook-square'></i> --></a></div>
                                    <div class='icon social in'><a href="#"><img src="~assets/images/Instagram.svg"></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
	             </div>
    </div>
</template>

<script>
export default {
    name: "MobileMenu",
    data() {
        return {
            categoryListMen:[],
            categoryListWomen:[]
        }
    }, 
    mounted(){
        $('#menu').slicknav();
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

        this.asyncData()
    },
    methods:{
        async asyncData() {
			this.$axios.defaults.baseURL = process.env.baseURL

            let menCat = await this.$axios.$get('men/category');
            let womenCat = await this.$axios.$get('women/category');
            
            this.categoryListMen =  menCat.data,
            this.categoryListWomen = womenCat.data
        },
        logout() {
        console.log('workinggggggg  ')
            this.$auth.logout();
        },
    }
}
</script>