<template>
<div>
		<bottom-header :categoryList="categoryList" :url="gender+'/category/'" :custom_url="gender+'/'"></bottom-header>

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
                      <div style="margin-bottom:15px" data-target="#demo" :data-slide-to="index" :class="'item ' + index === 0 ? 'active' : ''">
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
                        <!-- <div :class="'carousel-item '  + index === 0 ? 'active' : ''"> -->
                        <div :class="'carousel-item'  + index === 0 ? 'active' : ''">
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
              {{ category[0].parent.name }} / {{ category[0].name }} / {{ product_merchant }} - {{ product.name }}
            </div>
            <div class="title_productdetails">
              <span>{{ product_merchant }}</span><span class="name_or"> - {{ product.name }} </span>
              <br>
              <span class="blow_identi" >
                <span v-if="product.product_discount.length > 0 && product.product_discount[0].qty >= selected_quantity">
                  <span v-if="product.product_discount[0].discount.type == 'PERCENTAGE'">
                    IDR {{ getpercentAmount(product)}}
                  </span>
                  <span v-else>
                    IDR {{ getfixedAmount(product) }}
                  </span>
                  <div class="productbrand_price" style="margin-left:5px; color:red;text-decoration: line-through;display: inline;">
                    IDR {{ product.price }}
                  </div>
                </span>
                <span v-else>
                  IDR {{ getprice(product) }}
                </span>
              </span>
              
            </div>
            <div class="pickerWrapper">

            <div class="alert alert-danger" v-if="color_error">{{color_error}}</div>
            <!-- <div class="outline"> 
              <p>Color: <span style="color:Red;">{{ my_color.name }}</span></p>
            </div> -->
            
            <p>Color: <b> <span :style="getColorStyle(my_color.name)">{{ my_color.name }}</span></b></p>
                <template v-for="(item, index) in colors">
                  <ul v-bind:key="index" class="bord">
                    <li @click="selectColor(item.pivot['id'], item.name)" class="inner_ga">
                      <div :id="item.pivot['id']"  :class="item.name" id="squer"  :style="'background-color:'+item.name.toLowerCase() +''"></div>
                    </li>
                  </ul>
                </template>
            </div>
            <div class="alert alert-danger" v-if="size_error">{{size_error}}</div>
            <div class="product_in_size">
              <span style="color:#3d3d3d">Size:</span>
              <!-- <a href="#" data-toggle="modal" data-target="#sizemodel" style="color: #4c4988;font-family: Open Sans;font-size: 11px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 1.8;letter-spacing:normal;color: #4c4988;">(Not Sure? Get Your Size Suggestion)</a> -->
              <div class="select_size_pro">
                <template v-for="(item, index) in sizes">
                  <button @click="selectSize(index, item); myFilter" :key="index" type="button" :class="isActive + ' btnsize'">{{ item.name }}</button>
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
            <!-- <div class="quality_pro">
            <span>Quantity:</span>
            <div style="width:72px;">
              <select class="custom-drop" v-model="selected_quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
          </div>

          </div> -->
          <div class="quality_pro">
            <span>Quantity:</span>
            <div class="custom-drop" style="width:72px;">
              <select >
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
              <button @click="addToCart" class="addcart">ADD TO CART</button>
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
              <button class="collapsible">Description</button>
              <div class="desc" style="display: block;" v-html="product.description">
              </div>
              <button class="collapsible active">Detail &amp; Sizing</button>
              <div class="desc" style="display: none;" v-html="product.sizing_detail">
              </div>
              <button class="collapsible active">Shipping &amp; Return</button>
              <div class="desc" style="display: none;" v-html="product.shipping_return_detail">
              </div>
            </div>
          </div>
        </div>
       <!------------------- Model Popup ------------------------>
        <!-- <div class="modal" id="sizemodel">
        <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                      <button type="button" class="close in" data-dismiss="modal"><img src="images/close.svg" class="popup_cross"></button>
                      <h4>SMART SIZING</h4>

                        <ul class="nav nav-tabs">
                            <li class="active show"><a href="#body_mea" data-toggle="tab" class="active show">BODY MEASUREMENT</a></li>
                            <li><a href="#brand" data-toggle="tab">BRAND MEASUREMENT</a></li>
                        </ul>
                        
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


     ------------------------>
      </div>
    </div>
  </div>
</div>
</template>

<script>

    import BottomHeader from "../../../layouts/partials/home/BottomHeader";
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        name: "index",
        components: {BottomHeader},
        computed:{
          carts () {
            return this.$store.state.carts.list
          },
          ...mapGetters(['gender'])
        },
        data: function () {
          return {
              categoryList:[],
              product: [],
              category: [],
              colors: [],
              sizes: [],
              brand: [],
              IMAGE_URL: process.env.IMAGE_URL,
              selected_quantity: 1,
              selected_size: null,
              product_merchant: null,
              productsId : [],
              color_error: null,
              size_error: null,
              isActive: 'inactive',
              baseURL: process.env.baseURL,
              product_price_discount:null,
              product_discount: null,
              my_color: {},
              routeId: null,
          }
        },
        transition: 'fade',
        mounted(){
          this.documentReady()
          this.selectqty()
          
        },
        async asyncData ({ app,store, params }) {
          var id = params.id;
          app.$axios.defaults.baseURL = process.env.baseURL
          app.$axios.setHeader('lang', store.state.locale)
          // let response = await app.$axios.$get('categories');
          var response = []
          var gender = store.getters.gender
          if(gender){
					  response= await app.$axios.$get(gender+'/category');
          }

          let response1 = await app.$axios.$get('products/'+id);
          let brand_id = Object.keys(response1.brand).filter((items, index) => {
            if(response1.product.brand_id == items){
              return response1.brand[items];
            }
          })
          // console.log(response1.brand.filter(brands => brands == response1.product.brand_id))
          return {
              categoryList: response.data,
              product: response1.product,
              productsId : response1.productsId,
              category: response1.category,
              colors: response1.product.product_color,
              sizes: response1.sizes,
              brand: response1.brand,
              product_merchant: response1.brand[brand_id],
          }
        },
        methods: {
          getColorStyle(name) {
            if(name == 'White'){
              return {
                'color' : name,
                'background' : '#000'
              }
            }else{
              return {
                'color' : name,
              }
            }
          },
          getprice(product){
            //to get amount without any discount
            this.product_price_discount = product.price
            return product.price
          },
          getpercentAmount(product){
            let discount = (product.price  * product.product_discount[0].discount.amount/100);
            let finalprice = (product.price - discount).toFixed(0)
            this.product_price_discount = finalprice;
            this.product_discount = discount.toFixed(0)

            return finalprice;
          },
          getfixedAmount(product){
            let discount = product.product_discount[0].discount.amount;
            let finalprice = product.price  - product.product_discount[0].discount.amount.toFixed(0)
            this.product_price_discount = finalprice
            this.product_discount = discount.toFixed(0)

            return finalprice
          },
          myFilter: function(){
            this.isActive = 'active';
            // some code to filter users
          },
          documentReady() {
            this.routeId = this.$route.params.id
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

            $(document).ready(function(){
                $('.select_size_pro .btnsize').click(function(){
                    $('.select_size_pro .btnsize').removeClass('active').addClass('inactive');
                    $(this).removeClass('inactive').addClass('active');
                });
            });
            },
            selectqty(){
                var x, i, j, selElmnt, a, b, c;
                /*look for any elements with the class "custom-select":*/
                x = document.getElementsByClassName("custom-drop");
                for (i = 0; i < x.length; i++) {
                  selElmnt = x[i].getElementsByTagName("select")[0];
                  /*for each element, create a new DIV that will act as the selected item:*/
                  a = document.createElement("DIV");
                  a.setAttribute("class", "select-selected");
                  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                  x[i].appendChild(a);
                  /*for each element, create a new DIV that will contain the option list:*/
                  b = document.createElement("DIV");
                  b.setAttribute("class", "select-items select-hide");
                  for (j = 1; j < selElmnt.length; j++) {
                    /*for each option in the original select element,
                    create a new DIV that will act as an option item:*/
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function(e) {
                        /*when an item is clicked, update the original select box,
                        and the selected item:*/
                        var y, i, k, s, h;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < s.length; i++) {
                          if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < y.length; k++) {
                              y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                          }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                  }
                  x[i].appendChild(b);
                  // var that = this;
                  a.addEventListener("click", (e) => {
                      // e.stopPropagation();
                      
                      this.closeAllSelect(e.target);
                      e.target.nextSibling.classList.toggle("select-hide");
                      e.target.classList.toggle("select-arrow-active");
                    });
              }


                      /*if the user clicks anywhere outside the select box,
              then close all select boxes:*/
              // document.addEventListener("click", this.closeAllSelect);
            },
            closeAllSelect(elmnt) {
                /*a function that will close all select boxes in the document,
                except the current select box:*/
                var x, y, i, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                
                for (i = 0; i < y.length; i++) {
                  if (elmnt == y[i]) {
                    arrNo.push(i)
                  } else {
                    y[i].classList.remove("select-arrow-active");
                  }
                }
                // console.log(x)
                for (i = 0; i < x.length; i++) {
                  
                  if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                  }
                }
                this.selected_quantity = parseInt(elmnt.innerHTML)
              },
            addToCart() {

              if(this.selected_color == null){
                this.color_error = 'Please select color'
                return false;
              }else{
                this.color_error = null
              }
              if(this.selected_size === null){
                this.size_error = 'Please select size'
                return false;
              }else{
                this.size_error = null
              }
              var product = this.product;

              var obj = {
                id: product.id,
                modal: this.category[0].name,
                name: product.name,
                price: this.product_price_discount,
                product_discount: this.product_discount,
                selected_color: this.selected_color,
                selected_size: this.selected_size,
                selected_quantity: this.selected_quantity,
                images: product.product_images,
                colors: this.colors,
                sizes: this.sizes,
                category: this.category,
                total_price: product.price * this.selected_quantity,
                product_merchant: this.product_merchant
              };
              // console.log(obj, product.price * this.selected_quantity)
              // return false
              var vuex = JSON.parse(localStorage.getItem('vuex'))
              if(vuex) {
                var json = vuex.carts.list;
                var index1 = null;
                json.map((item, index) => {
                  if(JSON.stringify(item) == JSON.stringify(obj)) {
                    index1 = index
                  }
                  if(
                      (item.id == obj.id) &&
                      (JSON.stringify(item.selected_color) == JSON.stringify(obj.selected_color)) &&
                      (JSON.stringify(item.selected_size) == JSON.stringify(obj.selected_size))
                    )
                  {
                    index1 = index
                    obj.selected_quantity = (parseInt(obj.selected_quantity) + parseInt(item.selected_quantity)).toString()
                    item.selected_quantity = (parseInt(obj.selected_quantity) + parseInt(item.selected_quantity)).toString()
                  }
                });
                if(index1 || index1 == 0 ) {
                  this.$store.commit('carts/replace',{obj: obj, index: index1})
                  this.$toast.success('Item Updated to Cart Successfully').goAway(1500);
                } else {
                  this.$store.commit('carts/add', obj)
                  this.$toast.success('Item Added to Cart Successfully').goAway(1500);
                }
              } else {
                this.$store.commit('carts/add', obj)
                this.$toast.success('Item Added to Cart Successfully').goAway(1500);
              }
            },
            ...mapMutations({
              toggle: 'carts/toggle'
            }),
            //this is for first time page load
            setColor(index, item){
              var obj = {id: index, name: item}
              this.selected_color = null
              let select_color = Object.assign({}, obj)
              this.my_color = select_color;
              this.selected_color = select_color

            },
            selectColor(index, item) {
              this.routeId = index
              history.pushState({}, null, '/product_detail/'+index)
              this.getUpdatedData(index)
              var obj = {id: index, name: item}
              this.selected_color = null
              let select_color = Object.assign({}, obj)
              this.my_color = select_color;
              this.selected_color = select_color
              // console.log(item, this.my_color, this.selected_color)
            },
            selectSize(index, item) {
              var obj =  item
              this.selected_size = obj
              console.log(this.selected_quantity)
            },
            async getUpdatedData (id) {
              this.$axios.setHeader('lang', this.$store.state.locale)
              let response = await this.$axios.$get(this.baseURL+'/categories');
              let response1 = await this.$axios.$get(this.baseURL+'/products/'+id);
              let brand_id = Object.keys(response1.brand).filter((items, index) => {
                if(response1.product.brand_id == items){
                  return response1.brand[items];
                }
              })
              
              // console.log(response1.brand.filter(brands => brands == response1.product.brand_id))
              console.log(response1.product.product_color, id)
                  this.categoryList = response.data,
                  this.product = response1.product,
                  this.productsId  = response1.productsId,
                  this.category = response1.category,
                  this.colors = response1.product.product_color,
                  this.sizes = response1.sizes,
                  this.brand = response1.brand,
                  this.product_merchant = response1.brand[brand_id]
                  
          }
        }

    }
</script>

<style src="~/assets/css/product_detail.css"></style>
