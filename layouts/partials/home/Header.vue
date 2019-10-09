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
                                <li><a href="/men"  >
                                        {{ $t('menu.men') }}
                                    </a>
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
                        <div class="sing_in" v-if="!loggedIn">
                            <a href="#" data-toggle="modal" data-target="#login">SIGN IN</a>
                            <a href="#" data-toggle="modal" data-target="#login">REGISTER</a>
                        </div>
                        <div class="sing_in dropdown" v-if="loggedIn">
                          <div class="dropdown-toggle" data-toggle="dropdown"><span style="font-size:14px">{{ user.name }}</span>
                          <span class="caret"></span></div>
                          <ul class="dropdown-menu" style="border:1px solid #ccc">
                            <li style="border-bottom:1px solid #ccc">
                              <a href="#">My Account</a>
                            </li>
                            <li><a href="#" @click.prevent="logout">Logout</a></li>
                          </ul>
                        </div>
                        <!-- <div class="sing_in" style="display:absolute;" >
                             <a href="#" @click.prevent="logout" >Logout</a> 
                            <div class="navbar-menu">
                              <div class="navbar-end">
                                <div class="navbar-item has-dropdown is-hoverable" >
                                  <a class="navbar-link">
                                    {{ user.name }}
                                  </a>
                                  <div class="navbar-dropdown">
                                    <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                                    <hr class="navbar-divider">
                                    <a class="navbar-item">Logout</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div> --> 
                        <div class="cart_icon">
                            <a href="/mybag"><img src="~assets/images/bag_aps.svg"><!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> --></a>
                            <template v-if="carts.length > 0">
                                <div class="dropdown-demo">
                                 <div class="add_message">
                                    <template v-if="carts.length > 0">
                                        <span class="left">{{ carts.length }} items added to your bag!</span>
                                    </template>
                                  <span class="right">
                                    <a href="#"><img src="~assets/images/close.svg"></a>
                                    </span>
                                 </div>
                                    <template v-for="(cart,index) in carts">
                                        <span v-bind:key="index" class="item_main">
                                            <span class="item-left">
                                            <template v-if="cart.images.length > 0">
                                              <img :src="IMAGE_URL + cart.images[0].image_url" alt="White Blouse Armani">
                                            </template>
                                            <span class="item-info">
                                            <span class="addcart_name">{{ cart.modal }}</span>
                                            <span class="addcart_color">{{ cart.name }}</span>
                                            <span class="addcart_price">IDR {{ cart.price}}</span>
                                            </span>
                                            <span class="item_description">
                                              <span>Color: {{ cart.selected_color.name }}</span>
                                              <span>Size: {{ cart.selected_size.name }}</span>
                                              <span>Qty: {{ cart.selected_quantity}}</span>
                                             </span>
                                            </span>
                                        </span>
                                    </template>
                               <div class="check_cart">
                                <button @click="$router.push('/checkout')" type="button" class="check_cartpro">CHEKOUT</button>
                               </div>
                            </div>
                        </template>
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
                                                    <input type="email" class="form-control" id="email1" v-model="email" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="password" class="col-sm-12 control-label">
                                                    Password</label>
                                                <div class="col-sm-12">
                                                    <input type="password" class="form-control" id="password" v-model="password" required/>
                                                </div>
                                            </div>
                                            <div class="col-sm-10">
                                                <div class="form-group">
                                                    <a href="#forgot_form" class="forgot_link" data-toggle="modal" data-target="#forgot_form">Forgot your password?</a>
                                                </div>
                                            </div>
                                            <div class="form-group" id="email_another" v-if="login_err">
                                                <div class="col-sm-12">
                                                    *Email and Password do not match.
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="button" class="login_submit" @click="login">SIGN IN</button>
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
                                                <label for="name" class="col-sm-12 control-label">
                                                    Name</label>
                                                <div class="col-sm-12">
                                                    <input type="name" class="form-control" id="name" v-model="name" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="emailReg" class="col-sm-12 control-label">
                                                    Email</label>
                                                <div class="col-sm-12">
                                                    <input type="email" class="form-control" id="emailReg" v-model="email" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="phone" class="col-sm-12 control-label">
                                                    Phone</label>
                                                <div class="col-sm-12">
                                                    <input type="phone" class="form-control" id="phone" v-model="phone" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="password" class="col-sm-12 control-label">
                                                    Password</label>
                                                <div class="col-sm-12">
                                                    <input type="password" class="form-control" id="password"  v-model="password" required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="password_confirmation" class="col-sm-12 control-label">
                                                    Confirm Password</label>
                                                <div class="col-sm-12">
                                                    <input type="password_confirmation" class="form-control" id="password_confirmation" v-model="password_confirmation" required/>
                                                </div>
                                            </div>
                                            <div class="form-group" id="email_another" v-if="reg_err">
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
                                                        <input type="checkbox" name="signup_newsletter" v-model="signup_newsletter">
                                                        <span class="checkmark" ></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <button type="button" class="login_submit" @click="register">
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
        <!-- <div style="display:none;">{{removeModal()}}</div> -->
    </div>
</template>

<script>
    export default {
      name: "Home-Header",
      middleware: 'guest',

      data: function () {
        return {
            email:'',
            emailReg: '',
            password: '',
            password_confirmation: '',
            phone: '',
            signup_newsletter: 0,
            name: '',
            login_err:'',
            reg_err: '',
            IMAGE_URL: process.env.baseURL,
        }
      },
      methods: {
        async login(){
            this.$axios.defaults.baseURL = process.env.baseURL;
   
             this.$toast.show('Logging in...').goAway(1000);
            await this.$auth.login({
                  data: { email : this.email, password : this.password}
            }).then(data => {
              this.$router.push({
                path: '/'
            });
            // console.log('not working')

              this.$toast.success('Successfully authenticated').goAway(1500);
             
            }).catch((e) => {
              
              this.login_err = 'Unable to authenticate';
              this.$toast.error('Error while authenticating').goAway(1500)
            })
             
        },
        async register() {
          await this.$axios.post('register', this.$data);
            this.$auth.login({
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            this.$router.push({
                path: '/'
            });
        },
        logout() {
            this.$auth.logout();
        },
        removeModal(){
        //     if(window.getElementById('#mypopup') == null){
        //       console.log(window.getElementById('#mypopup'))
        //         window.querySelector('.modal-backdrop').remove();
        //   }
        }
      },
      computed:{
        carts () {
          return this.$store.state.carts.list
        }
      }
    }
</script>

<style scoped>

.dropdown-demo{display:none;position:absolute;background-color:#f9f9f9;margin:38px 0;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);padding:12px 16px;z-index:1;border:1px solid rgba(9,7,9,.08);float:left;width:264px;right:10px;height:auto;max-height:350px;overflow-y:scroll}.dropdown-demo .add_message{font-family:Lato;font-size:10px;font-weight:900;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#4c4988;border-bottom:1px solid rgba(9,7,9,.08);padding:0 0 11px}button.check_cartpro:hover{background-color:#3d3987!important}.dropdown-demo .add_message span.right img{height:10px}.dropdown-demo .add_message span.right{float:right}.check_cart button.check_cartpro{background-color:#4c4988;border:none;font-family:Lato;cursor:pointer;font-weight:900;font-style:normal;font-stretch:normal;line-height:2.67;letter-spacing:1px;text-align:center;color:#fff;font-size:10px;padding:10px 0;float:left;width:100%}.check_cart{float:left;width:100%}span.addcart_name{font-weight:900}span.addcart_color,span.addcart_name{float:left;padding:0 10px}.dropdown-demo span.item_main span.item_description span{padding:0 9px;width:150px;padding:0 10px!important;line-height:1}span.addcart_price{float:left;padding:0 10px 16px}.dropdown-demo span.item_main span.item_description{float:none;width:auto;font-size:10px;font-family:open Sans;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#3d3d3d}.dropdown-demo span.item_main span.item_description span{float:left;width:61%;padding:0 17px}.cart_icon{position:relative;display:inline-block}.dropdown-demo span.item_main span.item-info{float:none;font-size:10px;width:auto;font-family:Lato;display:block;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#3d3d3d}.dropdown-demo span.item_main span.item-left img{float:left;height:93px;width:62px}.dropdown-demo span.item_main{float:left;width:100%;padding-bottom:15px}.dropdown-demo span.item_main span.item-left{float:left;width:100%;padding-top:10px}.cart_icon:hover .dropdown-demo,.dropdown-demo:hover .dropdown-demo{display:block;cursor:-webkit-grab;cursor:grab}.select-selected:after{content:url(/_nuxt/d0696ea4c4fce558b5b452230dc1054c.svg);float:right;width:100%;margin-left:5px;font-weight:600;width:14px;position:absolute;right:10px}.quality_pro span{font-family:Open sans;font-size:11px;font-weight:400;font-style:normal;font-stretch:normal;line-height:2.4;letter-spacing:normal;color:#3d3d3d}.quality_pro{float:left;width:100%;padding:10px 0 0}svg.red path{fill:#4c4988}.custom-drop{position:relative;font-family:Arial}.custom-drop select{display:none}

</style>
