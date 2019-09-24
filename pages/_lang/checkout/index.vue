<template>
	<div>
		<div id="checkout">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12">
						<div class="checkout_title">
							<span>CHECKOUT (Step 1 of 2)</span>
						</div>
						<button @click="openShipping" class="promo_code show active selected">1. SHIPPING ADDRESS</button>
						<div class="panel" style="display: block; max-height: 0px;">
							<div class="checkout_form">
								<div class="cont-row">
									<div class="col-xs-12 col-md-6 manage">
											<div class="left-block">
												<div class="cont-label">Name</div>
												<div class="cont-field">
														<input v-model="shipping_details.name" type="text" name="name">
												</div>
											</div>
									</div>

									<div class="col-xs-12 col-md-6 manage">
											<div class="right-block">
												<div class="cont-label">Phone Number</div>
												<div class="cont-field">
													<input type="tel" v-model="shipping_details.phone" name="usrtel">
												</div>
											</div>
									</div>
								</div>
								<div class="cont-row">
									<div class="full-block">
											<div class="cont-label">Address</div>
											<div class="cont-field">
												<textarea v-model="shipping_details.address" rows="3" cols="50">
													{{ shipping_details.address }}
												</textarea>
											</div>
									</div>
								</div>
								<div class="cont-row">
									<div class="col-xs-12 col-md-6 manage" style="padding-top: 5px;">
										<div class="left-block">
											<div class="cont-label" style="padding-top: 0;">Province</div>
											<div class="cont-field">
												<div class="form-group">
													<select v-model="shipping_details.province" @change="getcity">
						 								<option value="" >Please select</option>
                            <template v-if="provinces">
						 								<option
                             v-for="(province, index) in provinces"
                             v-bind:key="index" :value="province.id">
                               {{province.name}}
                            </option>
                            </template>
									 				</select>
												</div>
											</div>
										</div>
									</div>
                  <div class="col-xs-12 col-md-6 manage" style="padding-top: 5px;">
											<div class="left-block">
												<div class="cont-label" style="padding-top: 0;">City</div>
												<div class="cont-field">
                          <div class="cont-field">
                            <div class="form-group">
                              <select v-model="shipping_details.city" @change="getsuburbs">
                                <option value="" >Please select</option>
                                <template v-if="cities">
                                <option
                                v-for="(city, index) in cities"
                                v-bind:key="index" :value="city.id">
                                  {{city.name}}
                                </option>
                                </template>
                                <template v-else>
                                  <option> Loading ....</option>
                                </template>
                              </select>
                            </div>
                          </div>
												</div>
											</div>
									</div>
								</div>

						 		<div class="cont-row">
                   <div class="col-xs-12 col-md-6 manage" style="padding-top: 5px;">
										<div class="left-block">
											<div class="cont-label" style="padding-top: 0;">Suburb</div>
											<div class="cont-field">
												<div class="form-group">
													<select v-model="shipping_details.suburbs" @change="getareas">
						 								<option value="">Please select</option>
                            <template v-if="suburbs">
                                <option
                                v-for="(suburb, index) in suburbs"
                                v-bind:key="index" :value="suburb.id">
                                  {{suburb.name}}
                                </option>
                                </template>
                                <template v-else>
                                  <option> Loading ....</option>
                                </template>
									 				</select>
												</div>
											</div>
										</div>
									</div>
                  <div class="col-xs-12 col-md-6 manage" style="padding-top: 5px;">
										<div class="right-block">
											<div class="cont-label" style="padding-top: 0;">Area</div>
											<div class="cont-field">
												<div class="form-group">
													<select v-model="shipping_details.area" @change="getDomesticRates">
					 								<option value="">Please select</option>
                            <template v-if="areas">
                                <option
                                v-for="(area, index) in areas"
                                v-bind:key="index" :value="area.id">
                                  {{area.name}}
                                </option>
                                </template>
                                <template v-else>
                                  <option> Loading ....</option>
                                </template>
					 								</select>
					 							</div>
					 						</div>
										</div>
									</div>
						 		</div>
                <div class="cont-row main">
						 			<div class="col-xs-12 col-md-6 manage" style="padding-top: 5px;">
						 				<div class="left-block">
						 					<div class="cont-label" style="padding-top: 0;">
						 						Zip Code
						 					</div>
						 					<div class="cont-field" style="padding-bottom: 10px;">
						 						<input v-model="shipping_details.zipcode" type="text" name="zipcode">
						 					</div>
						 				</div>
						 			</div>
						 		</div>
						 		<div class="checkout_suptitle">
						 			<span>SHIPPING METHOD</span>
						 		</div>
						 		<div class="cont-row">
						 			<div class="full-block shipping">
						 				<div class="cont-field">
						 					<select v-model="shipping_details.method" type="text" name="name" placeholder="Shipping methods">
                         <option value="" selected="true">Select Shipping Method </option>
                         <template v-if="shippingRates">
                            <option
                            v-for="(shippingmethod, index) in shippingRates"
                            v-bind:key="index" :value="shippingmethod">
                              [{{shippingmethod.name}}] (Max {{shippingmethod.max_day}}) RS: {{shippingmethod.finalRate}}
                            </option>
                            </template>
                            <template v-else>
                            <option> Loading ....</option>
                         </template>
						 					</select>
						 				</div>
						 			</div>
						 		</div>
						 		<div class="check_btn">
						 			<div class="cont-row">
						 				<div class="full-block">
						 					<input @click="openOrder" type="button" class="place" name="PLACE ORDER" value="PLACE ORDER">
						 				</div>
						 			</div>
						 			<div class="cont-row">
						 				<div class="full-block">
						 					<input type="button" class="back" name="BACK" value="BACK">
						 				</div>
						 			</div>
						 		</div>
						 	</div>
					 	</div>
		 				<button @click="openOrder" class="promo_code show" style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">2. ORDER DETAILS</button>
			 			<div class="panel" style="border: medium none !important; display: none; max-height: 0px;">
						 	<table class="table" id="checkto">
						 		<thead>
						 			<tr>
						 				<th class="text-left" colspan="2">Item</th>
						 				<th class="text-right" colspan="2">price</th>
						 				<th class="text-right" colspan="2">Total Price</th>
						 			</tr>
						 		</thead>
						 		<tbody>
						 			<template v-for="(cart, index) in carts">
					 					<tr>
							 				<td class="text-left" style="width:25px;">
							 					<a href="#">
							 						<template v-if="cart.images.length > 0">
			                      <img :src="IMAGE_URL + cart.images[0].image_url" alt="White Blouse Armani">
			                    </template>
							 					</a>
							 				</td>
							 				<td class="text-left"><a class="text-left" href="#" style="color: #3d3d3d;font-weight: 900;">{{ cart.modal }}</a>
							 					<p>{{ cart.name }}</p>
							 					<p class="gap_bet">Colour: <span v-if="cart.selected_color">{{ cart.selected_color.name }}</span></p>
							 					<p class="gap_bet">Size: <span v-if="cart.selected_size">{{ cart.selected_size.name }}</span></p>
							 					<p class="gap_bet" style="margin: 0px 0;">Quantity: {{ cart.selected_quantity }}</p>
							 				</td>
							 				<td class="text-right" colspan="2">IDR {{ cart.price}}
							 					<p style="text-decoration: line-through;color: #ababab;">IDR {{ cart.price}}</p>
							 				</td>
							 				<td class="text-right">IDR {{ cart.total_price}}
							 					<p style="text-decoration: line-through;color: #ababab;">IDR {{ cart.total_price}}</p>
							 				</td>
					 					</tr>
			            </template>
						 			<!-- <tr>
						 				<td class="text-left" style="width:25px;">
						 					<a href="#">
						 						<img src="images/482244_3250.jpg" alt="White Blouse Armani">
						 					</a>
						 				</td>
						 				<td class="text-left"><a class="text-left" href="#" style="color: #3d3d3d;font-weight: 900;">White Blouse Armani</a>
						 					<p>Pink Bumb Bag</p>
						 					<p class="gap_bet">Colour: Pink</p>
						 					<p class="gap_bet">Size: All Size</p>
						 					<p class="gap_bet" style="margin: 0px 0;">Quantity: 1</p>
						 				</td>
						 				<td class="text-right" colspan="2">IDR 260,000
						 					<p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p>
						 				</td>
						 				<td class="text-right">IDR 260,000
						 					<p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p>
						 				</td>
					 				</tr>
			 						<tr>
					 					<td class="text-left">
					 						<a href="#">
					 							<img src="images/482244_3250.jpg" alt="Black Blouse Armani">
					 						</a>
					 					</td>
					 					<td class="text-left"><a href="#" style="color: #3d3d3d;font-weight: 900;">Black Blouse Armani</a>
					 						<p>Pink Bumb Bag</p>
					 						<p class="gap_bet">Colour: Pink</p>
					 						<p class="gap_bet">Size: All Size</p>
					 						<p class="gap_bet" style="margin: 0px 0;">Quantity: 1</p>
					 					</td>
				 						<td class="text-right" colspan="2">IDR 260,000
				 							<p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p>
				 						</td>
				 						<td class="text-right">IDR 260,000
				 							<p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p>
				 						</td>
				 					</tr> -->
				 					<tr>
				 						<th
				 							colspan="12"
				 							class="text-left"
				 							style="border-top:1px solid rgba(9, 7, 9, 0.08);border-bottom:1px solid rgba(9, 7, 9, 0.08);padding: 18px 0;padding-bottom: 19px;"
			 							>
				 							Shopping Details
				 						</th>
				 					</tr>
				 					<tr>
				 						<th colspan="3" class="text-left" style="padding-bottom: 37px;">
				 							Tommy Wiratama<br>081380183760<br>Alam Sutera<br>Sutera Palmyra 5 No. 29<br>Tangerang, Banten<br>15325
				 						</th>
				 						<th
				 							colspan="3"
				 							class="text-left"
			 							>
			 								[REG] JNE (Max. 2 days): IDR 9,000
			 								<br>
			 								<img src="images/mastercard.png" style="height: 40px;width: auto;padding: 5px 0;">
			 							</th>
			 						</tr>
			 					</tbody>
			 					<tfoot>
			 						<tr style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left">SHIPPING</th>
			 							<th colspan="3" class="text-right">IDR 9,000</th>
			 						</tr>
			 						<tr style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left" style="color:#4c4988">PROMO CODE</th>
			 							<th colspan="3" class="text-right" style="color:#4c4988">IDR 100,000</th>
			 						</tr>
			 						<tr style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left" style="font-weight: 900">TOTAL</th>
			 							<th colspan="3" class="text-right" style="font-weight: 900">IDR 679,000</th>
			 						</tr>
			 						<tr>
			 							<th colspan="12" class="sub_btn">
			 								<div class="form-group">
                         <form id="payment-form" method="post" action="">
                          <input type="hidden" name="header_id" id="header_id" value="662">
                          <input type="hidden" name="result_type" id="result-type" value="">
                          <input type="hidden" name="result_data" id="result-data" value="">
                          <input type="text" name="token" id="token" value="" >
                        </form>
						            <a href="#" class="d-block btn  white bg-purple btn-block mb-3" @click="getToken" id="pay-button" data-header="662">PAYMENT</a>
			 									<button type="button" @click="dopayment">PAYMENT</button>
			 									<button type="button" class="ctn_shopping">CONTINUE SHOPPING</button>
			 								</div>
			 							</th>
			 						</tr>
			 					</tfoot>
			 				</table>
	 					</div>
	 				</div>
	 			</div>
 			</div>
		</div>
	</div>
</template>

<script scoped>
// $('.shipping_records').show();
// 						$('.shipping_cost').hide();

		import BottomHeader from "../../../layouts/partials/home/BottomHeader";
		import AboutContent from "../../../components/Front/AboutContent";
    import { mapGetters } from 'vuex';
const midtransClient = require('midtrans-client');

const buildURLQuery = obj =>
      Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

		export default {
				name: "index",
				components: {AboutContent, BottomHeader},
				computed:{
						...mapGetters(['common']),
						carts(){
							return this.$store.state.carts.list
						}
				},
				data: function () {
						return {
								shipping_details: {
									name: null,
									phone: null,
									address: null,
									suburbs: '',
                  area: '',
                  city: '',
									zipcode: null,
                  method: null,
                  province: null,
                },
                provinces: [],
                suburbs:null,
                areas: null,
                cities: null,
                order_details: null,
                shippingRates: null,
								IMAGE_URL: 'http://localhost:8000/'
						}
				},
				mounted(){
          var url = '/api2/prod/public/v1/';
          var cities = 'provinces';
          var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
          let getprovinces = this.$axios.$get(url+cities+apikey,{
          headers: {
            'Access-Control-Allow-Origin': '*'
          }}).then(res => {
            this.provinces = res.data.rows
          });

					$('#checkout button.promo_code').on('click', function(){
				    $('#checkout button').removeClass('selected');
				    $('#checkout .panel').css('display','none');
				    $('#checkout .panel').css('max-height','0');

				    $(this).addClass('selected');
				    $(this).next().css('display', 'block');
				    $(this).next().css('max-height','fit-content');
				    $(this).next().css('max-height','-moz-fit-content');
					});
				},
				async asyncData ({ app,store }) {
						app.$axios.setHeader('lang', store.state.locale);
						// let featuredProducts = await app.$axios.$get('men/featuredproducts');
						return {}
				},
				methods: {
          getcity() {
            this.cities = null
            var url = '/api2/prod/public/v1/';
            var cities = 'cities';
            var param = '&province=';
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
            let getprovinces = this.$axios.$get(url+cities+apikey+param+this.shipping_details.province,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.cities = res.data.rows
              console.log(this.cities)
            });
          },
          getsuburbs() {
            this.suburbs = null
            var url = '/api2/prod/public/v1/';
            var suburbs = 'suburbs';
            var param = '&city=';
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
           this.$axios.$get(url+suburbs+apikey+param+this.shipping_details.city,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.suburbs = res.data.rows
              console.log(this.suburbs)
            });
          },
          getareas() {
            this.areas = null
            var url = '/api2/prod/public/v1/';
            var areas = 'areas';
            var param = '&suburb=';
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
            this.$axios.$get(url+areas+apikey+param+this.shipping_details.suburbs,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.areas = res.data.rows
              console.log(this.areas)
            });
          },
          getDomesticRates() {
            var url = '/api2/prod/public/v1/';
            var domesticRates = 'domesticRates';
            var params = {
              o:4751,
              d:this.shipping_details.area,
              wt:1.5,
              l:10,
              w:10,
              h:10,
              v:10000
            }

            const searchParams = buildURLQuery(params);

            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f&';
            console.log(url+domesticRates+apikey+searchParams)
            this.$axios.$get(url+domesticRates+apikey+searchParams,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              console.log(res)
              this.shippingRates = res.data.rates.logistic.regular

            });
          },

					openShipping() {
						this.toggleTab();
					},
					openOrder() {
						$('#checkout button.promo_code').click();
						this.toggleTab();
					},
					toggleTab() {
						$('#checkout button.promo_code').on('click', function(){
					    $('#checkout button').removeClass('selected');
					    $('#checkout .panel').css('display','none');
					    $('#checkout .panel').css('max-height','0');

					    $(this).addClass('selected');
					    $(this).next().css('display', 'block');
					    $(this).next().css('max-height','fit-content');
					    $(this).next().css('max-height','-moz-fit-content');
						});
          },
          async getToken() {
            // prepare Snap API parameter ( refer to: https://snap-docs.midtrans.com ) minimum parameter example:
          let snap = new midtransClient.Snap({
              isProduction : false,
              serverKey : 'VT-client-kev115vEOPOwkRiV',
              clientKey : 'VT-server-hYR70nG06FzM39QWP588bnS1'
          });

          let parameter = {
  "transaction_details": {
    "order_id": "ORDER-101",
    "gross_amount": 10000
  },
  "item_details": [{
    "id": "ITEM1",
    "price": 10000,
    "quantity": 1,
    "name": "Midtrans Bear",
    "brand": "Midtrans",
    "category": "Toys",
    "merchant_name": "Midtrans"
  }],
  "customer_details": {
    "first_name": "TEST",
    "last_name": "MIDTRANSER",
    "email": "test@midtrans.com",
    "phone": "+628123456",
    "billing_address": {
      "first_name": "TEST",
      "last_name": "MIDTRANSER",
      "email": "test@midtrans.com",
      "phone": "081 2233 44-55",
      "address": "Sudirman",
      "city": "Jakarta",
      "postal_code": "12190",
      "country_code": "IDN"
    },
    "shipping_address": {
      "first_name": "TEST",
      "last_name": "MIDTRANSER",
      "email": "test@midtrans.com",
      "phone": "0 8128-75 7-9338",
      "address": "Sudirman",
      "city": "Jakarta",
      "postal_code": "12190",
      "country_code": "IDN"
    }
  },
  "enabled_payments": ["credit_card", "mandiri_clickpay", "cimb_clicks",
    "bca_klikbca", "bca_klikpay", "bri_epay", "echannel", "mandiri_ecash",
    "permata_va", "bca_va", "bni_va", "other_va", "gopay", "indomaret",
    "danamon_online", "akulaku"],
  "credit_card": {
    "secure": true,
    "channel": "migs",
    "bank": "bca",
    "installment": {
      "required": false,
      "terms": {
        "bni": [3, 6, 12],
        "mandiri": [3, 6, 12],
        "cimb": [3],
        "bca": [3, 6, 12],
        "offline": [6, 12]
      }
    },
    "whitelist_bins": [
      "48111111",
      "41111111"
    ]
  },
  "bca_va": {
    "va_number": "12345678911",
    "sub_company_code": "00000",
    "free_text": {
      "inquiry": [
        {
          "en": "text in English",
          "id": "text in Bahasa Indonesia"
        }
      ],
      "payment": [
        {
          "en": "text in English",
          "id": "text in Bahasa Indonesia"
        }
      ]
    }
  },
  "bni_va": {
    "va_number": "12345678"
  },
  "permata_va": {
    "va_number": "1234567890",
    "recipient_name": "SUDARSONO"
  },
  "callbacks": {
    "finish": "https://demo.midtrans.com"
  },
  "expiry": {
    "start_time": "2018-12-13 18:11:08 +0700",
    "unit": "minutes",
    "duration": 1
  },
  "custom_field1": "custom field 1 content",
  "custom_field2": "custom field 2 content",
  "custom_field3": "custom field 3 content"
}
snap.createTransaction(parameter)
    .then((transaction)=>{
        // transaction token
        let transactionToken = transaction.token;
        var resultType = document.getElementById('result-type');
        var resultData = document.getElementById('result-data');
        function changeResult(type,data){
          $("#result-type").val(type);
          $("#result-data").val(JSON.stringify(data));
          //resultType.innerHTML = type;
          //resultData.innerHTML = JSON.stringify(data);
        }

        snap.pay(transactionToken, {

          onSuccess: function(result){
            changeResult('success', result);
            console.log(result.status_message);
            console.log(result);
            $("#payment-form").submit();
          },
          onPending: function(result){
            changeResult('pending', result);
            console.log(result.status_message);
            $("#payment-form").submit();
          },
          onError: function(result){
            changeResult('error', result);
            console.log(result.status_message);
            $("#payment-form").submit();
          }
        });
    })




          },
          dopayment(token){

          }
				}
		}
</script>


<style src="~/assets/css/checkout.css"></style>
