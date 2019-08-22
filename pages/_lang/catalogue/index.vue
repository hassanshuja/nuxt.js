<template>
	<div>
		<bottom-header :categoryList="categoryList" :url="'women/category/'"></bottom-header>

		<div class="container-fluid">
			<div class="row" id="bor" style="margin:auto">
					<div class="col-sm-12 col-md-6 border_spe">
							<div class="content_main_header">
									<div class="Shop_brand_title">SHOP BRAND</div>
									<div class="bread_crumb">
											<ul>
													<li><a href="#">BRANDS</a></li>
													<li>  /  TEES &amp; SCISSORS</li>
											</ul>
									</div>
							</div>      
					</div>

					<div class="col-sm-12 col-md-6 border_spe">
							<div class="brand_cat">
									<form class="woocommerce-ordering">
										 <div class="dropdown">
												 <button class="dropbtn">SORT BY : <strong>NEW IN</strong></button>
												 <div class="dropdown-content">
													<a href="@">Sort by average rating</a>
													<a href="#">Sort by newness</a>
													<a href="#">Sort by price: low to high</a>
													<a href="#">Sort by price: high to low</a>
											 </div>
										</div>
										<!--  <select name="orderby" class="orderby">
											<option value="popularity" selected="selected">SORT BY : <strong>NEW IN</strong></option>
											<option value="rating"><strong>Sort by average rating</strong></option>
											<option value="date">Sort by newness</option>
											<option value="price">Sort by price: low to high</option>
											<option value="price-desc">Sort by price: high to low</option>
										</select> -->
										<div class="page_redirect"> 
											 <ul>   
												 <li>
														<a href="#" class="active">30</a> 
														<a href="#">40</a>
														<a href="#">60</a>
												 </li>
											 </ul>  
										</div>
													<input type="hidden" name="paged" value="1">
													<input type="hidden" name="WordApp_launch" value="">
													<input type="hidden" name="WordApp_mobile_site" value="">
													<input type="hidden" name="WordApp_demo" value="">
													<input type="hidden" name="WordApp_mobile_app" value="">
									</form>
							</div>  
					</div>
			</div>  
		</div>

		<div class="container-fluid">
					<div class="row" style="margin-top:110px;">
							<div class="col-sm-12 col-md-3 col-lg-3">
								<div class="tab" id="mobile_hide">
									<button class="tablinks active" onclick="openCity(event, 'Paris')" id="defaultOpen"><img src="images/APSTROFIICONS_11.png"></button>
									 <button class="tablinks" onclick="openCity(event, 'London')"><img src="images/APSTROFIICONS_10.png"></button>
								</div>

									<div class="View_cloth">
										<span>VIEW ALL CLOTHING</span>
										<button class="collapsible active">TOPS</button>
										<div class="content_cat" style="display: block;">
											<div class="memory">
												<ul>
													<li><a href="#">Jeans</a></li>
													<li><a href="#">Pants</a></li>
													<li><a href="#">Trousers,</a></li>
												</ul> 
											</div>
										</div>
									 <button class="collapsible">OUTERWEAR</button>
										<div class="content_cat" style="display: none;">
											<div class="memory">
												<ul>
													<li><a href="#">Jeans</a></li>
													<li><a href="#">Pants</a></li>
													<li><a href="#">Trousers,</a></li>
												</ul>
											</div>    
										</div>
										<button class="collapsible">PANTS</button>
										<div class="content_cat" style="display: none;">
											<div class="memory">
												<ul>
													<li><a href="#">Jeans</a></li>
													<li><a href="#">Pants</a></li>
													<li><a href="#">Trousers,</a></li>
												</ul> 
											</div>
										</div>
										<button class="collapsible">SPORTS</button>
										<div class="content_cat" style="display: none;">
											<div class="memory">
											 <ul>
													<li><a href="#">Jeans</a></li>
													<li><a href="#">Pants</a></li>
													<li><a href="#">Trousers,</a></li>
												</ul> 
											</div>
										</div>
										<button class="collapsible">UNDERWEAR</button>
										<div class="content_cat" style="display: none;">
											<div class="memory">
												<ul>
													<li><a href="#">Jeans</a></li>
													<li><a href="#">Pants</a></li>
													<li><a href="#">Trousers,</a></li>
												</ul> 
											</div>
										</div>
										<button class="collapsible">FABRIC CARE</button>
										<div class="content_cat" style="display: none;">
											<div class="memory">
												 <ul>
													<li><a href="#">Jeans</a></li>
													<li><a href="#">Pants</a></li>
													<li><a href="#">Trousers,</a></li>
												</ul> 
											</div>
										</div>
									</div>

									<div class="view_filter">
										<span>FILTER</span>
										<button class="collapsible">SIZE</button>
										<div class="content" style="display: none;">
											<ul>
												<li><button id="btn1">SMALL</button></li>
												<li><button id="btn1">LARGE</button></li>
												<li><button id="btn1">EXTRA-LARGE</button></li>
												<li><button id="btn1">Append text</button></li>
												<li><button id="btn1">SMALL</button></li>
												<li><button id="btn1">LARGE</button></li>
												<li><button id="btn1">EXTRA-LARGE</button></li>
												<li><button id="btn1">Append text</button></li>
											</ul> 

										</div>

										<button class="collapsible">COLOR</button>

										<div class="content">

											<ul>

												<li><button id="btn1">SMALL</button></li>
												<li><button id="btn1">LARGE</button></li>
												<li><button id="btn1">EXTRA-LARGE</button></li>
												<li><button id="btn1">Append text</button></li>
												<li><button id="btn1">SMALL</button></li>
												<li><button id="btn1">LARGE</button></li>
												<li><button id="btn1">EXTRA-LARGE</button></li>
												<li><button id="btn1">Append text</button></li>

											</ul> 

										</div>

										<button class="collapsible">PRICE</button>
										<div class="content">
											<ul>
												<li><button id="btn1">SMALL</button></li>
												<li><button id="btn1">LARGE</button></li>
												<li><button id="btn1">EXTRA-LARGE</button></li>
												<li><button id="btn1">Append text</button></li>
												<li><button id="btn1">SMALL</button></li>
												<li><button id="btn1">LARGE</button></li>
												<li><button id="btn1">EXTRA-LARGE</button></li>
												<li><button id="btn1">Append text</button></li>
											</ul> 
										</div>
									</div>  
									<div class="box">
										<button class="promo_code_in">
											<div id="fold_in"><span>MEN/NEW</span> </div>
										</button>
									</div>
								</div>
								<div class="filter_mobile">
									<div class="col-sm-12 col-md-12">
											<select>
												<option value="volvo">FILTER</option>
												<option value="saab">Saab</option>
												<option value="mercedes">Mercedes</option>
												<option value="audi">Audi</option>
											</select>
									</div>

									<div class="col-sm-12 col-md-12">
											<select>
												<option value="volvo">SORT BY:PRICE HIGH TO LOW</option>
												<option value="saab">Saab</option>
												<option value="mercedes">Mercedes</option>
												<option value="audi">Audi</option>
											</select>
									</div>  
								</div>

					<div class="col-sm-12 col-md-9 col-lg-9">
						<div class="size_show"> <button class="clear_all">Clear All</button></div>  
							<div id="London" class="tabcontent" style="display: none;">
								<template v-for="item in productsList">
									<div class="col-sm-12 col-md-4 colum_pro">
										<div class="best_saller_inner">
											<div class="best_saller_main">
												<a href="#">
													<!-- <img src="http://66.117.4.244/~creat502/apstrofi/images/styleonenew.jpg"/> -->
													<template v-if="item.product_images && item.product_images.length > 0">
														<img width="300" height="450" src="http://66.117.4.244/~creat502/apstrofi/images/styleonenew.jpg"/>
													</template>
													<template v-else>
													<img width="300" height="450" src="http://66.117.4.244/~creat502/apstrofi/images/styleonenew.jpg"/>
													</template>
													<div class="brand_name">
														<div class="brand_title"><b>{{ item.product_brand.name }}</b></div>
														<div class="brand_category">{{ item.name }}</div>
														<div class="productbrand_price"><div style="text-decoration: line-through;display: inline;">IDR {{ item.price }}</div><span>IDR {{ item.price }}</span>
														</div>
													</div>
												</a> 
											</div>  
										</div>  
									</div>
								</template>
							</div>

							<div id="Paris" class="tabcontent" style="display: block;">
								<template v-for="item in productsList">
									<div class="col-sm-12 col-md-3 colum_pro">
										<div class="best_saller_inner">
											<div class="best_saller_main">
												<a href="#">
													<!-- <img src="http://66.117.4.244/~creat502/apstrofi/images/styleonenew.jpg"/> -->
													<template v-if="item.product_images && item.product_images.length > 0">
														<img width="300" height="450" :src="'http://localhost:8000/'+item.product_images[0].image_url"/>
													</template>
													<template v-else>
													<img width="300" height="450" src="/images/notAvailable.png"/>
													</template>
													<div>{{ item.product_images.image_url}}</div>
													<div class="brand_name">
														<div class="brand_title"><b>{{ item.product_brand.name }}</b></div>
														<div class="brand_category">{{ item.name }}</div>
														<div class="productbrand_price"><div style="text-decoration: line-through;display: inline;">IDR {{ item.price }}</div><span>IDR {{ item.price }}</span>
														</div>
													</div>
												</a> 
											</div>  
										</div>  
									</div>
								</template>
								
								
								<div class="pagination">
									<a href="#" @click.prevent="nextPage()" class="">1</a>
									<a href="#" class="">2</a>
									<a href="#" class="active">3</a>
									<a href="#">4</a>
									<a href="#">5</a>
									<a href="#">&gt;</a>
								</div>
							</div>
						</div> 
						<!-- END CONTAINER PRODUCT -->
					</div>  
				<div>
			</div>
		</div>
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
								categoryList:[],
								current_page: null,
								per_page: 10,
								productsList: []
						}
				},
				//transition: 'slide',
				/*transition(to, from) {
						if (!from) return 'slide-left'
						return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
				},*/

				mounted(){},
				async asyncData ({ app,store }) {
						/*const locale = store.state.locale
						if (locale) {
								request.headers.common['lang'] = locale
						}
						const referrer = process.client ? window.document.referrer :  req.headers.referer*/
						app.$axios.setHeader('lang', store.state.locale)
						let response1 = await app.$axios.$get('women/category');
						let response2 = await app.$axios.$get('page/catalogue');
						return {
								productsList: response2.data,
								current_page: response2.current_page,
								categoryList:response1.data
						}
				},
				methods: {
					nextPage() {
						console.log('next page')
					}
				}
		}
</script>


<style src="~/assets/css/catalogue.css"></style>
