<template>
    <div id="Sort_brand">

        <div class="container-fluid">

            <div class="row">

                <div class="col-sm-12 col-md-12 col-lg-2 line_drop">

                    <div class="sort_title">

                        <span>SORT BY</span>

                    </div>

                    <div class="sort_Details">

                        <ul>

                            <li><button class="tablinks" @click="sidemenu($event, 'brandaz')" id="defaultOpen">BRAND A - Z</button></li>

                            <li><button class="tablinks" @click="sidemenu($event, 'mostpop')" >MOST POPULAR</button></li>
                            <li><button class="tablinks" @click="sidemenu($event, 'fasionbrand')" >FASHION BRAND</button></li>
                            <li><button class="tablinks" @click="sidemenu($event, 'clothing')" >CLOTHING</button></li>
                            <li><button class="tablinks" @click="sidemenu($event, 'shopes')" >SHOES</button></li>
                            <li><button class="tablinks" @click="sidemenu($event, 'bags')" >BAGS</button></li>
                            <li><button class="tablinks" @click="sidemenu($event, 'accessories')" >ACCESSORIES</button></li>



                        </ul>

                    </div>

                    <div class="box">
                        <button class="promo_code_in">

                            <div id="fold_in">
                                <span>SORT BRAND: BRAND A - Z</span>
                                <p id="fold_pi">Open</p>
                            </div>
                        </button>
                        <div class="panel">
                            <div class="container">
                                <div class="row">
                                    <div class="filter_brand">
                                        <ul>
                                            <li><button class="tablinks" @click="sidemenu($event, 'brandaz')" id="defaultOpen1">BRAND A - Z</button></li>

                                            <li><button class="tablinks" @click="sidemenu($event, 'mostpop')" >MOST POPULAR</button></li>
                                            <li><button class="tablinks" @click="sidemenu($event, 'fasionbrand')" >FASHION BRAND</button></li>
                                            <li><button class="tablinks" @click="sidemenu($event, 'clothing')" >CLOTHING</button></li>
                                            <li><button class="tablinks" @click="sidemenu($event, 'shopes')" >SHOES</button></li>
                                            <li><button class="tablinks" @click="sidemenu($event, 'bags')" >BAGS</button></li>
                                            <li><button class="tablinks" @click="sidemenu($event, 'accessories')" >ACCESSORIES</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--       <select class="wide">

                                   <option><b>SORT BRAND: BRAND A - Z</b></option>

                                   <option value="1">BRAND A - Z</option>

                                   <option value="2">MOST POPULAR</option>

                                   <option value="3">FASHION BRAND</option>

                                   <option value="4">CLOTHING</option>

                                   <option value="5">SHOES</option>

                                   <option value="6">BAGS</option>

                                   <option value="6">ACCESSORIES</option>

                             </select> -->

                    </div>

                </div>

                <div class="col-sm-12 col-md-12 col-lg-10">
                    <div id="brandaz" class="tabcontent">
                        <div class="sort_abc">

                            <ul>

                                <li><a href="javascript:void(0)" >#</a></li>

                                <li><a href="javascript:void(0)" v-scroll-to="{el: '#element_'+alpha,duration: 2000}" v-for="(alpha,index) in alphabet">{{alpha}}</a></li>


                            </ul>

                        </div>
                        <div class="info_brands">
                            <P>Inspired by their trademark Novelty Shoes, WATT has come out with the Novel Handbag, the stylish and fun everyday bag that adds charisma to any and all outfits. Read on to catch a glimpse of WATT’s first ever collection of handbags, and for inspiration on the accessories you can wear and use while you’re taking the signature bag out and about.</P>
                            <button data-toggle="modal" data-target="#joinaps">JOIN APSTROFI</button>
                        </div>

                        <!-- ----------------------------------popup--------------------- -->
                        <div class="modal" id="joinaps">
                            <div class="modal-body">

                                <div class="row">
                                    <div class="col-md-12" >
                                        <button type="button" class="close in" data-dismiss="modal" ><img src="~assets/images/close.svg" class="popup_cross"></button>
                                        <!-- Nav tabs -->
                                        <h5>JOIN APSTROFI</h5>
                                        <!-- Tab panes -->


                                        <div class="tab-pane" id="Registration">
                                            <form role="form" class="form-horizontal">
                                                <div class="form-group">
                                                    <label for="email" class="col-sm-12 control-label">
                                                        Brand Name *</label>
                                                    <div class="col-sm-12">
                                                        <input type="text" class="form-control" id="brandname" required/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email" class="col-sm-12 control-label">
                                                        Email *</label>
                                                    <div class="col-sm-12">
                                                        <input type="email" class="form-control" id="email1" required/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email" class="col-sm-12 control-label">
                                                        Phone Number *</label>
                                                    <div class="col-sm-12">
                                                        <input type="tel" class="form-control" id="phone" required/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button type="submit" class="form-control" id="btn_bottom">
                                                            JOIN APSTROFI</button>
                                                    </div>
                                                </div>
                                                <div class="gap_ttt">
                                                </div>


                                            </form>



                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <!------------endpopup-------------------------->
                        <div class="show_brand" :id="'element_'+alpha" v-for="(alpha,index) in alphabet">
                            <div class="title_caption_brand">
                                {{alpha}}
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3" v-if="alpha == brand.key" v-for="(brand,index) in brands">
                                <div class="first_brand_show">
                                    <nuxt-link :to="$i18n.path('brands/'+brand.slug)"  exact>
                                        <img v-lazy="brand.image">
                                        <div class="brand_pro_in">
                                            <div class="brand_name_pro">
                                                {{brand.name}}
                                            </div>
                                        </div>
                                    </nuxt-link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mostpop" class="tabcontent">

                        <h3>MOST POPULAR</h3>


                    </div>
















                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "brand-index",
        data(){
            return{
                alphabet:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','W','X','Y','Z']
            }
        },
        computed:{
            ...mapGetters(['brands'])
        },
        mounted(){
            document.getElementById("defaultOpen").click();
        },
        async fetch ({app,store}) {
            let response = await app.$axios.$get('brands');
            store.dispatch('setBrands',response.data);
        },
        methods:{
            sidemenu(e,val){
                var i, tabcontent, tablinks;

                tabcontent = document.getElementsByClassName("tabcontent");

                for (i = 0; i < tabcontent.length; i++) {

                    tabcontent[i].style.display = "none";

                }

                tablinks = document.getElementsByClassName("tablinks");

                for (i = 0; i < tablinks.length; i++) {

                    tablinks[i].className = tablinks[i].className.replace(" active", "");

                }

                document.getElementById(val).style.display = "block";

                e.currentTarget.className += " active";
            }
        }
    }
</script>

<style scoped>

</style>
