<template>
		<div>
				<bottom-header :categoryList="categoryList" :url="'women/category/'" :custom_url="'women/'"></bottom-header>
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
										<div class="dis_title">
												DISCOVER YOUR STYLE
										</div>
										<div class="col-md-12 bot">
											<client-only> <!-- important to add client-only-->
												<carousel :items="7">
														<template v-for="(item, index) in tagList">
															<div :key="index">
																<div class="item" >
																	<nuxt-link :to="'/catalogue?sizing_gender=women&tagId='+item.id+'&tag_name='+item.title">
																	<template v-if="item.image_url">
																		<img  :src="IMAGE_URL+item.image_url"/>
																		<div class="brand_name">
																			<div class="brand_title" style="text-align:center; padding-top:10px">
																				<b>{{item.title}}</b>
																			</div> 
																		</div>
																	</template>
																	<template v-else>
																		<img  :src="IMAGE_URL+'/images/nopreview.png'"/>
																		<div class="brand_name">
																			<div class="brand_title" style="text-align:center; padding-top:10px">
																				<b>{{item.title}}</b>
																			</div> 
																		</div>
																	</template>
																	</nuxt-link>
																</div>
															</div>
														</template>
												</carousel>
											</client-only>
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
							
              <template v-for="(item, index) in featuredList">
                <div class="col-sm-6 col-md-3 res_two" :key="index">
                  <div class="best_saller_inner">
                    <div class="best_saller_main">
                      <a :href="'/product_detail/'+item.id">
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
								tagList: [],
								IMAGE_URL: process.env.IMAGE_URL
						}
				},
				//transition: 'slide',
				/*transition(to, from) {
						if (!from) return 'slide-left'
						return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
				},*/

				mounted(){
					this.$store.dispatch('setGender', 'women');
					// setTimeout(function () {
					// 	$('.owl-carousel').owlCarousel({
	    //             loop: true,
	    //             margin: 10,
	    //             responsiveClass: true,
	    //             navigation : true,
	    //             navText: ["<img src='images/arrow_left_new.svg'>","<img src='images/arrow_right_new.svg'>"],
	    // 						loop: true,
	    //             responsive: {
	    //               0: {
	    //                 items: 2.5,
	    //                 nav: true
	    //               },
	    //               600: {
	    //                 items: 3.5,
	    //                 nav: false
	    //               },
	    //               1000: {
	    //                 items: 6,
	    //                 nav: true,
	    //                 loop: false,
	                   
	    //               }
	    //             }
	    //           })
					// }, 3000);
						
				},
				async asyncData ({ app,store }) {
						app.$axios.defaults.baseURL = process.env.baseURL

						/*const locale = store.state.locale
						if (locale) {
								request.headers.common['lang'] = locale
						}
						const referrer = process.client ? window.document.referrer :  req.headers.referer*/
						app.$axios.setHeader('lang', store.state.locale)
						let response1 = await app.$axios.$get('/women/category');
						let response2 = await app.$axios.$get('/page/women');
						let allTags = await app.$axios.$get('tag/womenTags');
						let featuredProducts = await app.$axios.$get('/women/featuredproducts');
						return {
								data: response2.data,
								categoryList:response1.data,
								featuredList: featuredProducts,
								tagList: allTags
						}
				}
		}
</script>


<style src="~/assets/css/women.css"></style>
