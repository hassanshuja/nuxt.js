<template>
    <div class="modal show" id="mypopup" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div id="lorem">
                    <div class="left_pop">

                        <a href="javascript:;" @click="pay_midtrans()" style="text-align: center;display: block;float: right;margin-top: 50px;border: 1px solid #ddd;">
                            <img style="width: 90%; height: 173px;" src="~assets/images/Apoyo_US_03_cotiza-compra_medios-de-pago_tarjetas-credito.png">
                        </a>
                        <span style="display: inline-block;margin-left: 70px;margin-top: 20px;">{{ $t('checkout.Pay_credit_bank') }}</span>
                    </div>
                    <div class="right_pop">
                      <button type="button" class="close in" data-dismiss="modal"><img src="~assets/images/close.svg" class="popup_cross"></button>

                       <a href="javascript:;" @click="pay_installments()" style="text-align: center;display: inline-block;margin-top: 50px;border: 1px solid rgb(221, 221, 221);">
                            <img style="height: 173px;" src="~assets/images/installment_payment.webp">
                        </a>
                        <span style="margin: 0px;padding: 14px;margin-left: 40px;margin-bottom: 34px;">{{ $t('checkout.pay_installment') }}</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios'
    export default {
        name: "PaymentOptions",
        data() {
          return {
            email: null,
            errors: [],
            successess: [],
          }
        },

        methods:{
          pay_installments: function() {
            this.$emit('kerdivo');
        },
        pay_midtrans: function(){
          this.$emit('midtrans');
        },
         submit_newsletter: function() {
           this.errors = [];
           this.successess = [];
            // asyncData({ app,store })

            // console.log('store login ', username, password)
            this.$axios.post('http://18.217.178.147/api/subscription', {email: this.email})
            .then(res => {
              // commit('SET_USER', res.data)
              this.successess.push(res.data.message)
              setTimeout(function () {
                  $('#mypopup').modal('hide');
              },2000);
            })
            .catch(error => {
              console.log(error.response)
              this.errors.push(error.response.data.errors.email[0])
            })
          },

          checkForm: function () {
          this.errors = [];
            if (!this.email) {
              this.errors.push('Email required.');
            } else if (!this.validEmail(this.email)) {
              this.errors.push('Valid email required.');
            }

            if (!this.errors.length) {
              return true;
            }

          },
          validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
        }
    }
</script>

<style scoped>

</style>
