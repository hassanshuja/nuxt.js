<template>
    <div id="header_top">
        <div class="border_up">
        </div>
        <div class="container-fluid">
            <div class="row">
                <button class="promo_code" @click="openOffer($event)">
                    <span>UP To 50% SALE ONLINE FOR MEN AND WOMEN</span>
                    <div id="fold">
                        <p id="fold_p" v-if="is_open">{{$t('top-offer.view-detail')}}</p>
                        <p id="fold_p" v-else>{{$t('top-offer.hide-detail')}}</p>
                    </div>
                </button>
                <div class="panel">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 gap_head">
                                <div class="inner_promo">
                                    <div class="promo_title">
                                        ENJOY UP To 50% REDUCTION FOR MEN AND WOMEN PRODUCTS.<br>PROMO ENDS 1 APRIL
                                        <br>
                                        <br>
                                        <a href="#" class="res_hid">SHOP NOW</a>
                                        <br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-5 gap_below">
                                <div class="promo_right">
                                    <div class="promo_terms">
                                        <p>Terms & Conditions:</p>
                                        <ul>
                                            <li>1. Available for BCA,Mandiri, Permata Bank, CIMB Niaga, Standard Chartered, HSBC, dan Danamon cardholders</li>
                                            <li>2. Available for 3-month, 6-month and 12-month</li>
                                            <li>3. Available for minimum purchase of IDR 500.00</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bel_title">
                                    <a href="#" class="res_hid">SHOP NOW</a>
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
        name: "HomeTopOffer",
        data(){
            return{
                is_open : true
            }
        },
        methods:{
            openOffer(e){
                this.is_open = !this.is_open;
                var acc = document.getElementsByClassName("promo_code");
                acc[0].classList.toggle("active");
                var panel = acc[0].nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";

                }
            }
        }
    }
</script>

<style scoped>
    .border_up{
        border-bottom: 1px solid #fff;
        width: 100%;
        /* padding: 13px; */
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto;
        position: relative;
        top: 33px;
        opacity: 0.3

    }
</style>