<template>
<div>
    <!--<bottom-header :categoryList="categoryList" :url="'men/category/'"></bottom-header>-->
    <div class="heading_section">

        <div class="container-fluid">

            <div class="row" id="bor" style="margin:auto">

                <div class="col-sm-12 col-md-6 border_spe">

                    <div class="content_main_header">

                        <div class="Shop_brand_title">

                            SHOP BRAND

                        </div>

                        <div class="bread_crumb">

                            <ul>

                                <li><a href="#">BRANDS</a></li>

                                <li>  /  TEES & SCISSORS</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <div class="col-sm-12 col-md-6 border_spe">



                    <div class="brand_cat">

                        <form class="woocommerce-ordering" >
                            <div class="dropdown">

                                <button class="dropbtn">

                                    SORT BY : <strong>NEW IN</strong>

                                </button>

                                <div class="dropdown-content">

                                    <a href="@">Sort by average rating</a>

                                    <a href="#">Sort by newness</a>

                                    <a href="#">Sort by price: low to high</a>

                                    <a href="#">Sort by price: high to low</a>



                                </div>

                            </div>
                            <!--  <select name="orderby" class="orderby">

                                 <option value="popularity" selected="selected">SORT BY : <strong>NEW IN</strong></option>

                                 <option value="rating"><strong>Sort by average rating</strong></option>

                                 <option value="date">Sort by newness</option>

                                 <option value="price">Sort by price: low to high</option>

                                 <option value="price-desc">Sort by price: high to low</option>

                             </select> -->
                            <div class="page_redirect">

                                <ul>

                                    <li><a href="#" class="active">30</a>

                                        <a href="#">40</a>

                                        <a href="#">60</a></li>

                                </ul>

                            </div>
                            <input type="hidden" name="paged" value="1">

                            <input type="hidden" name="WordApp_launch" value="">

                            <input type="hidden" name="WordApp_mobile_site" value="">

                            <input type="hidden" name="WordApp_demo" value="">

                            <input type="hidden" name="WordApp_mobile_app" value="">

                        </form>

                    </div>



                </div>

            </div>

        </div>

    </div>

    <div class="filter_mobile">

        <div class="col-sm-12 col-md-12">

            <select>

                <option value="volvo">FILTER</option>

                <option value="saab">Saab</option>

                <option value="mercedes">Mercedes</option>

                <option value="audi">Audi</option>

            </select>

        </div>

        <div class="col-sm-12 col-md-12">

            <select>

                <option value="volvo">SORT BY:PRICE HIGH TO LOW</option>

                <option value="saab">Saab</option>

                <option value="mercedes">Mercedes</option>

                <option value="audi">Audi</option>

            </select>

        </div>

    </div>

    <div class="heading_section" style="padding-top:0px">

        <div class="container-fluid">

            <div class="row">

                <div class="col-sm-12 col-md-3 col-lg-3">

                    <div class="tab" id="mobile_hide">



                        <button class="tablinks" :class="is_3_column_layout ? 'active' : ''" @click="changeLayout(1)" ><img src="~assets/images/APSTROFIICONS_11.png"></button>
                        <button class="tablinks" :class="is_3_column_layout ? '' : 'active'" @click="changeLayout(0)" ><img src="~assets/images/APSTROFIICONS_10.png"></button>

                    </div>

                    <div class="View_cloth">
                        <span>VIEW ALL CLOTHING</span>
                        <button class="collapsible">TOPS</button>
                        <div class="content_cat" style="display: none;">
                            <div class="memory">
                                <ul>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Trousers,</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="collapsible">OUTERWEAR</button>
                        <div class="content_cat" style="display: none;">
                            <div class="memory">
                                <ul>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Trousers,</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="collapsible">PANTS</button>
                        <div class="content_cat" style="display: none;">
                            <div class="memory">
                                <ul>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Trousers,</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="collapsible">SPORTS</button>
                        <div class="content_cat" style="display: none;">
                            <div class="memory">
                                <ul>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Trousers,</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="collapsible">UNDERWEAR</button>
                        <div class="content_cat" style="display: none;">
                            <div class="memory">
                                <ul>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Trousers,</a></li>
                                </ul>
                            </div>
                        </div>
                        <button class="collapsible">FABRIC CARE</button>
                        <div class="content_cat" style="display: none;">
                            <div class="memory">
                                <ul>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Pants</a></li>
                                    <li><a href="#">Trousers,</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="view_filter">

                        <span>FILTER</span>

                        <button class="collapsible">SIZE</button>

                        <div class="content">

                            <ul>

                                <li><button id="btn1">SMALL</button></li>

                                <li><button id="btn1">LARGE</button></li>

                                <li><button id="btn1">EXTRA-LARGE</button></li>

                                <li><button id="btn1">Append text</button></li>

                                <li><button id="btn1">SMALL</button></li>

                                <li><button id="btn1">LARGE</button></li>

                                <li><button id="btn1">EXTRA-LARGE</button></li>

                                <li><button id="btn1">Append text</button></li>

                            </ul>

                        </div>

                        <button class="collapsible">COLOR</button>

                        <div class="content">

                            <ul>

                                <li><button id="btn1">SMALL</button></li>

                                <li><button id="btn1">LARGE</button></li>

                                <li><button id="btn1">EXTRA-LARGE</button></li>

                                <li><button id="btn1">Append text</button></li>

                                <li><button id="btn1">SMALL</button></li>

                                <li><button id="btn1">LARGE</button></li>

                                <li><button id="btn1">EXTRA-LARGE</button></li>

                                <li><button id="btn1">Append text</button></li>

                            </ul>

                        </div>

                        <button class="collapsible">PRICE</button>

                        <div class="content">

                            <ul>

                                <li><button id="btn1">SMALL</button></li>

                                <li><button id="btn1">LARGE</button></li>

                                <li><button id="btn1">EXTRA-LARGE</button></li>

                                <li><button id="btn1">Append text</button></li>

                                <li><button id="btn1">SMALL</button></li>

                                <li><button id="btn1">LARGE</button></li>

                                <li><button id="btn1">EXTRA-LARGE</button></li>

                                <li><button id="btn1">Append text</button></li>

                            </ul>

                        </div>

                    </div>
                    <div class="box">
                        <button class="promo_code_in">

                            <div id="fold_in">
                                <span>MEN/NEW</span>

                            </div>
                        </button>
                        <div class="panel">
                            <div class="container">
                                <div class="row">
                                    <div class="filter_brand">
                                        <ul>
                                            <li> <button class="tablinks" @click="changeLayout($event, 'aboutus')" id="defaultOpen">ABOUT US</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'contactus')">CONTACT US</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'smartsizing')">SMART SIZING</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'ordershipping')">ORDER &amp; SHIPPING</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'returnexchange')">PAYMENT METHODS</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'partnership')">PARTNERSHIP</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'termscondition')">TERMS &amp; CONDITIONS</button></li>
                                            <li><button class="tablinks" @click="changeLayout($event, 'privacypolicy')">PRIVACY POLICY</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div class="filter_mobile">

                    <div class="col-sm-12 col-md-12">

                        <select>

                            <option value="volvo">FILTER</option>

                            <option value="saab">Saab</option>

                            <option value="mercedes">Mercedes</option>

                            <option value="audi">Audi</option>

                        </select>

                    </div>

                    <div class="col-sm-12 col-md-12">

                        <select>

                            <option value="volvo">SORT BY:PRICE HIGH TO LOW</option>

                            <option value="saab">Saab</option>

                            <option value="mercedes">Mercedes</option>

                            <option value="audi">Audi</option>

                        </select>

                    </div>

                </div>
                <div class="col-sm-12 col-md-9 col-lg-9">

                    <div class="size_show"> <button class="clear_all">Clear All</button></div>

                    <div id="changeLayout">

                        <div class="col-sm-12  colum_pro" :class="is_3_column_layout ? 'col-md-3' : 'col-md-4' "  >

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylethree.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12  colum_pro" :class="is_3_column_layout ? 'col-md-3' : 'col-md-4'">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylefour.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12  colum_pro" :class="is_3_column_layout ? 'col-md-3' : 'col-md-4'">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/styleone.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12  colum_pro" :class="is_3_column_layout ? 'col-md-3' : 'col-md-4'">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylethree.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div> </a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><div class="marqu"><img src="~assets/images/styletwo.jpg">
                                        <div class="marquee" style="">
                                            <ul>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                            </ul>                      </div>

                                    </div>

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><div class="marqu"><img src="~assets/images/styletwo.jpg">
                                        <div class="marquee" style="">
                                            <ul>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                            </ul>                      </div>

                                    </div>

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><div class="marqu"><img src="~assets/images/styletwo.jpg">
                                        <div class="marquee" style="">
                                            <ul>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                            </ul>
                                        </div>

                                    </div>

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><div class="marqu"><img src="~assets/images/styletwo.jpg">
                                        <div class="marquee" style="">
                                            <ul>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                                <li>Sale 50%</li>
                                            </ul>
                                        </div>

                                    </div>

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>
                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/styletwo.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylefour.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/styleone.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>
                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylethree.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>
                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/styletwo.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylefour.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/styleone.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>
                        <div class="col-sm-12 col-md-3 colum_pro">

                            <div class="best_saller_inner">

                                <div class="best_saller_main">

                                    <a href="#"><img src="~assets/images/stylethree.jpg">

                                        <div class="best_saller_name">

                                            Sliver Black Wiz Mules Slip-ons

                                            <p><b>LECATHVA</b> / IDR 619,000</p>

                                        </div></a>

                                </div>

                            </div>

                        </div>
                        <div class="pagination">

                            <a href="#" class="active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">></a>

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
        name: "index",
        data(){
            return{
                is_3_column_layout:1
            }
        },
        methods:{
            changeLayout(val) {
                this.is_3_column_layout = val;
            },
            changeLayout1 : (evt, cityName) =>{
                 var i, tabcontent, tablinks;

                 tabcontent = document.getElementsByClassName("tabcontent");

                 for (i = 0; i < tabcontent.length; i++) {

                     tabcontent[i].style.display = "none";

                 }

                 tablinks = document.getElementsByClassName("tablinks");

                 for (i = 0; i < tablinks.length; i++) {

                     tablinks[i].className = tablinks[i].className.replace(" active", "");

                 }

                 document.getElementById(cityName).style.display = "block";

                 evt.currentTarget.className += " active";

             }
        }
    }
</script>

<style src="~/assets/css/catalogue.css"></style>
