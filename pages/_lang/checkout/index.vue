<template>
		<div>
				<bottom-header :categoryList="categoryList" :url="'men/category/'"></bottom-header>
				<div id="section_part" style="padding-top: 0;" class="section_style">

						<div class="container-fluid">

								<div class="row">

										<div class="col-sm-12 col-md-12 content_bel">
												<div class="banner_below">
														<!-- <nuxt-link :to="$i18n.path(data.section_1.redirect_link)" exact>
																<img v-lazy="data.section_1.image_url">
														</nuxt-link>
														<div class="top_in_shop" style="bottom: 35px;">
																<button class="shop_brand">{{data.section_1.button_text}}</button>
														</div> -->
												</div>
												<div class="banner_below_res">
														<!-- <nuxt-link :to="$i18n.path(data.section_1.redirect_link)" exact>
																<img v-lazy="data.section_1.mobile_image_url">
														</nuxt-link>
														<div class="top_in_shop" style="bottom: 35px;">
																<button class="shop_brand">{{data.section_1.button_text}}</button>
														</div> -->
												</div>
												<div class="only_caption">
														<!-- <div class="banner_caption">
																{{data.section_1.banner_text}}
														</div> -->
												</div>


										</div>

										<div class="col-sm-12 col-md-6 delight">
                      <div class="product_img">
                        <div class="pro_first">
                          <!-- <nuxt-link :to="$i18n.path(data.section_2.redirect_link)" exact>
                            <img v-lazy="data.section_2.image_url">
                          </nuxt-link> -->
                          <!-- <div class="top_shop">
                            <button class="shop_now_cat">{{data.section_2.button_text}}</button>
                          </div> -->
                        </div>
                      </div>
										</div>

										<div class="col-sm-12 col-md-6 delight">
												<div class="product_img">
														<div class="pro_first">
																<!-- <nuxt-link :to="$i18n.path(data.section_3.redirect_link)" exact>
																		<img v-lazy="data.section_3.image_url">
																</nuxt-link>
																<div class="top_shop">
																		<button class="shop_now_cat">{{data.section_3.button_text}}</button>
																</div> -->
														</div>
												</div>
										</div>
								</div>
						</div>

				</div>
				<div class="dis_your">
						<div class="container-fluid">
								<div class="row">
										<!-- <div class="dis_title">DISCOVER YOUR STYLE</div> -->

										<div class="col-md-12 bot">
											<div class="checkout_title">

					<span>CHECKOUT (Step 1 of 2)</span>

				</div>
				<button class="promo_code show selected" id="shipping" >1. SHIPPING ADDRESS</button>
				<div class="panel shipping_records" style="display: block; max-height: max-content;">

				    <div class="checkout_form">

					     <div class="cont-row">

					        <div class="col-xs-12 col-md-6 manage">

					            <div class="left-block">

					                <div class="cont-label">

					                    Name

					                </div>

					                <div class="cont-field">

					                    <input type="text" name="name">

					                </div>

					            </div>

					        </div>

					        <div class="col-xs-12 col-md-6 manage">

					            <div class="right-block">

					                <div class="cont-label">

					                    Phone Number

					                </div>

					                <div class="cont-field">

					                    <input type="tel" name="usrtel">

					                </div>

					            </div>

					        </div>

					    </div>

					    <div class="cont-row">

					        <div class="full-block">

					            <div class="cont-label">

					                Address

					            </div>

					            <div class="cont-field">

					                <textarea rows="3" cols="50"></textarea>

					            </div>

					        </div>

					    </div>

					     <div class="cont-row">

					        <div class="col-xs-12 col-md-6 manage">

					            <div class="left-block">

					                <div class="cont-label" style="padding-top: 0;">

					                    Province

					                </div>

					                <div class="cont-field">

					                    <div class="form-group">

	                                   <select class="form-control">

	                                   	  
                                           <option value=""></option>
										  <option value="1">Adoni</option>

										    <option value="2">Amaravati</option>

										    <option value="3">Anantapur</option>    

	                                   </select>  

	                                </div>

					                </div>

					            </div>

					        </div>

					        <div class="col-xs-12 col-md-6 manage">

					            <div class="right-block">

					                <div class="cont-label" style="padding-top: 0;">

					                    City

					                </div>

					                <div class="cont-field">

					                   <div class="form-group">

	                                   <select class="form-control">

	                                   	  
                                           <option value=""></option>
										    <option value="1">Adoni</option>

										    <option value="2">Amaravati</option>

										    <option value="3">Anantapur</option>

										     

	                                   </select>  

	                                </div>

					                </div>

					            </div>

					        </div>

					    </div>

					    <div class="cont-row">

					        <div class="col-xs-12 col-md-6 manage" style="padding-top: 5px;">

					            <div class="left-block">

					                <div class="cont-label" style="padding-top: 0;">

					                    Suburb

					                </div>

					                <div class="cont-field">

					                    <div class="form-group">

	                                   <select class="form-control">
                                          <option value=""></option>
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

					                <div class="cont-label" style="padding-top: 0;">

					                    Area

					                </div>

					                <div class="cont-field">

					                    <div class="form-group">

	                                   <select class="form-control">
                                          <option value=""></option>
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

					                    <input type="text" name="zipcode">

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

					                <input type="text" name="name" placeholder="[REG] JNE (Max. 2 days): IDR 9,000">

					            </div>

					        </div>

					       </div>

					       <div class="check_btn">

					        <div class="cont-row">

						        <div class="full-block">

						            <input type="button" class="place" name="PLACE ORDER" value="PLACE ORDER">

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
				<button class="promo_code show shipping_cost_tab" id="oreder" style="border-top: 1px solid rgba(9, 7, 9, 0.08);border-bottom: 1px solid rgba(9, 7, 9, 0.08);">2. ORDER DETAILS</button>
				<div class="panel shipping_cost" style="border: none !important; display: block; max-height: max-content;">

				      <table class="table" id="checkto">

                                    <thead>

                                        <tr>

                                            <th class="text-left" colspan="2">Item</th>

                                           

                                            <th class="text-right" colspan="2">price</th>

                                            <th class="text-right" colspan="2">Total Price</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>

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

                                           

                                            <td class="text-right" colspan="2">IDR 260,000<p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p></td>

                                           

                                            <td class="text-right">IDR 260,000

                                            <p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p></td>

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

                                            

                                             <td class="text-right" colspan="2">IDR 260,000<p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p></td>

                                            

                                            <td class="text-right">IDR 260,000

                                            <p style="text-decoration: line-through;color: #ababab;">IDR 260,000</p></td>

                                        </tr>

                                        <tr>

                                            <th colspan="12" class="text-left" style="border-top:1px solid rgba(9, 7, 9, 0.08);border-bottom:1px solid rgba(9, 7, 9, 0.08);padding: 18px 0;
    padding-bottom: 19px;">Shopping Details</th>

                                        </tr>

                                        <tr>

                                            <th colspan="3" class="text-left" style="padding-bottom: 37px;">Tommy Wiratama<br>

												081380183760<br>

												Alam Sutera<br>

												Sutera Palmyra 5 No. 29<br>

												Tangerang, Banten<br>

												15325

											</th>

                                             <th colspan="3" class="text-left">[REG] JNE (Max. 2 days): IDR 9,000 <br><img src="images/mastercard.png" style="height: 40px;width: auto;padding: 5px 0;"></th>

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
						...mapGetters(['common'])
				},
				data: function () {
						return {
								sliderList : [],
								categoryList:[],
								featuredList:[],
								productsList: [],
								IMAGE_URL: 'http://localhost:8000/'
						}
				},
			 // transition: 'page',
				/*transition(to, from) {
						if (!from) return 'slide-left'
						return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
				},*/
				mounted(){
					$('#shipping').click(function(){
						$('.shipping_records').show();
						$('.shipping_cost').hide();
					});
					$('#order').click(function(){
						$('.shipping_records').hide();
						$('.shipping_cost').show();
					});

				}
				// mounted(){
				// 		$('.owl-carousel').owlCarousel({
				// 				loop: true,
				// 				margin: 10,
				// 				responsiveClass: true,
				// 				navigation : true,
				// 				navText: ["<img src='"+require("@/assets/images/arrow_left_new.svg")+"'>","<img src='"+require("@/assets/images/arrow_right_new.svg")+"'>"],
				// 				responsive: {
				// 						0: {
				// 								items: 2,
				// 								nav: true
				// 						},
				// 						600: {
				// 								items: 3,
				// 								nav: false
				// 						},
				// 						1000: {
				// 								items: 6,
				// 								nav: true,
				// 								loop: false,

				// 						}
				// 				}
				// 		});
				// },
				// async asyncData ({ app,store }) {
				// 		app.$axios.setHeader('lang', store.state.locale);
				// 		let response1 = await app.$axios.$get('men/category');
				// 		let response2 = await app.$axios.$get('page/men');
				// 		let allProducts = await app.$axios.$get('men/allproducts');
				// 		let featuredProducts = await app.$axios.$get('men/featuredproducts');
				// 		return {
				// 				data: response2.data,
				// 				categoryList:response1.data,
				// 				featuredList: featuredProducts,
				// 				productsList: allProducts
				// 		}
				// }
		}
</script>


<style src="~/assets/css/women.css"></style>
