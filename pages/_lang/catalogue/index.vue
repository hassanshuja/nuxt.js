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
									<button class="tablinks" :style="tabColumns == 4 ? 'opacity:0.5' : ''" @click="changeColumns(4)" id="defaultOpen"><img src="/images/APSTROFIICONS_11.png"></button>
									 <button class="tablinks" :style="tabColumns == 3 ? 'opacity:0.5' : ''" @click="changeColumns(3)"><img src="/images/APSTROFIICONS_10.png"></button>
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
										<template v-if="sizesList.length > 0">
											<button class="collapsible">SIZE</button>
											<div class="content">
												<ul>
													<template v-for="(item, index) in sizesList">
														<li><button @click="selectFilter(item.name, item.id, index, 'size')" id="btn1" :data-id="item.id">{{ item.name }}</button></li>
													</template>
												</ul> 
											</div>
										</template>

										<template v-if="colorsList.length > 0">
											<button class="collapsible">COLOR</button>
											<div class="content">
												<ul>
													<template v-for="(item, index) in colorsList">
														<li><button @click="selectFilter(item.name, item.id, index, 'color')" id="btn1" :data-id="item.id">{{ item.name }}</button></li>
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
						<div class="size_show">
							<template v-if="searchTags.length > 0">
								<template v-for="(item, index) in searchTags">
									<div class="form-group">
										{{ item.name }}
										<button @click="removeTag(item.id, index)" class="remove-btn" data-toggle="tooltip" data-placement="top" title="Delete">X</button>
									</div>
								</template>
								<button @click="clearSearch" class="clear_all">Clear All</button>
							</template>
						</div>

							<!-- TEMPLATE TO SHOW 4 COLUMNS EACH -->
							<div id="Paris" class="tabcontent" style="display: block;">
								<template v-for="item in productsList">
									<div :class="'col-sm-12 col-md-'+tabColumns +' colum_pro'">
										<div class="best_saller_inner">
											<div class="best_saller_main">
												<a :href="'/product_detail/'+item.id">
													<!-- <img src="http://66.117.4.244/~creat502/apstrofi/images/styleonenew.jpg"/> -->
													<template v-if="item.product_images && item.product_images.length > 0">
														<img width="300" height="450" :src="IMAGE_URL + item.product_images[0].image_url"/>
													</template>
													<template v-else>
													<img width="300" height="450" :src="IMAGE_URL + 'images/nopreview.png'"/>
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
								
								<template v-if="page_count > 0">
									<paginate
									  v-model="page"
									  :page-range="5"
									  :page-count="20"
									  :click-handler="searchCatalogue"
									  :active-class="'page-active'"
									  :container-class="'pagination'">
									</paginate>
								</template>
							</div>
							<!-- TEMPLATE TO SHOW 4 COLUMNS EACH -->
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
								IMAGE_URL: 'http://localhost:8000/'
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
				async asyncData ({ app,store }) {
						/*const locale = store.state.locale
						if (locale) {
								request.headers.common['lang'] = locale
						}
						const referrer = process.client ? window.document.referrer :  req.headers.referer*/
						app.$axios.setHeader('lang', store.state.locale)
						let response1 = await app.$axios.$get('women/category');
						let response2 = await app.$axios.$get('page/catalogue');
						let productColors = await app.$axios.$get('product/colors');
						let productSizes = await app.$axios.$get('product/sizes');
						return {
								productsList: response2.data,
								sizesList: productSizes,
								colorsList: productColors,
								page: response2.current_page,
								page_count: response2.total,
								categoryList:response1.data
						}
				},
				methods: {
					async searchCatalogue() {
						let searchUrl = 'page/catalogue?page='+this.page; 
						if(this.colorSearch.length > 0 || this.sizeSearch.length > 0) {
							var colors =  JSON.stringify(this.colorSearch);
							var size =  JSON.stringify(this.sizeSearch);
							searchUrl = 'page/catalogue?page='+this.page+'&colors='+colors+'&size='+size;
						} 
						let response2 = await this.$axios.$get(searchUrl);
						console.log('search Url', searchUrl);
						if(response2) {
							this.productsList = response2.data;
							this.page = response2.current_page
							this.page_count = response2.total
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
