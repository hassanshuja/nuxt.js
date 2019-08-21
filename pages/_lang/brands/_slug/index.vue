<template>
<div>
    <div class="tees_section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="brand_banner">
                        <img src="~assets/images/demo_brand.png">
                        <div class="brand_view">
                            BRAND BANNER
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 hel">
                    <div class="barnd_right_side">
                        <h4>TEES & SCISSORS BRAND NAME</h4>
                        <div class="tees_loc">
                            <ul>
                                <li>LOCATION</li>
                                <li>SINCE</li>
                            </ul>
                        </div>
                        <div class="tees_loc_name">
                            <ul>
                                <li>Indonesia</li>
                                <li>2018</li>
                            </ul>
                        </div>
                        <div class="info_brand">
                            Inspired by their trademark Novelty Shoes, WATT has come out with the Novel Handbag, the stylish and fun everyday bag that adds charisma to any and all outfits. Read on to catch a glimpse of WATT’s first ever collection of handbags, and for inspiration on the accessories you can wear and use while you’re taking the signature bag out and about.
                        </div>
                        <button   data-toggle="modal" data-target="#brand_subscribe" class="sub_brand">SUBSCRIBE</button>

                    </div>
                    <!-- ----------------------------------popup--------------------- -->

                    <div class="modal fade" id="brand_subscribe" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">

                                <div id="lorem">
                                    <div class="left_pop">
                                        <img src="~assets/images/que.png">
                                    </div>
                                    <div class="right_pop">
                                        <button type="button" class="close in" data-dismiss="modal"><img src="~assets/images/close.svg" class="popup_cross"></button>
                                        <span>Sign up to our newsletter and receive 10% off your first order.
		         </span>
                                        <input type="text" name="Email" placeholder="Email Address">
                                        <div class="form-group">
                                            <button type="button" class="submit_btn" style="margin-bottom: 0;">SUBMIT</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <!------------endpopup-------------------------->
                </div>
            </div>
        </div>
    </div>

    <div class="heading_section" style="padding-top: 7px;">

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
                            <!--   <select name="orderby" class="orderby">

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

    <div class="heading_section" style="padding-top: 7px;">

        <div class="container-fluid">

            <div class="row">

                <div class="col-sm-12 col-md-3">

                    <div class="tab" id="mobile_hide">



                        <button class="tablinks" onclick="openCity(event, 'Paris')" id="defaultOpen"><img src="~assets/images/APSTROFIICONS_11.png"></button>
                        <button class="tablinks" onclick="openCity(event, 'London')" ><img src="~assets/images/APSTROFIICONS_10.png"></button>

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

                </div>

                <div class="col-sm-12 col-md-9">

                    <div class="size_show">

                        <button class="clear_all">Clear All</button>

                    </div>

                    <div id="London" class="tabcontent" >

                        <div class="col-sm-12 col-md-4 colum_pro">

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

                        <div class="col-sm-12 col-md-4 colum_pro">

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

                        <div class="col-sm-12 col-md-4 colum_pro">

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

                        <div class="col-sm-12 col-md-4 colum_pro">

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

                        <div class="col-sm-12 col-md-4 colum_pro">

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

                        <div class="col-sm-12 col-md-4 colum_pro">

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

                    </div>

                    <div id="Paris" class="tabcontent">

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

                                        </div> </a>

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

                    </div>



                </div>



            </div>

        </div>

    </div>
</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style src="~/assets/css/brand-detail.css"></style>
