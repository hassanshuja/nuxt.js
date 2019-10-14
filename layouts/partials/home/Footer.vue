<template>
    <div id="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-8 hide_web">
                    <div class="promo_point_title">

                        Subscribe & Get Free <b>IDR 100,000 Voucher</b>
                        <div class="search_footer">
                            <input type="text" name="Submit">
                            <button type="submit">SUBMIT</button>
                        </div>


                    </div>
                </div>
                <div class="col-sm-6 col-md-2 res_part">
                    <div class="footer_about">
                        About Apstrofi
                        <ul>
                            <li><nuxt-link :to="'info#aboutus'">About Us</nuxt-link></li>
                            <li><nuxt-link :to="'info#smartsizing'">Smart Sizing</nuxt-link></li>
                            <li><nuxt-link :to="'info#partnership'">Partnership</nuxt-link></li>
                            <li><nuxt-link :to="'#'">Membership</nuxt-link></li>
                            <li><nuxt-link :to="'info#privacypolicy'">Privacy Policy</nuxt-link></li>
                        </ul>
                        <div class="asp">
                            Apstrofi © 2019
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-2 res_part">
                    <div class="footer_about">
                        Customer Care
                        <ul>
                            <li><nuxt-link :to="'info#contactus'">Contact Us</nuxt-link></li>
                            <li><nuxt-link :to="'info#ordershipping'">Orders & Shipping</nuxt-link></li>
                            <li><nuxt-link :to="'info#returnexchange'">Return & Exchanges</nuxt-link></li>
                            <li><nuxt-link :to="'info#paymentmethod'">Payment Methods</nuxt-link></li>
                            <li><nuxt-link :to="'info#termscondition'">Terms & Conditions</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 show_responsive">
                    <div class="promo_point_title">
                        <div class="top_position">
                            Subscribe & Get Free <b>IDR 100,000 Voucher</b>
                            <div class="search_footer">
                                <input type="text" name="Submit">
                                <button type="submit">SUBMIT</button>
                            </div>
                        </div>
                        <div class="social_media">
                            <p>Connect with Us</p>
                            <div class="center_icon">
                                <div class='icon social wh'><a href="#"><img src="~assets/images/Whatsapp.svg"><!-- <i class="fa fa-whatsapp" aria-hidden="true"></i> --></a></div>
                                <div class='icon social fb'><a href="#"><img src="~assets/images/facebook.svg"><!-- <i class='fa fa-facebook-square'></i> --></a></div>
                                <div class='icon social in'><a href="#"><img src="~assets/images/Instagram.svg"></a></div>
                            </div>
                        </div>
                        <div class="res_asp">
                            Apstrofi © 2019
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home-Footer"
    }
</script>

<style scoped>

</style>