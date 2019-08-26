<template>
		<div>
				<bottom-header :categoryList="categoryList" :url="'men/category/'"></bottom-header>
				<div id="section_part" style="padding-top: 0;" class="section_style">

						<div class="container-fluid">

								<div class="row">

										<div class="col-sm-12 col-md-12 content_bel">
												<div class="banner_below">
														<nuxt-link :to="$i18n.path(data.section_1.redirect_link)" exact>
																<img v-lazy="data.section_1.image_url">
														</nuxt-link>
														<div class="top_in_shop" style="bottom: 35px;">
																<button class="shop_brand">{{data.section_1.button_text}}</button>
														</div>
												</div>
												<div class="banner_below_res">
														<nuxt-link :to="$i18n.path(data.section_1.redirect_link)" exact>
																<img v-lazy="data.section_1.mobile_image_url">
														</nuxt-link>
														<div class="top_in_shop" style="bottom: 35px;">
																<button class="shop_brand">{{data.section_1.button_text}}</button>
														</div>
												</div>
												<div class="only_caption">
														<div class="banner_caption">
																{{data.section_1.banner_text}}
														</div>
												</div>


										</div>




										<div class="col-sm-12 col-md-6 delight">

												<div class="product_img">

														<div class="pro_first">

																<nuxt-link :to="$i18n.path(data.section_2.redirect_link)" exact>
																		<img v-lazy="data.section_2.image_url">
																</nuxt-link>
																<div class="top_shop">
																		<button class="shop_now_cat">{{data.section_2.button_text}}</button>
																</div>

														</div>



												</div>

										</div>

										<div class="col-sm-12 col-md-6 delight">

												<div class="product_img">

														<div class="pro_first">

																<nuxt-link :to="$i18n.path(data.section_3.redirect_link)" exact>
																		<img v-lazy="data.section_3.image_url">
																</nuxt-link>
																<div class="top_shop">
																		<button class="shop_now_cat">{{data.section_3.button_text}}</button>
																</div>

														</div>


												</div>

										</div>


								</div>

						</div>

				</div>
				<div class="dis_your">
						<div class="container-fluid">
								<div class="row">
										<div class="dis_title">DISCOVER YOUR STYLE</div>

										<div class="col-md-12 bot">
											<div class="owl-carousel owl-theme">
													<template v-for="item in productsList">
															<div class="item">
																<a href="#">
																	<template v-if="item.product_images && item.product_images.length > 0">
																			<img width="300" height="450" :src="IMAGE_URL+item.product_images[0].image_url"/>
																	</template>
																	<template v-else>
																	<img width="300" height="450" :src="IMAGE_URL+'images/nopreview.png'"/>
																	</template>
																</a>
															</div>
													</template>
											</div>
										</div>
								</div>
						</div>
				</div>
				
				<div class="best_saller">
						<div class="container-fluid">
								<div class="row">
										<div class="best_saller_title">
												BEST SELLER
										</div>

										<template v-for="item in featuredList">
											<div class="col-sm-6 col-md-3 res_two">
												<div class="best_saller_inner">
													<div class="best_saller_main">
														<a href="#">
															<template v-if="item.product_images && item.product_images.length > 0">
																<img width="400" height="570" :src="IMAGE_URL+item.product_images[0].image_url"/>
															</template>
															<template v-else>
															<img width="400" height="570" :src="IMAGE_URL+'images/nopreview.png'"/>
															</template>
															<div class="best_saller_name">
																{{ item.name }}
																<p><b>{{ item.product_brand.name}}</b> / IDR {{ item.price }}</p>
															</div>
														</a>
													</div>
												</div>
											</div>
										</template>

								</div>
						</div>
				</div>

				<div id="blog">
						<div class="container-fluid">
								<div class="row">
										<div class="col-sm-12 col-md-12">
												<div class="blog_title">
														BLOGS
														<p>Outfit ideas, editor’s pick, styling inspiration and news you need to know</p>
												</div>
										</div>

										<div class="col-sm-12 col-md-6">
												<div class="blog_inner">
														<div class="blog_first">
																<img src="~assets/images/blog1.png">
														</div>

														<div class="blog_title_first">
																<a href="#"><p>CHINESE NEW YEAR OUTFIT GUIDE</p>
																		<span>Outfit ideas, editor’s pick, styling inspiration and news you need to know</span></a>
														</div>
												</div>
										</div>

										<div class="col-sm-12 col-md-6">
												<div class="blog_inner">
														<div class="blog_first">
																<img src="~assets/images/dream.png">
														</div>

														<div class="blog_title_first">
																<a href="#"><p>PANTONE PICKS: TRENDING COLOUR OF 2019</p>
																		<span>Outfit ideas, editor’s pick, styling inspiration and news you need to know</span></a>
														</div>
												</div>
										</div>
								</div>
						</div>
				</div>

				<div class="share_style">
						<div class="container-fluid">
								<div class="row">
										<div class="col-sm-12 col-md-12">
												<div class="share_title">
														SHARE YOUR STYLE #APSTROFI
												</div>
										</div>

										<div class="col-sm-12 col-md-3">
												<div class="style_img">
														<img src="~assets/images/ladygo.jpg">
												</div>
										</div>

										<div class="col-sm-12 col-md-3">
												<div class="style_img">
														<img src="~assets/images/ladygo.jpg">
												</div>
										</div>

										<div class="col-sm-12 col-md-3">
												<div class="style_img">
														<img src="~assets/images/ladygo.jpg">
												</div>

										</div>

										<div class="col-sm-12 col-md-3">
												<div class="style_img">
														<img src="~assets/images/ladygo.jpg">
												</div>
										</div>
								</div>
						</div>
				</div>
				<about-content :common="common"></about-content>
		</div>
</template>

<script>

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
						$('.owl-carousel').owlCarousel({
								loop: true,
								margin: 10,
								responsiveClass: true,
								navigation : true,
								navText: ["<img src='"+require("@/assets/images/arrow_left_new.svg")+"'>","<img src='"+require("@/assets/images/arrow_right_new.svg")+"'>"],
								responsive: {
										0: {
												items: 2,
												nav: true
										},
										600: {
												items: 3,
												nav: false
										},
										1000: {
												items: 6,
												nav: true,
												loop: false,

										}
								}
						});
				},
				async asyncData ({ app,store }) {
						app.$axios.setHeader('lang', store.state.locale);
						let response1 = await app.$axios.$get('men/category');
						let response2 = await app.$axios.$get('page/men');
						let allProducts = await app.$axios.$get('men/allproducts');
						let featuredProducts = await app.$axios.$get('men/featuredproducts');
						return {
								data: response2.data,
								categoryList:response1.data,
								featuredList: featuredProducts,
								productsList: allProducts
						}
				}
		}
</script>


<style src="~/assets/css/women.css"></style>
