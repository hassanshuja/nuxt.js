<template>
<div>
    <div class="tees_section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="brand_banner">
                        <img src="~assets/images/demo_brand.png">
                        <div class="brand_view">
                            BRAND BANNER
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 hel">
                    <div class="barnd_right_side">
                        <h4>TEES & SCISSORS BRAND NAME</h4>
                        <div class="tees_loc">
                            <ul>
                                <li>LOCATION</li>
                                <li>SINCE</li>
                            </ul>
                        </div>
                        <div class="tees_loc_name">
                            <ul>
                                <li>Indonesia</li>
                                <li>2018</li>
                            </ul>
                        </div>
                        <div class="info_brand">
                            Inspired by their trademark Novelty Shoes, WATT has come out with the Novel Handbag, the stylish and fun everyday bag that adds charisma to any and all outfits. Read on to catch a glimpse of WATT’s first ever collection of handbags, and for inspiration on the accessories you can wear and use while you’re taking the signature bag out and about.
                        </div>
                        <button   data-toggle="modal" data-target="#brand_subscribe" class="sub_brand">SUBSCRIBE</button>

                    </div>
                    <!-- ----------------------------------popup--------------------- -->

                    <div class="modal fade" id="brand_subscribe" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">

                                <div id="lorem">
                                    <div class="left_pop">
                                        <img src="~assets/images/que.png">
                                    </div>
                                    <div class="right_pop">
                                        <button type="button" class="close in" data-dismiss="modal"><img src="~assets/images/close.svg" class="popup_cross"></button>
                                        <span>Sign up to our newsletter and receive 10% off your first order.
             </span>
                                        <input type="text" name="Email" placeholder="Email Address">
                                        <div class="form-group">
                                            <button type="button" class="submit_btn" style="margin-bottom: 0;">SUBMIT</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <!------------endpopup-------------------------->
                </div>
            </div>
        </div>
    </div>

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
                  <button class="tablinks active" :style="tabColumns == 4 ? 'opacity:0.5' : ''" @click="changeColumns(4)" id="defaultOpen"><img src="/images/APSTROFIICONS_11.png"></button>
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
                <template v-for="(item, index) in brand">
                  <div :class="'col-sm-12 col-md-'+tabColumns +' colum_pro'" :key="index">
                    <div class="best_saller_inner">
                      <div class="best_saller_main">
                        <nuxt-link :to="'/product_detail/'+item.id">
                          <template v-if="item.product_images && item.product_images.length > 0">
                            <div class="marqu">
                              <img  
                              v-lazy="IMAGE_URL + item.product_images[0].image_url" 
                              />
                            </div>

                            <div>{{ item.product_images.image_url}}</div>
                            <div class="brand_name">
                              <div class="brand_title"><b>{{ item.product_brand.name }}</b></div>
                              <div class="brand_category">{{ item.name }}</div>
                              
                              <template v-if="item.product_discount.length > 0">
                                <div class="productbrand_price"  v-if="item.product_discount[0].discount" >
                                  <div style="text-decoration: line-through;display: inline;">
                                    IDR {{ item.price }}
                                  </div>
                                  <!-- <span>IDR {{ item.price }}</span> -->
                                  <span v-if="item.product_discount[0].discount.type == 'PERCENTAGE'">
                                    IDR {{ item.price - (item.price * item.product_discount[0].discount.amount/100) }}
                                  </span>
                                </div>
                                <div class="productbrand_price"  v-else>
                                  IDR {{ item.price }}
                                </div>
                              </template>
                              <template  v-else>
                                <div class="productbrand_price">IDR {{ item.price }}</div>
                              </template>
                            </div>
                          </template>
                          <template v-else>
                            <img width="300" height="450" :src="IMAGE_URL + 'images/nopreview.png'" />
                          </template>
                        </nuxt-link>
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
import { mapGetters } from 'vuex'
    export default {
        name: "index",
        computed:{
            ...mapGetters['brand']
        },
        data(){
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
                        sortby: 'select sort by',
                        brand:[]
                }
        },
        mounted(){
      this.documentReady()
    },
        async fetch({app, store, route}){
            let brandname = route.params.slug

            let brand_details = await app.$axios.get(`brands/${brandname}`)
            store.dispatch('setBrand', brand_details.data)
            // let response1 = await app.$axios.$get('men/category');
            // let subcategory = await app.$axios.$get('men/subcategory/'+route.params.slug);
            // let response2 = await app.$axios.$get('page/catalogue/'+route.params.slug+'?sizing_gender=men&sustainable=1');
            // let productColors = await app.$axios.$get('product/colors');
            // let productSizes = await app.$axios.$get('product/sizes');
            // console.log(brand_details.length)
            if(brand_details.length == 0){
                var showEmptyMessage  = true;
            }else{
                var showEmptyMessage  = false;
            }
            // return {
            //         productsList: response2.data,
            //         sizesList: productSizes,
            //         colorsList: productColors,
            //         page: response2.current_page,
            //         page_count: response2.last_page,
            //         categoryList:response1.data,
            //         parent_id : route.params.slug,
            //         subcategory: subcategory.data,
            //         // showEmptyMessage: showEmptyMessage
            // }
        },
        methods: {
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

<style src="~/assets/css/brand-detail.css"></style>
