<template>
<div id="mybag">
  <div class="container-fluid">
    <div class="row" style="margin:auto">
      <div class="mybag_heading">MY BAG</div>  
      <div class="desktop_up" style="float: left;width: 100%;">
        
        <table class="table" id="table_pro">
          <thead>
              <tr>
                <th class="text-left" colspan="2">Item</th>
                 <th class="text-left" style="padding: 17px 26px;">Price</th>
                  <th class="text-center" style="padding: 17px;">Quantity</th>
                  <th class="text-right">Total Price</th>
              </tr> 
          </thead>

          <tbody>
            <template v-for="(cart, index) in carts">
              <tr>
                <td class="text-left">
                  <a href="#">
                    <template v-if="cart.images.length > 0">
                      <img :src="IMAGE_URL + cart.images[0].image_url" alt="White Blouse Armani">
                    </template>
                  </a>
                </td>

                <td style="width: 22%; padding: 11px 6px !important; height: 36px;border-top: hidden;">
                  <a class="text-left" href="#" data-toggle="modal" style="font-weight: 900;color: #3d3d3d;">{{ cart.modal }}</a>
                  <p>{{ cart.name }}</p>
                  <p class="gap_bet">Colour: {{ cart.selected_color.name }}</p>
                  <p class="gap_bet">Size:{{ cart.selected_size.name }}</p>
                  <p class="gap_bet" >
                    <a @click="removeCart(cart)" class="btnDelete" href="#">Remove This item</a>
                  </p>
                </td>

                <td class="text-left" style=" color: #3d3d3d;">IDR {{ cart.price}}<p style="text-decoration: line-through;color: #ababab;">IDR {{ cart.price}}</p></td>
                <td class="text-center">
                   <div class="quality_pro">
                      <select class="custom-drop" v-model="cart.selected_quantity">
                        <option value="0">1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div> 
                </td>
                <td class="text-right" style=" color: #3d3d3d;">IDR {{ cart.total_price }}
                  <p style="text-decoration: line-through;color: #ababab;">IDR {{ cart.total_price }}</p>
                </td>
              </tr>
            </template>
          </tbody>
         </table>
        </div>
              <div class="Shipping_charged" id="shopping_hide">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                  <div class="pro_type_left">SHIPPING</div>
                  <div class="pro_type_right">TBD</div>
                  </div>
             </div>
             <div class="Shipping_dem" id="shopping_hide">
                <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="pro_type_left">SUBTOTAL</div>
              <div class="pro_type_right">IDR 780,000</div>
              </div>
              </div>
               <div class="Shipping_term" id="shopping_hide">
                <div class="col-sm-12 col-md-4 col-lg-4">
              <p>By proceeding to checkout, you agree to Apstrofi.com <a href="#">Terms and Conditions</a></p>
          </div>
      </div>
      <div class="proccesd_btn" id="shopping_hide">
         <div class="col-sm-12 col-md-4 col-lg-4">
        <button type="button">PROCEED TO CHECKOUT</button>
    </div>
      </div> 
      <div class="continue_btn" id="shopping_hide">
         <div class="col-sm-12 col-md-4 col-lg-4">
        <button type="button">CONTINUE SHOPPING</button>
    </div>
      </div> 
  
      <!-- The Modal -->

          <div class="modal fade" id="myModal" style="top: 118px;">
            <div class="modal-dialog modal-lg">
              <div class="modal-content" style="border-radius: 0px;">
                <!-- Modal Header -->
                <div class="modal-header">
                  <button type="button" class="close in" data-dismiss="modal" style="padding-right: 0px;"><img src="~assets/images/close.svg" class="popup_cross" style="margin-top: 4px !important;"></button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                  <div class="col-sm-12 col-md-6 demo">
                  <div class="owl-carousel owl-theme owl-loaded owl-drag">
          <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;"><div class="owl-item"><div class="item">
              <img src="~assets/images/stylefour.jpg">
            </div></div><div class="owl-item"><div class="item">
              <img src="~assets/images/stylefour.jpg">
            </div></div><div class="owl-item"><div class="item">
              <img src="~assets/images/stylefour.jpg">
            </div></div><div class="owl-item"><div class="item">
           <img src="~assets/images/stylefour.jpg">
            </div></div><div class="owl-item"><div class="item">
               <img src="~assets/images/stylefour.jpg">
            </div></div><div class="owl-item"><div class="item">
              <img src="~assets/images/stylefour.jpg">
            </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><img src="~assets/images/arrow_left_new.svg"></button><button type="button" role="presentation" class="owl-next"><img src="~assets/images/arrow_right_new.svg"></button></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>                    
                  </div>
                  <div class="col-sm-12 col-md-6 demo">
            <div class="product_view">
            <div class="product_inline">
              Women / New / Hooman Bags - Pink Bumb Bag
            </div>  
            <div class="title_productdetails">
              <span>Hooman Bags</span> - Pink Bumb Bag
                            IDR 260,000
            </div>  
            <div class="pickerWrapper">  
               <div class="outline"> 
                <p>Color: </p>
              </div>
                  <ul class="bord">
                  <li class="inner_ga"><div class="Red" id="squer" style="background-color:red;"></div></li>
                  <li class="inner_ga"><div class="Green" id="squer" style="background-color:green"></div></li>
                  <li class="inner_ga"><div class="Yellow" id="squer" style="background-color:yellow"></div></li>
                  <li class="inner_ga"><div class="Pink" id="squer" style="background-color:pink;"></div></li>
                                 </ul>
            </div>
            <div class="product_in_size">
              <span style="color:#3d3d3d">Size:</span>
              <a href="#" data-toggle="modal" data-target="#sizemodel" style="color: #4c4988;font-family: Lato;font-size: 11px;font-weight: normal;font-style: normal;font-stretch: normal;line-height: 2.4;letter-spacing:normal;color: #4c4988;">(Not Sure? Get Your Size Suggestion)</a> 
              <div class="select_size_pro">
                  <button type="button">ALL SIZE</button>
                  <button type="button">XS</button> 
                  <button type="button">S</button>
                  <button type="button">M</button>
                  <button type="button">L</button>
                  <button type="button">XL</button>
                  <button type="button">XXL</button>
              </div>          
            </div>
            <div class="quality_pro"><span>Quality:</span>
            <div class="custom-drop" style="width:72px;">
              <select>
                <option value="0">1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            <div class="select-selected">1</div><div class="select-items select-hide"><div>1</div><div>2</div><div>3</div><div>4</div></div></div>
          </div>
            <div class="product_addtocart">
              <input id="toggle-heart" type="checkbox">
              <button class="addcart">ADD TO CART</button>
              <svg id="heart" width="26px" height="24px" viewBox="0 0 26 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              </svg>
              <!-- <label for="toggle-heart" id="heart">♡</label>  -->
              <!-- <i class="fa fa-heart" id="heart" ></i> -->
            </div>  
          </div>
          </div>  
          </div>
                <!-- Modal footer -->
              <!--   <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div> -->
              </div>
            </div>
          </div>
          <!-- End Model -->
      <div class="modal show" id="sizemodel" style=" padding-right: 5px;">
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <button type="button" class="close in" data-dismiss="modal"><img src="~assets/images/close.svg" class="popup_cross"></button>
              <h4>SMART SIZING</h4>
              <!-- Nav tabs -->
              <ul class="nav nav-tabs">
                  <li class="active show"><a href="#body_mea" data-toggle="tab" class="active show">BODY MEASUREMENT</a></li>
                  <li><a href="#brand" data-toggle="tab" class="">BRAND MEASUREMENT</a></li>
              </ul>
              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane active show" id="body_mea">
                  <form role="form" class="form-horizontal">
                    <div class="form-group default">
                      <label for="gender" class="col-sm-12 control-label">Gender</label>
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
                      <label for="weight" class="col-sm-12 control-label">Weight (In Kg)</label>
                      <div class="col-sm-12">
                        <input type="text" class="form-control" id="weight" required="">
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="age" class="col-sm-12 control-label">Age</label>
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
                        <label for="tops" class="control-label"> Size</label>
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
    </div>
  </div>
</div>
</template>

<script>
    import BottomHeader from "../../../layouts/partials/home/BottomHeader";
    import { mapMutations } from 'vuex'

    export default {
        name: "index",
        components: {BottomHeader},
        computed:{
          carts () {
            return this.$store.state.carts.list
          }
        },
        data: function () {
          return {
              IMAGE_URL: 'http://localhost:8000/',
          }
        },
        transition: 'bounce',
        mounted(){
          this.documentReady()
        },
        async asyncData ({ app,store, params }) {
            var id = params.id;
            app.$axios.setHeader('lang', store.state.locale)
            // let response1 = await app.$axios.$get('products/'+id);
            return {}
        },
        methods: {
          documentReady() {
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
          },
          ...mapMutations({
            toggle: 'carts/toggle'
          }),
          removeCart(cart){
            this.$store.commit('carts/remove', cart)
          }
        }

    }
</script>

<style src="~/assets/css/mybag.css"></style>
