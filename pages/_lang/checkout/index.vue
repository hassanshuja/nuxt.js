<template>
	<div>

		<div id="checkout">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12">
						<div class="checkout_title">
            <PaymentOptions @kerdivo="payment_installment" @midtrans="click_pay_midtrans"></PaymentOptions>

							<span>CHECKOUT (Step 1 of 2)</span>
						</div>
						<button @click="openShipping" class="promo_code show active selected">1. SHIPPING ADDRESS</button>
            <div class="row" v-if="this.formErrors.length>0">
                  <div class="col-xs-12">
                    <div  class="alert alert-danger" >
                      <span v-for="(errors, index) in formErrors" v-bind:key="index">
                        {{errors.charAt(0).toUpperCase()}}{{errors.slice(1)}} field is required <br>
                      </span>
                      
                    </div>
                  </div>
                </div>
						<div class="panel" style="display: block; max-height: fit-content;">
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
                             v-bind:key="index" :value="{id:province.id, name: province.name}">
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
                                v-bind:key="index" :value="{id:city.id, name: city.name}">
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
                                v-bind:key="index" :value="{id:suburb.id, name: suburb.name}">
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
                                v-bind:key="index" :value="{id:area.id, name: area.name}">
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
                 <div v-if="shippingRates" class="cont-row">
                   <!-- <template v-for="(merchant, index) in merchants"> -->
                   <div 
                    v-for="(item, ind) in shippingRates" 
                    v-bind:key="ind" 
                    class="col-xs-12 col-md-6 manage" style="padding-top: 5px;"
                   >
						 			<div class="left-block shipping">
                    <div class="cont-label" style="padding-top: 0;">{{item.name}}</div>
						 				<div class="cont-field">
						 					<select :id="item.name" @change="checkmerchant()" v-model="shipping_details.method[ind]" class="shippingselection"
                       :name="'shipping[]['+item.name+']'" placeholder="Shipping methods">
                         <option value="">Select Shipping Method </option>
                         <optgroup label="Regular Delivery" v-if="item.regular.length > 0">                          
                            <option
                            v-for="(shippingmethod, index) in item.regular.filter(reg => shippers_allowed.includes(reg.name))"
                            v-bind:key="index" 
                            :value="{ 
                              merchant_name : item.name,
                              rate:shippingmethod.finalRate, 
                              text: shippingmethod.name +'( Max '+ shippingmethod.max_day+') RS: '+shippingmethod.finalRate }">
                              [{{shippingmethod.name}}] (Max {{shippingmethod.max_day}}) RS: {{shippingmethod.finalRate}}
                            </option>
                            </optgroup>
                            <optgroup label="Express Delivery" v-if="item.express.length > 0">
                            <option
                            v-for="(shippingexpress, key) in item.express.filter(exp => shippers_allowed.includes(exp.name))"
                            v-bind:key="key" :value="{ 
                              merchant_name : item.name,
                              rate:shippingexpress.finalRate, 
                              text: shippingexpress.name +'( Max '+ shippingexpress.max_day+') RS: '+shippingexpress.finalRate }">
                              [{{shippingexpress.name}}] (Max {{shippingexpress.max_day}}) RS: {{shippingexpress.finalRate}}
                            </option>
                            </optgroup>
						 					</select>
						 				</div>
						 			</div>
						 			</div>
						 		
                <!-- </template> -->
                </div>
                
						 		<div class="check_btn">
						 			<div class="cont-row">
						 				<div class="full-block">
						 					<input @click="openOrder"  type="button" class="place" name="PLACE ORDER" value="PLACE ORDER">
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
				 							{{shipping_details.name}}<br>{{shipping_details.phone}}<br>{{shipping_details.address}}<br>{{shipping_details.suburbs.name}}<br>{{shipping_details.area.name}}<br>{{shipping_details.zipcode}}
				 						</th>
				 						<th
				 							colspan="3"
				 							class="text-left"
                      v-if="shippingtext"
			 							>
			 								<span v-for="(item, index) in shippingtext" v-bind:key="index" @change="gettext(item, index)">
                          {{item.text}}
                         <br>
			 								</span>
			 								
			 								<img src="images/mastercard.png" style="height: 40px;width: auto;padding: 5px 0;">
			 							</th>
			 						</tr>
			 					</tbody>
			 					<tfoot>
			 						<tr style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left">SHIPPING</th>
			 							<th colspan="3" class="text-right">{{shipping_total}}</th>
			 						</tr>
			 						<tr style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left" style="color:#4c4988">PROMO CODE</th>
			 							<th colspan="3" class="text-right" style="color:#4c4988">IDR 100,000</th>
			 						</tr>
                   <template v-if="shipping_discount > 0">
                  <tr  style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left" style="color:#4c4988">SHIPPING DISCOUNT</th>
			 							<th colspan="3" class="text-right" style="color:#4c4988">IDR ({{shipping_discount}})</th>
			 						</tr>
                   </template>
			 						<tr style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">
			 							<th colspan="3" class="text-left" style="font-weight: 900">TOTAL</th>
			 							<th colspan="3" class="text-right" style="font-weight: 900">IDR {{subtotal + shipping_total}}</th>
			 						</tr>
			 						<tr>
			 							<th colspan="12" class="sub_btn">
			 								<div class="form-group">
                        <form id="payment-form" method="post" action="snapfinish">
                          <input type="hidden" name="_token" value="{!! csrf_token() !!}">
                          <input type="hidden" name="result_type" id="result-type" value="">
                          <input type="hidden" name="result_data" id="result-data" value="">
                        </form>
						            <!-- <a href="#" class="d-block btn  white bg-purple btn-block mb-3" id="pay-button" data-header="662">PAYMENT</a> -->
			 									<button class="d-block btn  white bg-purple btn-block mb-3"  type="button" @click="showPaymentOptions" >PAYMENT</button>
			 									<!-- <button class="d-block btn  white bg-purple btn-block mb-3"  type="button" id="pay-button" >PAYMENT</button> -->
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
    import PaymentOptions from "../../../components/Model/PaymentOptions";
    import { mapGetters } from 'vuex';

const buildURLQuery = obj =>
      Object.entries(obj)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');

		export default {
        name: "index",
        middleware: 'auth',
				components: {AboutContent, BottomHeader, PaymentOptions},
				computed:{
            ...mapGetters(['common']),
            
						carts(){

              //mapping all the merchants using map function with duplicates
              // console.log(this.$store.state.carts.list)
              this.merchants = this.$store.state.carts.list.map(function(item , index){
                return item.product_merchant
              })

              let cartData = this.merchants;
              //removing duplicates of merchants using set function of ES6
              let mydata = new Set(cartData);
              this.merchants = Array.from(mydata);

              fetch('http://18.188.214.35/api/merchantDetails', {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrer: 'no-referrer', // no-referrer, *client
              body: JSON.stringify({merchants: this.merchants})}
            )
            .then( response => response.json())
            .then(data => {
                this.merchant_areas = data
              })

              this.cart = this.$store.state.carts.list
							return this.$store.state.carts.list
            },
           subtotal() {
              return this.$store.state.carts.sub_total
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
              method: [],
              province: null,
              province_name: '',
              suburbs_name: '',
              area_name: '',
              city_name: '',

            },
            provinces: [],
            suburbs:null,
            areas: null,
            cities: null,
            order_details: null,
            shippingRates: {},
            IMAGE_URL: 'http://18.188.214.35/',
            merchants: null,
            merchant_areas: [],
            selectedMerchant: null,
            pushShippingrate: {},
            formErrors: [],
            cart: null,
            shippingtext: '',
            shipping_total: 0,
            shipping_discount: 0,
            baseURL: process.env.baseURL,
            user_ip: null,
            orderId: null,
            shippers_allowed : ['TIKI', 'JNE', 'SiCepat'],
            kredivo_paymentId : null,
            kredivo_redirect_url : null
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
          
            // console.log('merchants', this.merchants.entries())
        },
				async asyncData ({ app, store }) {
            app.$axios.setHeader('lang', store.state.locale);
            
            // let featuredProducts = await app.$axios.$get('http://18.188.214.35/api/men/featuredproducts');
            // const ip = app.connection || app.socket
            // this.ip = ip
            // console.log('lskdf', this.ip)
						return {}
        },
				methods: {
          showPaymentOptions(){
            setTimeout(function () {
                $('#mypopup').modal('show');
            },1000);

            console.log()

            this.$axios.$get(this.baseURL+'/orders/getorderid', {
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.orderId = res
            });

          },
          click_pay_midtrans() {
            
           let mydata  = this.$store.state.carts
            // let baseURL = this.baseURL 
            // this.$axios.defaults.baseURL = 'http://localhost:8000/api';
            let baseURL = this.baseURL 


              this.$axios.$post(baseURL+'/snaptokenization', mydata,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrer: 'no-referrer', // no-referrer, *client
            }
            )
            .then(data => {
                
                // location = data;
                // console.log('token = '+data);
                var resultType = document.getElementById('result-type');
                var resultData = document.getElementById('result-data');

                function changeResult(type,data){
                  $("#result-type").val(type);
                  $("#result-data").val(JSON.stringify(data));
                  //resultType.innerHTML = type;
                  //resultData.innerHTML = JSON.stringify(data);
                }

                snap.pay(data, {
                  
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
              });

          },
          payment_installment(){

            
            var myitem =[]
            let cart  = this.$store.state.carts


            //store order in db
  
            let baseURL = this.baseURL 


              this.$axios.$post(baseURL+'/orders', cart,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrer: 'no-referrer', // no-referrer, *client
            }
            )
            .then(data => {
              console.log(data)

              })  
            // creating items array purchased by customer
            cart.list.forEach((item, index) => {
              var arr = {};
              arr = {
                "id": item.id.toString(),
                "name":item.name,
                "price":item.price,
                "type":item.modal,
                "url":"http://localhost:3000/product_detail/"+item.id,
                "quantity": parseInt(item.selected_quantity)
            }

              myitem.push(arr)
            })

            //pushing shippers detials in items array
            this.shipping = cart.final_detail.shipping_details.method.map((item, index) => {
                myitem.push( {
                  "id": item.merchant_name,
                  "name": item.text,
                  "price": item.rate,
                  "quantity": 1,
                  "parent_type": "SELLER",
                  "parent_id": item.merchant_name
                })
            })


            //Details of each merchant from which item is purchased
            var sellers = []
            this.merchant_areas.forEach((item, index) => {
               
               let arrs = {
                  "id": item.name,
                  "name": item.name,
                  "email": item.email,
                  "address" : {
                      "first_name":item.name,
                      "last_name":"",
                      "address":item.address,
                      "city":item.city,
                      "postal_code":item.zip_code,
                      "phone":item.phone,
                      "country_code":"IDN"
                  }  
                }
              sellers.push(arrs)
            })

            // This is the discount given on shipping if total order is 
            // greater than 500k(18000 idr on this) or 1Million (35000 on this)
            if(cart.final_detail.shipping_discount){
               var discount = {
                    "id":"discount",
                    "name":"Discount",
                    "price":cart.final_detail.shipping_discount,
                    "quantity":1
                }

              myitem.push(discount)
            }
           

          // Full detail of order that needs to send to kredivo api
          // to get redirect url for payment
           var items = {
              "server_key":"a592153585cde57ef34d32ba73390b1a",
                "payment_type":"30_days",  
                "tokenize_user": false,
                "client_user_key": "hi@finaccel.co",
                "user_token" : "XXXX-XXXX",
                "transaction_details": {
                    "amount": cart.final_detail.grandTotal,
                    "order_id": this.orderId,
                    "items": myitem
                },
                "sellers" : sellers,
                "customer_details": {
                    "first_name": this.shipping_details.name,
                    "last_name":"",
                    "email":"alie@satuduatiga.com",
                    "phone":this.shipping_details.phone
                },
                "billing_address": {
                    "first_name":this.shipping_details.name,
                    "last_name":"",
                    "address":this.shipping_details.name.address,
                    "city": this.shipping_details.city_name,
                    "postal_code":this.shipping_details.zipcode,
                    "phone":this.shipping_details.phone,
                    "country_code":"IDN"
                },
                "shipping_address": {
                    "first_name":this.shipping_details.name,
                    "last_name":"",
                    "address":this.shipping_details.name.address,
                    "city": this.shipping_details.city_name,
                    "postal_code":this.shipping_details.zipcode,
                    "phone":this.shipping_details.phone,
                    "country_code":"IDN"
                },
                "metadata": {
                    "ip_address":"192.168.88.1",
                    "user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
                },
                // "callback_url":"https://18.188.214.35/api/orders/kredivo_notify", 
                "push_uri":"http://18.188.214.35/api/orders/kredivo_push_uri",
                "back_to_store_uri":"https://18.221.210.123/thankyou"
            }


            //Kredivo api pos request          
            this.$axios.$post('/apii33/kredivo/v2/checkout_url', items,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrer: 'no-referrer', // no-referrer, *client
            }
            )
            .then(data => {
              this.kredivo_paymentId = data.transaction_id
              this.kredivo_redirect_url = data.redirect_url

              window.location = data.redirect_url

              })
            //hiding popup of payment gateways options
              setTimeout(function () {
                $('#mypopup').modal('hide');
            },1000);
          },
          gettext(item, index){
            console.log(item, index)
          },
          getcity() {
            this.shipping_details.province_name = this.shipping_details.province.name

            this.cities = null
            var url = '/api2/prod/public/v1/';
            var cities = 'cities';
            var param = '&province=';
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
            let getprovinces = this.$axios.$get(url+cities+apikey+param+this.shipping_details.province.id,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.cities = res.data.rows
              console.log(this.cities)
            });

          },
          getsuburbs() {
            this.suburbs = null
            this.shipping_details.city_name = this.shipping_details.city.name

            var url = '/api2/prod/public/v1/';
            var suburbs = 'suburbs';
            var param = '&city=';
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
           this.$axios.$get(url+suburbs+apikey+param+this.shipping_details.city.id,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.suburbs = res.data.rows
              console.log(this.suburbs)
            });

          },
          getareas() {
            this.areas = null
            this.shipping_details.suburbs_name = this.shipping_details.suburbs.name

            var url = '/api2/prod/public/v1/';
            var areas = 'areas';
            var param = '&suburb=';
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f';
            this.$axios.$get(url+areas+apikey+param+this.shipping_details.suburbs.id,{
            headers: {
              'Access-Control-Allow-Origin': '*'
            }}).then(res => {
              this.areas = res.data.rows
              console.log(this.areas)
            });


          },
           async getDomesticRates() {

            var rawdata = {}
            var shipping_details_area = this.shipping_details.area;
            this.shipping_details.area_name = this.shipping_details.area.name


            var url = '/api2/prod/public/v1/';

            var domesticRates = 'domesticRates';
            this.pushShippingrate = []
             this.merchant_areas.map((item, index) => {
                var params = {
                o:item.area_id,
                d:shipping_details_area.id,
                wt:1.5,
                l:10,
                w:10,
                h:10,
                v:10000
              }
  

            const searchParams = buildURLQuery(params);
            var shipping_rates = new Array();
            var apikey = '?apiKey=b9ea898678816b4b3cd248727a322f4f&';
            this.$axios.$get(url+domesticRates+apikey+searchParams,{
                headers: {
                  'Access-Control-Allow-Origin': '*'
                }})

                .then(response =>{
            
                // let express = response.data.rates.logistic.express.filter(exp => shippers_allowed.includes(exp.name))
                // let regular = response.data.rates.logistic.regular.filter(reg => shippers_allowed.includes(reg.name))

                rawdata = response.data.rates.logistic
                rawdata.name = item.name
                
                // rawdata.express = express;
                // rawdata.regular = regular;
                this.pushShippingrate.push(rawdata)
                console.log('shippingraates', this.pushShippingrate)

                }).then(() => {
                    this.shippingRates = this.pushShippingrate
                })
              })

          },
        checkmerchant(){
          console.log(this.shipping_details);
        },
        validate() {
          this.formErrors = []
          for(var key in this.shipping_details){
            if(this.shipping_details[key] == null || this.shipping_details[key] == '' || this.shipping_details[key].length < this.merchants.length){
              this.formErrors.push(key)
            }
          }

          if(this.formErrors.length === 0){
            return true;
          }
          // var data = this.shipping_details.map((item, key) => {
          //   console.log(item, key)
          //   return false;
          // })
        },

					openShipping() {
						this.toggleTab();
					},
					openOrder() {
            // if(!this.validate()){
            //   return false;
            // }
            this.shippingtext = this.shipping_details.method
            this.shipping_total = 0
            this.shipping_details.method.forEach((item, index) => {
              this.shipping_total += item.rate
              
            })
            
            console.log(this.shipping_total, 'shioing total')
            if(this.subtotal > 900000 && this.subtotal < 1000000){
              this.shipping_total = this.shipping_total - 18000
              this.shipping_discount = 18000
            }else if(this.subtotal >= 1000000){
              this.shipping_total = this.shipping_total - 35000
              this.shipping_discount = 35000
            }
            
            var obj = {
                shippingtext: this.shippingtext,
                shipping_total: this.shipping_total,
                shipping_discount: this.shipping_discount,
                subtotal: this.subtotal,
                shipping_details: this.shipping_details,
                merchants: this.merchants,
                grandTotal: this.subtotal + this.shipping_total
              };
              // var vuex = JSON.parse(localStorage.getItem('vuex'))
             this.$store.commit('carts/payment', obj)

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
         


          },
          dopayment(token){

          }
				}
		}
</script>


<style src="~/assets/css/checkout.css"></style>
