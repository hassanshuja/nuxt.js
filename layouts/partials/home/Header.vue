<template>
    <div>
        <div id="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4 col-md-4 inline_facts">
                        <div class="header_logo">
                            <nuxt-link :to="$i18n.path('')" exact>
                                <img src="~assets/images/Logo Apstrofi 2.svg">
                            </nuxt-link>
                        </div>
                        <div class="language_head">
                            <ul>
                                <li><NuxtLink   :to="$route.fullPath.indexOf('/id') < 0 ?  `/id` + $route.fullPath : $route.fullPath"   exact>
                                    {{ $t('links.indonesia') }}
                                </NuxtLink></li>
                                <li>/</li>
                                <li><NuxtLink :to="$route.fullPath.replace(/^\/[^\/]+/, '')"     exact>
                                    {{ $t('links.english') }}
                                </NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 hide_menu">
                        <div class="header_menu_web">
                            <ul>
                                <li><a href="#" data-toggle="modal" data-target="#login">SIGN IN / REGISTER</a></li>
                                <li><nuxt-link :to="$i18n.path('men')"  exact>
                                        {{ $t('menu.men') }}
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="$i18n.path('women')"  exact>
                                        {{ $t('menu.women') }}
                                    </nuxt-link>
                                </li>
                                <li>
                                    <a  href="#" style="color: #d0021b">
                                        {{ $t('menu.sale') }}
                                    </a>
                                </li>
                                <li>
                                    <nuxt-link :to="$i18n.path('blog')" exact>
                                        {{ $t('menu.blog') }}
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="$i18n.path('brands')" exact>
                                        {{ $t('menu.brands') }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4 in_line">
                        <!--  <div class="language_head">
                           <ul>
                            <li><a href="#">ID</a>
                                <a href="#">EN</a></li>
                           </ul>
                         </div> -->
                        <div class="search_box">
                            <a href="#" data-toggle="collapse" data-target=".search-input"><img src="~assets/images/search.svg"><span>SEARCH</span></a>

                        </div>
                        <div class="sing_in">
                            <a href="#" data-toggle="modal" data-target="#login">SIGN IN</a>
                            <a href="#" data-toggle="modal" data-target="#login">REGISTER</a>
                        </div>
                        <div class="cart_icon">
                            <a href="#"><img src="~assets/images/bag_aps.svg"><!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> --></a>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------------Login  & Register Model ------------------------>
                <div class="modal" id="login">
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-md-12" >
                                <button type="button" class="close in" data-dismiss="modal" ><img src="~assets/images/close.svg" class="popup_cross"></button>
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs">
                                    <li class="active show"><a href="#Login" data-toggle="tab" class="active show">SIGN IN</a></li>
                                    <li><a href="#Registration" data-toggle="tab">REGISTER</a></li>
                                </ul>
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div class="tab-pane active" id="Login">
                                        <form role="form" class="form-horizontal">
                                            <div class="form-group">
                                                <label for="email" class="col-sm-12 control-label" >
                                                    Email</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="email1" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1" class="col-sm-12 control-label">
                                                    Password</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="exampleInputPassword1"  required/>
                                                </div>
                                            </div>
                                            <div class="col-sm-10">
                                                <div class="form-group">
                                                    <a href="#forgot_form" class="forgot_link" data-toggle="modal" data-target="#forgot_form">Forgot your password?</a>
                                                </div>
                                            </div>
                                            <div class="form-group" id="email_another">
                                                <div class="col-sm-12">
                                                    *Email and Password do not match.
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="button" class="login_submit">SIGN IN</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="spocial_mediapopup">

                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="left_sociallink">
                                                            <a href="#"><i class="fa fa-facebook-f"></i>
                                                                <div class="link_another">
                                                                    Login with Facebook
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="right_sociallink">
                                                            <a href="#"><i class="fa fa-google" aria-hidden="true"></i>
                                                                <div class="link_another">
                                                                    Login with Google
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="Registration">
                                        <form role="form" class="form-horizontal">
                                            <div class="form-group">
                                                <label for="email" class="col-sm-12 control-label">
                                                    Name</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="email1" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="email" class="col-sm-12 control-label">
                                                    Email</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="email1" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="email" class="col-sm-12 control-label">
                                                    Phone</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="email1" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1" class="col-sm-12 control-label">
                                                    Password</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="exampleInputPassword1"  required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1" class="col-sm-12 control-label">
                                                    Confirm Password</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="exampleInputPassword1"  required/>
                                                </div>
                                            </div>
                                            <div class="form-group" id="email_another">
                                                <div class="col-sm-12">
                                                    *Another customer is already using this email. Please choose
                                                    another.
                                                </div>
                                            </div>
                                            <div class="form-group inline">
                                                <div class="col-sm-12">
                                                    <label class="container">
                                                        <div class="permission">
                                                            Sign me up for the newsletter, and yes I am over 16 years old. I accept the
                                                            <b>Privacy Notice</b>
                                                        </div>
                                                        <input type="checkbox">
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="submit" class="login_submit">
                                                        REGISTER</button>
                                                </div>
                                                <div class="gap_ttt">
                                                </div>
                                            </div>

                                        </form>
                                        <div class="spocial_mediapopup">

                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="left_sociallink">
                                                            <a href="#"><i class="fa fa-facebook-f"></i>
                                                                <div class="link_another">
                                                                    Login with Facebook
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-6">
                                                        <div class="right_sociallink">
                                                            <a href="#"><i class="fa fa-google" aria-hidden="true"></i>
                                                                <div class="link_another">
                                                                    Login with Google
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <!-- ----------------------------------forgot Model ------------------------>
                <div class="modal" id="forgot_form">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="close in" data-dismiss="modal" style="text-align: -webkit-right;padding: 0px 9px;">×</button>
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal_title">FORGOT PASSWORD</h4>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body inner">
                                <div class="col-sm-12 col-md-12 three_part"><div class="forgot_content">Please enter your email address and we’ll send you instructios to reset your password.</div></div>
                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="title_block">
                                        Email*
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control input-lg">
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="form-group">
                                        <button type="button" class="login_submit">SIGN IN</button>
                                    </div>

                                </div>
                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="form-group">
                                        <a href="#" class="close_link" data-dismiss="modal">Close</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal footer -->


                    </div>
                </div>
                <!-- ----------------------------------End forgot Model ------------------------>

                <!---------------------------------------- thankyou popup----------------->
                <div class="modal" id="forgot_thamkyou">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="close in" data-dismiss="modal" style="text-align: -webkit-right;padding: 0px 9px;">×</button>
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal_title">FORGOT PASSWORD</h4>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body inner">
                                <div class="col-sm-12 col-md-12 three_part"><div class="forgot_content">Thank you! You should receive an email with a link to reset your password momentarily.</div></div>
                                <div class="col-sm-12 col-md-12 three_part">
                                    <div class="form-group">
                                        <button type="button" class="login_submit">CLOSE</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!-- Modal footer -->


                    </div>
                </div>
                <!-- ---------------------------------End thamf Model ------------------------>
                <div id="menu2" >

                </div>
            </div>
            <div class="header_menu">
                <!-- <form class="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html" method="POST">
                                       <a href="javascript:;" class="remove">
                                           <i class="icon-close"></i>
                                       </a>
                                       <img src="~assets/images/APSTROFIICONS_09.png">

                                       <div class="input-group">
                                           <input type="text" class="form-control" placeholder="Search...">
                                           <span class="input-group-btn">
                                               <a href="javascript:;" class="btn submit">
                                                   <i class="icon-magnifier"></i>
                                               </a>
                                           </span>
                                       </div>
                                   </form> -->
                <ul>
                    <li><a href="#" data-toggle="modal" data-target="#login">SIGN IN / REGISTER</a></li>
                    <li><a href="#">MEN</a>
                        <ul>
                            <li><a href="#">Clothing</a></li>
                        </ul>
                    </li>
                    <li><a href="women.html">WOMEN</a>
                        <ul>
                            <li><a href="#">Women’s Homepage</a></li>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Women’s Homepage</a></li>
                            <li><a href="#">New Arrivals</a></li>

                        </ul>
                    </li>
                    <li><a class='active' href="#">SALE</a>
                        <ul>
                            <li><a href="#">DENIM</a></li>
                        </ul>
                    </li>
                    <li><a href="blog.html">BLOG</a></li>
                    <li><a href="brands.html">BRANDS</a></li>
                    <li><a href="#" class="btn_menu" id="language_change">ID / EN</a></li>

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
        <div class="right_ctn">
            <div class="search_below">

                <div class="collapse search-input">
                    <form class="row border_search" id="demo-2" onsubmit="return false"  style="margin-right: 0px;
    margin-left: 0px;">
                        <img src="~assets/images/APSTROFIICONS_09.png" class="hide_forres"><!-- <i class="fa fa-search" aria-hidden="true"></i> --><span class="back_top"><input class="col-sm-12 col-md-12" type="search" placeholder="" ></span>
                        <button type="close" class="close">
                            <!-- × --><img src="~assets/images/APSTROFIICONS_02.png">
                        </button>
                        <button type="Search" class="col-sm-2 col-md-3 col-lg-3 btn_search">SEARCH</button>
                    </form>
                </div>

            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "Home-Header"
    }
</script>

<style scoped>

</style>