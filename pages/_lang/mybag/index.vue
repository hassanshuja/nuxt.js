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
                  <p class="gap_bet">Colour: <span v-if="cart.selected_color">{{ cart.selected_color.name }}</span></p>
                  <p class="gap_bet">Size:  <span v-if="cart.selected_size">{{ cart.selected_size.name }}</span></p>
                  <p class="gap_bet" >
                    <a @click="removeCart(cart)" class="btnDelete" href="#">Remove This item</a>
                  </p>
                </td>

                <td class="text-left" style=" color: #3d3d3d;">IDR {{ cart.price}}<p style="text-decoration: line-through;color: #ababab;">IDR {{ cart.price}}</p></td>
                <td class="text-center">
                   <div class="quality_pro">
                      <span>{{ cart.selected_quantity }}</span>
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
            <div class="pro_type_right">IDR {{ subtotal }}</div>
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
      <!-- End Model -->
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
          },
          subtotal() {
            return this.$store.state.carts.sub_total
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
