<template>
    <div class="modal show" id="mypopup" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div id="lorem">
                    <div class="left_pop">
                        <img src="~assets/images/que.png">
                    </div>
                    <div class="right_pop">
                        <button type="button" class="close in" data-dismiss="modal"><img src="~assets/images/close.svg" class="popup_cross"></button>
                        <span>{{ $t('singup_newsletter.heading') }}</span>
		                  </span>
                      <div class="right_pop_div" v-if="successess.length">
                            <div v-for="(success, index) in successess" v-bind:key="index">
                              <div class="alert alert-success" role="alert">
                                {{success}}
                              </div>
                            </div>
                          </div>
                      <div class="right_pop_div" v-if="errors.length">
                            <div v-for="(error, index) in errors" v-bind:key="index">
                              <div class="alert alert-danger" role="alert">
                                {{error}}
                              </div>
                            </div>
                          </div>
                        <input type="text" name="email" placeholder="Email Address" v-model="email">

                        <div class="form-group">
                            <button type="button" v-on:click="submit_newsletter" class="submit_btn">SUBMIT</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from '@nuxtjs/axios'
    export default {
        name: "Newsletter",
        data() {
          return {
            email: null,
            errors: [],
            successess: [],
          }
        },
        methods:{
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
