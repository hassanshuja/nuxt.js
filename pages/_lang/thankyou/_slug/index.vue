<template>
    <div>
<div class="wrapper fadeInDown heading-section">
  <div class="jumbotron text-center">
   <template v-if="tr_status == 'settlement' || tr_status == 'pending' || tr_status == 'success'">
    <h2 class="display-5">Thank You! We are Processing Your Order</h2>
    <p class="lead"><strong>Your Order ID No #</strong> {{this.order_id}}.</p>
    <p class="lead">Please check your email for reference.</p>
  </template> 
  <template v-else>
    <h2 class="display-5">Sorry Your Order is Cancelled</h2>
    <p class="lead"><strong>Your Order ID No #</strong> {{this.order_id}}.</p>
    <p class="lead">Please Contact Admin with this Order ID.</p>
  </template> 
  <hr>
  <p>
    Having trouble? <a href="info#contactus">Contact us</a>
  </p>
  <p class="lead">
    <a class="btn btn-primary btn-sm" href="https://apstrofi.com" role="button">Continue to homepage</a>
  </p>
</div>
</div>
        </div>
</template>

<script scoped>

		export default {
            name: "index",
            // middleware: 'guest',
            data: function(){
              return {
                order_id: null,
                tr_status: null
              }
            },
            mounted() {
                this.updateOrder()
            },
            methods: {
              updateOrder(){
                this.order_id  = this.$route.query.order_id
                this.tr_status = this.$route.query.tr_status

                let obj = {
                    order_id: this.order_id,
                    transaction_status: this.tr_status
                }
                this.$axios.defaults.baseURL = process.env.baseURL
                this.$axios.$put('/payment/'+this.order_id, obj)
                
              }
            }
        }
</script>

<style >

.heading-section {
    float: left;
    width: 100%;
    padding: 135px 0 0;
}

.jumbotron{
    background-color: #fff;
}
</style>