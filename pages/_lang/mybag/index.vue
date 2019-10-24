<template>
<div id="mybag">
  <div class="container-fluid">
    <div class="row" style="margin:auto">
      <div class="mybag_heading">MY BAG</div>  
        <template v-if="cart.list.length > 0">

      <div class="desktop_up" style="float: left;width: 100%;">
        <table class="table" id="table_pro" >
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
              <tr :key="index">
                <td class="text-left">
                  <a href="#">
                    <template v-if="cart.images.length > 0">
                      <img :src="IMAGE_URL + cart.images[0].image_url" alt="White Blouse Armani">
                    </template>
                  </a>
                </td>

                <td style="width: 22%; padding: 11px 6px !important; height: 36px;">
                  <a class="text-left" href="#" data-toggle="modal" style="font-weight: 900;color: #3d3d3d;">{{ cart.modal }}</a>
                  <p> <span v-if="cart.name">{{ cart.name }}</span></p>
                  <p class="gap_bet">Colour: <span v-if="cart.selected_color">{{ cart.selected_color.name }}</span></p>
                  <p class="gap_bet">Size:  <span v-if="cart.selected_size">{{ cart.selected_size.name }}</span></p>
                  <p class="gap_bet" >
                    <a @click="removeCart(cart)" class="btnDelete" href="#">Remove This item</a>
                  </p>
                </td>

                <td class="text-left" style=" color: #3d3d3d;" v-if="cart.product_discount">IDR {{ cart.price}}<p style="text-decoration: line-through;color: #ababab;">IDR {{ parseInt(cart.price) + parseInt(cart.product_discount)}}</p></td>
                <td class="text-left" style=" color: #3d3d3d;" v-else>IDR {{ cart.price}}</td>
                <td class="text-center">
                   <div class="quality_pro">
                      <span>{{ cart.selected_quantity }}</span>
                    </div> 
                </td>
                <td class="text-right" style=" color: #3d3d3d;" v-if="cart.product_discount">IDR {{ parseInt(cart.price) * parseInt(cart.selected_quantity) }}
                  <p style="text-decoration: line-through;color: #ababab;">IDR {{ (parseInt(cart.price) + parseInt(cart.product_discount)) * parseInt(cart.selected_quantity) }}</p>
                </td>
                <td class="text-right" style=" color: #3d3d3d;" v-else>IDR {{ cart.total_price }}
                </td>
              </tr>
            </template>
          </tbody>
         </table>
        </div>
       
        <div class="below_head" id="inner_pro">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <button class="collapsible active">Add Promo Code</button>
            <div class="content" style="display: none;">
              <span style="display: flex;">
                <input type="text" name="promocode"  v-model="promocode"/>
                <button @click.prevent="promo_code">APPLY</button>
              </span>
              <p v-if="promo_success" class="true_message">Promo code has been added to your order!</p>
              <p v-if="promo_failed" class="false_message">*Your promo code is invalid or expired</p>
            </div>
          </div>
        </div>
        <div v-if="promo_total" class="Shipping_charged" id="shopping_hide">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="pro_type_left">Promo Discount</div>
            <div class="pro_type_right">{{ promo_total }}</div>
          </div>
        </div>
        <div class="Shipping_charged" id="shopping_hide">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="pro_type_left">Discount</div>
            <div class="pro_type_right">{{ total_discount }}</div>
          </div>
        </div>
        <div class="Shipping_dem" id="shopping_hide">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="pro_type_left">SUBTOTAL BEFORE DISCOUNT</div>
            <div class="pro_type_right">IDR {{ subtotal_before_discount}}</div>
          </div>
        </div>
        <div class="Shipping_dem" id="shopping_hide">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="pro_type_left">SUBTOTAL AFTER DISCOUNT/PROMO</div>
            <div class="pro_type_right">IDR {{ subtotals}}</div>
          </div>
        </div>
        <div class="Shipping_term" id="shopping_hide">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <p>By proceeding to checkout, you agree to Apstrofi.com <a href="#">Terms and Conditions</a></p>
          </div>
        </div>
      <div class="proccesd_btn" id="shopping_hide">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <button @click="proceed" type="button">PROCEED TO CHECKOUT</button>
        </div>
      </div> 
      <div class="continue_btn" id="shopping_hide">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <button type="button">CONTINUE SHOPPING</button>
        </div>
      </div> 
      <!-- The Modal -->
      <!-- End Model -->
      </template>
    <template v-else>
      <div class="desktop_up" style="float: left;width: 100%;">
      <section class="cart-section section-b-space">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div>
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img src="~/assets/images/icon-empty-cart.png" class="img-fluid mb-4" alt="">
                  <h5><strong>Your Cart is Empty</strong></h5>
                  <h6>Explore more shortlist some items.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </template>
    </div>
  </div>
</div>
</template>

<script>
    import BottomHeader from "../../../layouts/partials/home/BottomHeader";
    import { mapMutations , mapGetters} from 'vuex'

    export default {
        name: "index",
        components: {BottomHeader},
        computed:{
          ...mapGetters({
            carts: 'carts/carts'
          }),

          // carts () {
          //   return this.$store.state.carts.list
          // },
          discount() {
            let disarr = this.$store.state.carts.list
            return disarr.reduce((total, item) => total + item.product_discount, '');
          },
          subtotal() {
            console.log(this.$store.state.carts.sub_total)
            return this.$store.state
          }
        },
        data: function () {
          return {
              IMAGE_URL: process.env.IMAGE_URL,
              discount_cart_obj: [],
              discount_product_obj: [],
              discount_category_obj: [],
              discount_cart: 0,
              discount_product: 0,
              discount_category: 0,
              subtotals: 0,
              baseURL: process.env.baseURL,
              cart: [],
              total_discount: 0,
              promocode: null,
              promo_success: false,
              promo_failed: false,
              prev_subtotals: null,
              promo_total: 0,
              subtotal_before_discount: 0
          }
        },
        mounted(){
          this.documentReady()
          this.getSubtotal()
          // if(this.cart.list.length == 0){
          //   history.back()
          // }
        },
        async asyncData ({ app,store, params }) {
            app.$axios.defaults.baseURL = process.env.baseURL
            var id = params.id;

            app.$axios.setHeader('lang', store.state.locale)
            let cart_discount = await app.$axios.$get('discount/cart');
            let category_discount = await app.$axios.$get('discount/category');
            return  {
              discount_cart_obj: cart_discount,
              subtotals: store.state.carts.sub_total,
              discount_category_obj: category_discount,
              cart: store.state.carts,
            }
        },
        methods: {
          async promo_code(){
            let code = this.promocode
            let check_promo =  await this.$axios.$get('promo/getdetails/'+code);
            if(check_promo.length > 0){
              var promo_obj = check_promo[0]
              if(promo_obj.type == 'PERCENTAGE'){
                this.promo_total =  parseInt(promo_obj.value)/100 * parseInt(this.prev_subtotals) 
                this.subtotals -= this.promo_total
              }else{
                this.promo_total = parseInt(promo_obj.value)
                this.subtotals -= this.promo_total
              }
              this.promo_success = true
              this.promo_failed = false
            }else{
              this.promo_success = false
              this.promo_failed = true
            }
          },
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
         getSubtotal() {
            let cart = this.cart

          //Saving prev subtotals for any future calculation on previous price
          this.prev_subtotals = this.subtotals
            //getting discount from cart object get from api
          var item_total = 0;
          this.discount_cart_obj.map((item, index) => {
              let notinclude = ['shipping1', 'shipping2']
              if(!notinclude.includes(item.title)){
                //for discount if in percentage
                if(item.type == 'PERCENTAGE'){
                  ///apply discount only if order amount is greater than min order set by admin
                  if(this.subtotals >= item.min_order_amount){
                    this.discount_cart += (item.amount/100) * this.subtotals
                  }
                }else{
                  //For fixed amount of discount
                  ///apply discount only if order amount is greater than min order set by admin
                  if(this.subtotals >= item.min_order_amount){
                    this.discount_cart += item.amount
                  }
                }
                //For discount cart check the limit and apply discount according to limit
                if(this.discount_cart > item.max_discount_amount){
                  this.discount_cart = item.max_discount_amount
                  return this.discount_cart
                }
                
              }
            })

            //get all category ids for applying disocunt
            let category_ids = cart.list.map((item, index) => item.category[0].parent_id)
            // let category_qty = cart.list.map((item, index) => item.selected_quantity)
            //getting discount from category object get from api  
            var newcart = []
            if(category_ids.length > 0){
              newcart = this.discount_category_obj.filter((item, index) => category_ids.includes(item.discount_category[0].pivot.category_id))
            }

            if(newcart.length > 0){
                newcart.map((item, index) => {
                  cart.list.map((val, key) => {
                    if(val.selected_quantity >= item.discount_category[0].pivot.qty && val.id == item.id){
                      if(item.type == 'PERCENTAGE'){
                          ///apply discount only if order amount is greater than min order set by admin
                          // if(this.subtotals >= item.min_order_amount){
                            this.discount_category += (item.amount/100) * this.subtotals
                          // }
                        }else{
                          //For fixed amount of discount
                          ///apply discount only if order amount is greater than min order set by admin
                          // if(this.subtotals >= item.min_order_amount){
                            this.discount_category += item.amount
                          // }
                        }
                        //For discount category check the limit and apply discount according to limit
                        // if(this.discount_category > item.max_discount_amount){
                          // this.discount_category = item.max_discount_amount
                          // return this.discount_category
                        // }
                    }
                  })
              })
            }
            
            // 


            // this.discount_category_obj.map((item, index) => {
            //   if(!notinclude.includes(item.title)){
            //     //for discount if in percentage
            //     if(item.type == 'PERCENTAGE'){
            //       ///apply discount only if order amount is greater than min order set by admin
            //       if(this.subtotals >= item.min_order_amount){
            //         this.discount_cart += (item.amount/100) * this.subtotals
            //       }
            //     }else{
            //       //For fixed amount of discount
            //       ///apply discount only if order amount is greater than min order set by admin
            //       if(this.subtotals >= item.min_order_amount){
            //         this.discount_cart += item.amount
            //       }
            //     }
            //     //For discount cart check the limit and apply discount according to limit
            //     if(this.discount_cart > item.max_discount_amount){
            //       this.discount_cart = item.max_discount_amount
            //       return this.discount_cart
            //     }
                
            //   }
            // })

            // This is to get products discount
            let products_list = this.$store.state.carts.list
            var totalz = 0;
            let products_discount = products_list.reduce((totals, item) => {
              return totalz + parseFloat(item.product_discount)
              }
              , '');
              console.log(products_discount != 'null' , !isNaN(products_discount), products_discount)

            this.discount_product =  !isNaN(products_discount) ? (products_discount) : 0;

            // cart.list.reduce((total, item) => total + item.product_discount, '');
            //ToTal disocunt given
            // console.log((this.discount_product) , (this.discount_cart) , (this.discount_category))

            this.total_discount = parseInt(this.discount_product) + parseInt(this.discount_cart) + parseInt(this.discount_category)
            //  console.log(this.subtotals,this.total_discount, this.discount_product, this.discount_cart, this.discount_category)
            let total =  (this.subtotals) - (this.total_discount)
            this.subtotals = total
            this.subtotal_before_discount = this.prev_subtotals
            
          },
          proceed() { 
            let obj = {
              cart_discount : this.discount_cart,
              category_discount : this.discount_category,
              product_discount : this.discount_product,
              promocode: this.promocode,
              promo_total : this.promo_total,
              subtotal_after_discount: this.subtotals,
              subtotal_before_discount: this.subtotal_before_discount,
              grand_without_promo: this.total_discount,
              grand_discount_with_promo : this.total_discount + this.promo_total
            }

            this.$store.commit('carts/cart_discount', obj)
            this.$router.push({
                name: 'checkout'
            });
          },
          ...mapMutations({
            toggle: 'carts/toggle'
          }),
          removeCart(cart){
            this.$store.commit('carts/remove', cart)
            // location.reload()
          }
        }
    }
</script>

<style src="~/assets/css/mybag.css"></style>
