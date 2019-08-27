<template>
<div>
  <div class="vertical_slider">
    <div class="container-fluid clearfix">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div id="demo" class="carousel slide vert" data-ride="carousel" data-interval="3000">
            <div class="row no-gutters make_mobile_thumg">
              <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 product_thumb">
                <div class="carousel-indicators" style="height: 632px;">
                  <template v-if="product.product_images.length > 0">
                    <template v-for="(item, index) in product.product_images">
                      <div data-target="#demo" :data-slide-to="index" :class="'item ' + index === 0 ? 'active' : ''">
                        <img style="width:120px;height:170px;object-fit: scale-down;" :src="IMAGE_URL + item.image_url" alt="">
                      </div>
                    </template>
                  </template>
                </div>
              </div><!-- col-sm-4 Indicators -->

              <div class="col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9 product_slider_img ">
                <div class="carousel-inner">
                  
                  <template v-for="(item, index) in product.product_images">
                    <template v-if="index === 0">
                      <div class="carousel-item active">
                        <img :src="IMAGE_URL + item.image_url" alt="">
                      </div>    
                    </template>
                    <template v-else>
                      <div class="carousel-item">
                        <img :src="IMAGE_URL + item.image_url" alt="">
                      </div> 
                    </template>
                  </template>
                </div>
              </div>
              
              <div class="col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9 product_slider_img" id="mobile_vi">
                <div class="carousel-inner">
                  <template v-if="product.product_images.length > 0">
                    <template v-for="(item, index) in product.product_images">
                      <a class="example-image-link" href="images/stylefour.jpg" data-lightbox="example-set">
                        <div :class="'carousel-item '  + index === 0 ? 'active' : ''">
                          <img :src="IMAGE_URL + item.image_url" alt="">
                        </div>
                      </a>
                    </template>
                  </template>
                  <template v-else>
                    <a class="example-image-link" href="images/stylefour.jpg" data-lightbox="example-set">
                      <div class="carousel-item active">
                        <img :src="IMAGE_URL + '/images/nopreview.png'" alt="">
                      </div>
                    </a>
                  </template>
                </div>
              </div>
            </div><!--row-->
          </div>
          
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="product_view">
            <div class="product_inline">
              Women / New / Hooman Bags - Pink Bumb Bag
            </div>
            <div class="title_productdetails">
              <span>{{ product.modal }}</span><span class="name_or"> - {{ product.name }} </span><br><span class="blow_identi">IDR {{ product.price.toLocaleString() }}</span>
            </div>
            <div class="pickerWrapper">
               <div class="outline">
                  <p>Color: </p>
                </div>
                <template v-for="(item, index) in colors">
                  <ul class="bord">
                    <li class="inner_ga"><div :class="item" id="squer" :style="'background-color:'+item.toLowerCase() +''"></div></li>
                    <!-- <li class="inner_ga"><div class="Green" id="squer" style="background-color:green"></div></li> -->
                    <!-- <li class="inner_ga"><div class="Yellow active" id="squer" style="background-color:yellow"></div></li> -->
                    <!-- <li class="inner_ga"><div class="Pink" id="squer" style="background-color:pink;"></div></li> -->
                  </ul>
                </template>
            </div>
            <div class="product_in_size">
              <span style="color:#3d3d3d">Size:</span>
              <a href="#" data-toggle="modal" data-target="#sizemodel" style="color: #4c4988;font-family: Open Sans;font-size: 11px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 1.8;letter-spacing:normal;color: #4c4988;">(Not Sure? Get Your Size Suggestion)</a>
              <div class="select_size_pro">
                <template v-for="(item, index) in sizes">
                  <button :key="index" type="button" class="btnsize inactive">{{ item }}</button>
                </template>
                <!-- <button type="button" class="btnsize inactive">ALL SIZE</button>
                <button type="button" class="btnsize inactive">XS</button>
                <button type="button" class="btnsize inactive">S</button>
                <button type="button" class="btnsize inactive">M</button>
                <button type="button" class="btnsize inactive">L</button>
                <button type="button" class="btnsize active">XL</button>
                <button type="button" class="btnsize inactive">XXL</button> -->
              </div>
            </div>
            <div class="quality_pro">
            <span>Quality:</span>
            <div style="width:72px;">
              <select class="custom-drop" v-model="product.quality">
                <option value="0">1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
          </div>
          </div>


            <div class="product_addtocart">
              <input id="toggle-heart" type="checkbox">
              <button class="addcart">ADD TO CART</button>
              <svg id="heart" width="26px" height="24px" viewBox="0 0 26 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <!-- Generator: Sketch 54.1 (76490) - https://sketchapp.com -->

                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="PRODUCT-DETAILS-2-Hover-Text" transform="translate(-1149.000000, -603.000000)" stroke="#4C4988">
                          <path id="heart" class="red" d="M1161.99994,606.598057 C1162.78066,605.65626 1163.67924,604.950515 1164.77183,604.495818 C1168.56149,602.918034 1173.037,605.263689 1173.82294,609.296785 C1174.30329,611.761337 1173.787,614.085167 1172.50814,616.223022 C1171.23985,618.342801 1169.6482,620.20283 1167.72865,621.758388 C1166.12083,623.061024 1164.4752,624.317735 1162.83304,625.577257 C1162.09614,626.142416 1161.91014,626.131972 1161.1858,625.599483 C1159.01492,624.003758 1156.85246,622.393974 1154.90271,620.526581 C1153.53046,619.212296 1152.35169,617.726764 1151.39405,616.08364 C1150.31041,614.224415 1149.84516,612.193674 1150.04532,610.052071 C1150.37615,606.511027 1153.47942,603.792081 1157.11983,604.026928 C1158.96134,604.145824 1160.49473,604.907937 1161.72094,606.290373 C1161.7943,606.372984 1161.86939,606.454257 1161.99994,606.598057"></path>
                      </g>
                  </g>
              </svg>
              <!-- <label for="toggle-heart" ><img src="images/heart_product.svg" id="heart"> --><!-- <i class="fa fa-heart" id="heart" ></i> --><!-- ♡ --><!-- </label>  -->
              <!-- <i class="fa fa-heart" id="heart" ></i> -->
            </div>
            <div class="description_product">
              <button class="collapsible active">Description</button>
              <div class="content" style="display: block;" v-html="product.description">
              </div>
              <button class="collapsible active">Detail &amp; Sizing</button>
              <div class="content" style="display: none;" v-html="product.sizing_detail">
              </div>
              <button class="collapsible active">Shipping &amp; Return</button>
              <div class="content" style="display: none;" v-html="product.shipping_return_detail">
              </div>
            </div>
          </div>
        </div>
       <!------------------- Model Popup ------------------------>
      <div class="modal" id="sizemodel">
        <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                      <button type="button" class="close in" data-dismiss="modal"><img src="images/close.svg" class="popup_cross"></button>
                      <h4>SMART SIZING</h4>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs">
                            <li class="active show"><a href="#body_mea" data-toggle="tab" class="active show">BODY MEASUREMENT</a></li>
                            <li><a href="#brand" data-toggle="tab">BRAND MEASUREMENT</a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="body_mea">
                                <form role="form" class="form-horizontal">
                                  <div class="form-group default">
                                   <label for="gender" class="col-sm-12 control-label">
                                         Gender</label>
                                      <div class="col-sm-12">
                                          <label class="container">Men
                          <input type="radio" checked="checked" name="radio">
                          <span class="checkmark_rad"></span>
                        </label>
                        <label class="container">Women
                          <input type="radio" name="radio">
                          <span class="checkmark_rad"></span>
                      </label>
                                      </div>
                                </div>
                                  <div class="form-group">
                                        <label for="height" class="col-sm-12 control-label">
                                            Height (In Cm)</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="height" required="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="weight" class="col-sm-12 control-label">
                                            Weight (In Kg)</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="weight" required="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="age" class="col-sm-12 control-label">
                                            Age</label>
                                        <div class="col-sm-12">
                                            <input type="text" class="form-control" id="age" required="">
                                        </div>
                                    </div>
                                     <div class="col-sm-12">
                                          <div class="form-group">
                                             <button type="button" class="login_dep">SAVE MY BODY MEASUREMENT</button>
                                          </div>
                                      </div>



                              </form>

                            </div>
                             <div class="tab-pane" id="brand">
                                  <form role="form" class="form-horizontal">
                                  <div class="form-group default">
                                   <label for="gender" class="col-sm-12 control-label">
                                         Gender</label>
                                      <div class="col-sm-12">
                                          <label class="container">Men
                          <input type="radio" checked="checked" name="radio">
                          <span class="checkmark_rad"></span>
                        </label>
                        <label class="container">Women
                          <input type="radio" name="radio">
                          <span class="checkmark_rad"></span>
                      </label>
                                      </div>
                                </div>
                                      <div class="form-group">
                                        <div class="col-sm-8 left_key">
                                        <label for="tops" class="control-label">
                                              Tops</label>
                                           <select>
                                            <option value="">Select a brand that fits you</option>
                                           <option value="1">Option 1</option>
                                           <option value="2">Option 2</option>
                                             </select>

                          </div>
                          <div class="col-sm-4 right_key">
                            <label for="tops" class="control-label">
                                              Size</label>
                                          <select>
                                            <option value="">Select your size</option>
                                             <option value="1">Option 1</option>
                                             <option value="2">Option 2</option>
                                           </select>
                          </div>
                                      </div>
                                     <div class="form-group">
                                        <div class="col-sm-8 left_key">
                                        <label for="tops" class="control-label">
                                              Bottom</label>
                                           <select>
                                             <option value="">Select a brand that fits you</option>
                                           <option value="1">Option 1</option>
                                           <option value="2">Option 2</option>
                                             </select>

                          </div>
                          <div class="col-sm-4 right_key">
                            <label for="tops" class="control-label">
                                              Size</label>
                                          <select>
                                            <option value="">Select your size</option>
                                             <option value="1">Option 1</option>
                                             <option value="2">Option 2</option>
                                           </select>
                          </div>
                                      </div>
                                       <div class="form-group">
                                        <div class="col-sm-8 left_key">
                                        <label for="tops" class="control-label">
                                              Shoes</label>
                                           <select>
                                             <option value="">Select a brand that fits you</option>
                                           <option value="1">Option 1</option>
                                           <option value="2">Option 2</option>
                                             </select>

                          </div>
                          <div class="col-sm-4 right_key">
                            <label for="tops" class="control-label">
                                              Size</label>
                                          <select>
                                            <option value="">Select your size</option>
                                             <option value="1">Option 1</option>
                                             <option value="2">Option 2</option>
                                           </select>
                          </div>
                                      </div>
                                   <div class="col-sm-12">
                                        <div class="form-group">
                                           <button type="button" class="login_brnad">SAVE MY BRAND MEASUREMENT</button>
                                        </div>
                                    </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>


       <!--------------------- End Model ------------------------>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    import BottomHeader from "../../../layouts/partials/home/BottomHeader";

    export default {
        name: "index",
        components: {BottomHeader},
        computed:{
        },
        data: function () {
          return {
              categoryList:[],
              product: [],
              colors: [],
              sizes: [],
              brand: [],
              IMAGE_URL: 'http://localhost:8000/'
          }
        },
        transition: 'bounce',
        mounted(){
          this.documentReady()
        },
        async asyncData ({ app,store, params }) {
            var id = params.id;
            app.$axios.setHeader('lang', store.state.locale)
            let response = await app.$axios.$get('categories');
            let response1 = await app.$axios.$get('products/'+id);
            return {
                categoryList: response.data,
                product: response1.product,
                colors: response1.colors,
                sizes: response1.sizes,
                brand: response1.brand
            }

        },
        methods: {
          documentReady() {
              $('.previews a').click(function(){
                var largeImage = $(this).attr('data-full');
                $('.selected').removeClass();
                $(this).addClass('selected');
                $('.full img').hide();
                $('.full img').attr('src', largeImage);
                $('.full img').fadeIn();
              }); // closing the listening on a click
              $('.full img').on('click', function(){
                var modalImage = $(this).attr('src');
                $.fancybox.open(modalImage);
              });

              var coll = document.getElementsByClassName("collapsible");
              var i;

              for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var content = this.nextElementSibling;
                  if (content.style.display === "block") {
                    content.style.display = "none";
                  } else {
                    content.style.display = "block";
                  }
                });
              }

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

              setTimeout(function(){
                if($(window).width() >= 767){
                  var tallness = $(".carousel-inner").height();
                  $(".carousel-indicators").height(tallness);
                }
              },1000);

              (function() {
                const heart = document.getElementById('heart');
                heart.addEventListener('click', function() {
                  heart.classList.toggle('red');
                });
              })();

              $( "div#squer" ).click(function() {
                  var clas = this.className;
                  var color = $( this ).css( "background-color" );
                   // $('div#squer').removeClass("active");
                  // $(this).addClass("active");
                  if(clas == 'White') {
                    $( ".outline p" ).html( "Color: <span style='color:black;font-weight:bold;'>" + clas + "</span>" );
                  } else {
                    $( ".outline p" ).html( "Color: <span style='color:" +
                    clas + ";font-weight:bold;'>" + clas + "</span>" );
                  }
                    
              });

              $('.select_size_pro .btnsize').click(function(){
                $('.select_size_pro .btnsize').removeClass('active').addClass('inactive');
                $(this).removeClass('inactive').addClass('active');
              });

              console.log('document ready');
            }
        }

    }
</script>

<style src="~/assets/css/product_detail.css"></style>
