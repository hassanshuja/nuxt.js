<template>
	<div>
		<bottom-header :categoryList="categoryList" :url="'women/category/'" :custom_url="'women'"></bottom-header>
		<div class="heading-section">
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
												 <button class="dropbtn">SORT BY : <strong>{{sortby}}</strong></button>
												 <div class="dropdown-content">
													<a href="#" @click.prevent="sortBy('latest');searchCatalogue();">Newest to Latest</a>
													<a href="#" @click.prevent="sortBy('asc');searchCatalogue();">Sort by price: low to high</a>
													<a href="#" @click.prevent="sortBy('desc');searchCatalogue();">Sort by price: high to low</a>
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
													
													<a href="#" v-if="page > 29" class="active" @click.prevent="paging(30);searchCatalogue(); ">30</a>
													<a href="#" v-if="page > 39" @click.prevent="paging(40);searchCatalogue();">40</a>
													<a href="#" v-if="page > 59" @click.prevent="paging(60);searchCatalogue();">60</a>
													<a href="#" v-if="page > 29" @click.prevent="paging(1);searchCatalogue(); ">Back</a>
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
		</div>
		<div class="heading-section" style="padding:0">
		<div class="container-fluid">
					<div class="row" >
							<div class="col-sm-12 col-md-3 col-lg-3">
								<div class="tab" id="mobile_hide">
									<button class="tablinks" :style="tabColumns == 4 ? 'opacity:0.5' : ''" @click="changeColumns(4)" id="defaultOpen"><img src="/images/APSTROFIICONS_11.png"></button>
									 <button class="tablinks" :style="tabColumns == 3 ? 'opacity:0.5' : ''" @click="changeColumns(3)"><img src="/images/APSTROFIICONS_10.png"></button>
								</div>

									<div class="View_cloth">
										<span>VIEW ALL CLOTHING</span>
	
										<div class="content_cat">
											<div class="memory">
												<ul>
													<template v-for="(item, index) in subcategory">
														<li :key="index"><a href="#"  @click.prevent="setSubCatID(item.id);searchCatalogue(item.id)">{{item.name}}</a></li>
													</template>
												</ul>
											</div>
										</div>
									</div>

									<div class="view_filter">
										<span>FILTER</span>
										<template v-if="sizesList.length > 0">
											<button class="collapsible">SIZE</button>
											<div class="content">
												<ul>
													<template v-for="(item, index) in sizesList">
														<li :key="index"><button @click="selectFilter(item.name, item.id, index, 'size')" id="btn1" :data-id="item.id">{{ item.name }}</button></li>
													</template>
												</ul>
											</div>
										</template>

										<template v-if="colorsList.length > 0">
											<button class="collapsible">COLOR</button>
											<div class="content">
												<ul>
													<template v-for="(item, index) in colorsList">
														<li :key="index"><button @click="selectFilter(item.name, item.id, index, 'color')" id="btn1" :data-id="item.id">{{ item.name }}</button></li>
													</template>
												</ul>
											</div>
										</template>


										<!-- <button class="collapsible">PRICE</button>
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
										</div> -->
									</div>
									<div class="box">
										<button class="promo_code_in">
											<div id="fold_in"><span>WOMEN/NEW</span> </div>
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
						<div class="size_show">
							<template v-if="searchTags.length > 0">
								<template v-for="(item, index) in searchTags">
									<div class="form-group" :key="index">
										{{ item.name }}
										<button @click="removeTag(item.id, index)" class="remove-btn" data-toggle="tooltip" data-placement="top" title="Delete">X</button>
									</div>
								</template>
								<button @click="clearSearch" class="clear_all">Clear All</button>
							</template>
						</div>

							<!-- TEMPLATE TO SHOW 4 COLUMNS EACH -->
							<div id="Paris" class="tabcontent" style="display: block;" v-if="showEmptyMessage == false">
								<template v-for="(item, index) in productsList">
									<div :class="'col-sm-12 col-md-'+tabColumns +' colum_pro'" :key="index">
										<div class="best_saller_inner">
											<div class="best_saller_main">
												<a :href="'/product_detail/'+item.id">
													<template v-if="item.product_images && item.product_images.length > 0">
														<img width="300" height="450" 
														v-lazy="IMAGE_URL + item.product_images[0].image_url" 
														/>
														<div>{{ item.product_images.image_url}}</div>
														<div class="brand_name">
															<div class="brand_title"><b>{{ item.product_brand.name }}</b></div>
															<div class="brand_category">{{ item.name }}</div>
															<div class="productbrand_price">
																<!-- <div style="text-decoration: line-through;display: inline;">IDR {{ item.price }}</div> -->
																<!-- <span>IDR {{ item.price }}</span> -->
																<div class="productbrand_price">IDR {{ item.price }}</div>
															</div>
														</div>
													</template>
													<template v-else>
													<img width="300" height="450" :src="IMAGE_URL + 'images/nopreview.png'" />
													</template>
													
												</a>
											</div>
										</div>
									</div> 
								</template>

								<template v-if="page_count > 0">
									<paginate
									  v-model="page"
									  :page-range="5"
									  :page-count="page_count"
									  :click-handler="searchCatalogue"
									  :active-class="'page-active'"
									  :container-class="'pagination'">
									</paginate>
								</template>
							</div>
							<div id="Paris" class="tabcontent" style="display: block;" v-else>
								<div>
									<section class="section-b-space light-layout">
										<div class="container">
											<div class="row">
												<div class="col-md-12">
													<div class="noproduct"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>
														<h2>No Products Found !</h2>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
							<!-- TEMPLATE TO SHOW 4 COLUMNS EACH -->
						</div>
						<!-- END CONTAINER PRODUCT -->
					</div>
				<div>
			</div>
		</div>
		</div>
	</div>
</template>

<script>



		import BottomHeader from "../../../../../layouts/partials/home/BottomHeader";
		import AboutContent from "../../../../../components/Front/AboutContent";
		import { mapGetters } from 'vuex';
		export default {
				name: "index",
				components: {
					AboutContent,
					BottomHeader
				},
				computed:{
						...mapGetters(['common'])
				},
				data: function () {
						return {
								categoryList:[],
								subcategory: [],
								page: null,
								per_page: 10,
								page_count: null,
								productsList: [],
								colorsList: [],
								sizesList: [],
								tabColumns: 3,
								searchTags: [],
								colorSearch: [],
								sizeSearch: [],
								IMAGE_URL: process.env.IMAGE_URL,
								baseURL: process.env.baseURL,
								showEmptyMessage: false,
								parent_id: null,
								search: 'searchCatalogue',
								subcategory_id: null,
								sortby: 'select sort by'
						}
				},
				watch: {
		        searchTags: {
				      handler: function (val, oldVal) {
				        if(val) {
				        	this.searchCatalogue()
				        }
				        if(oldVal && !val) {
				        	this.searchCatalogue()
				        }
				      },
				      deep: true
			    	}
		    },
				//transition: 'slide',
				/*transition(to, from) {
						if (!from) return 'slide-left'
						return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
				},*/

				mounted(){
					this.documentReady()
					
				},
				created() {
					console.log('route', this.$router.params);
					this.parent_id = this.$route.params.slug
					},
				async asyncData ({ app,store, route }) {
						/*const locale = store.state.locale
						if (locale) {
								request.headers.common['lang'] = locale
						}
						const referrer = process.client ? window.document.referrer :  req.headers.referer*/
						app.$axios.defaults.baseURL = process.env.baseURL
						app.$axios.setHeader('lang', store.state.locale)
						let response1 = await app.$axios.$get('women/category');
						let subcategory = await app.$axios.$get('women/subcategory/'+route.params.slug);
						let response2 = await app.$axios.$get('page/catalogue/'+route.params.slug+'?sizing_gender=women&sustainable=1');
						let productColors = await app.$axios.$get('product/colors');
						let productSizes = await app.$axios.$get('product/sizes');
						
						if(response2.data.length == 0){
							var showEmptyMessage  = true;
						}else{
							var showEmptyMessage  = false;
						}

						return {
								productsList: response2.data,
								sizesList: productSizes,
								colorsList: productColors,
								page: response2.current_page,
								page_count: response2.last_page,
								categoryList:response1.data,
								parent_id : route.params.slug,
								subcategory: subcategory.data,
								showEmptyMessage: showEmptyMessage
						}
				},
				methods: {
					async getsubcatItem() {
						this.search = 'getsubcatItem';
						let subcategory_id = this.subcategory_id

						let searchUrl = `${this.baseURL}/page/catalogue/${this.parent_id}
										?sizing_gender=women&sustainable=1page=${this.page}&subcategory_id=${subcategory_id}`;
						if(this.colorSearch.length > 0 || this.sizeSearch.length > 0) {
							var colors =  JSON.stringify(this.colorSearch);
							var size =  JSON.stringify(this.sizeSearch);
							searchUrl = `${this.baseURL}/page/catalogue/${this.parent_id}?sizing_gender=women&sustainable=1page=${this.page}&colors=${colors}&size=${size}&subcategory_id=${subcategory_id}`;
						}
						console.log(searchUrl)
						let	response2 =	await this.$axios.get(searchUrl);
						if(response2) {
							if(response2.data.length == 0){
								this.showEmptyMessage = true
							}else{
								this.showEmptyMessage = false
							}
							this.productsList = response2.data.data;
							this.page = response2.current_page
							this.page_count = response2.last_page
							window.scrollTo(0,0);
						}
					},
					async setSubCatID(id) {
						this.subcategory_id = id
					},
					paging(page){
						this.page = page 
					},
					sortBy(sorting){
						this.sortby = sorting
					},
					async searchCatalogue() {
						let baseURL = this.baseURL 
						let subcategory_id = this.subcategory_id
						let sortby = this.sortby;
						console.log(sortby)
						let searchUrl = `${this.baseURL}/page/catalogue/${this.parent_id}
						?sizing_gender=women&sustainable=1&page=${this.page}&subcategory_id=${subcategory_id}&sortby=${sortby}`;
						if(this.colorSearch.length > 0 || this.sizeSearch.length > 0) {
							var colors =  JSON.stringify(this.colorSearch);
							var size =  JSON.stringify(this.sizeSearch);
							searchUrl = `${this.baseURL}/page/catalogue/${this.parent_id}
							?sizing_gender=women&sustainable=1&page=${this.page}&colors=${colors}&size=${size}
							&subcategory_id=${subcategory_id}&sortby=${sortby}`;
						}
						let response2 = await this.$axios.$get(searchUrl);
						// console.log('search Url', searchUrl);
						if(response2) {
							if(response2.data.length == 0){
								this.showEmptyMessage = true
							}else{
								this.showEmptyMessage = false
							}
							this.productsList = response2.data;
							this.page = response2.current_page
							this.page_count = response2.last_page
							window.scrollTo(0,0);
						}
					},
					changeColumns(type) {
						if(type == 4) {
							this.tabColumns = 3
						} else {
							this.tabColumns = 4
						}
					},
					documentReady() {
						var coll = document.getElementsByClassName("collapsible");
						var i;
						for (i = 0; i < coll.length; i++) {
						  coll[i].addEventListener("click", function() {
						    this.classList.toggle("active");
						    var content = this.nextElementSibling;
						    if (content.style.display === "block") {
						      content.style.display = "none";
						    } else {
						      content.style.display = "block";
						    }
						  });
						}

					},
					selectFilter(name, id, index, type) {
							if(!$(".size_show").hasClass("active")){
						    $(".size_show").addClass("active");
						 	}
						 	var dataId = 0;
						 	dataId = $(this).find('button').attr('data-id');
						 	/****** if ALready exists then return false ******/
						 	if (this.searchTags.filter(e => e.name === name).length > 0) {
						 		return false
							}
						 	if(type == 'color') {
						 			this.colorSearch.push(id);
						 	}
						 	if(type == 'size') {
						 			this.sizeSearch.push(id);
						 	}
				 			this.searchTags.push({id: id, name: name, parent_index: index, type: type})
					},
					clearSearch() {
						$(".size_show").removeClass("active");
					 	// $(".form-group").remove();
						this.colorSearch = [];
						this.sizeSearch = [];
						this.searchTags = [];
						console.log(this.colorSearch, this.searchTags);
					},
					removeTag(id, index) {
						var tag = this.searchTags[index];
						this.searchTags.splice(index, 1);
						if(tag.type == 'color') {
							var index = this.colorSearch.indexOf(id);
							if (index !== -1) this.colorSearch.splice(index, 1);
						}
						if(tag.type == 'size') {
							var index = this.sizeSearch.indexOf(id);
							if (index !== -1) this.sizeSearch.splice(index, 1);
						}
					}
				}
		}
</script>


<style src="~/assets/css/catalogue.css"></style>
