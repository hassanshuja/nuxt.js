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
											<div class="cont-label" style="padding-top: 0;">Suburb</div>
											<div class="cont-field">
												<div class="form-group">
													<select v-model="shipping_details.suburb">
						 								<option value="">Please select</option>
						 								<option value="1">Adoni</option>
						 								<option value="2">Amaravati</option>
						 								<option value="3">Anantapur</option>  
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
													<select v-model="shipping_details.area">
					 									<option value="">Please select</option>
					 									<option value="1">Adoni</option>
					 									<option value="2">Amaravati</option>
					 									<option value="3">Anantapur</option>
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
						 			<div class="full-block">
						 				<div class="cont-field">
						 					<input v-model="shipping_details.method" type="text" name="name" placeholder="[REG] JNE (Max. 2 days): IDR 9,000">
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
			 									<button type="button">PAYMENT</button>
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

<script>
// $('.shipping_records').show();
// 						$('.shipping_cost').hide();

		import BottomHeader from "../../../layouts/partials/home/BottomHeader";
		import AboutContent from "../../../components/Front/AboutContent";
		import { mapGetters } from 'vuex';
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
									suburb: '',
									area: '',
									zipcode: null,
									method: null
								},
								order_details: null,
								IMAGE_URL: 'http://localhost:8000/'
						}
				},
				mounted(){
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
					}
				}
		}
</script>


<style src="~/assets/css/checkout.css"></style>
