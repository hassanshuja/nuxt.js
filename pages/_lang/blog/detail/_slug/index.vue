<template>
    <div id="single_blog">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-3 info">
                    <div class="date_blog">
                        <div class="mobile_view">{{blog.date}}</div>
                        <p>{{blog.title}}</p>
                    </div>
                    <div class="blog_single">
                        {{blog.subtitle}}
                        <span>by {{blog.author}}</span>
                    </div>
                    <div class="share_single">
                        <div class="share_feedtitle">
                            Share
                        </div>
                        <div class="center_icon">
                            <div class='icon social fb'><a href="#"><img src="~assets/images/facebook.svg"></a></div>
                            <div class='icon social in'><a href="#"><img src="~assets/images/Instagram.svg"></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-9">
                    <div class="w3-display-container">
                        <div class="w3-display-container mySlides" v-for="(image,i) in blog.images" :key="i">
                            <img v-lazy="image.image_url" style="width:100%" />
                        </div>
                        <button class="w3-button w3-display-left w3-black" style="background-color: transparent !important;" @click="plusDivs(-1)"  ><img src="~assets/images/arrow_left_new.svg"></button>
                        <button class="w3-button w3-display-right w3-black" @click="plusDivs(1)" style="background-color: transparent !important;"><img src="~assets/images/arrow_right_new.svg"></button>
                    </div>
                    <div class="lightbox_in">
                        <!-- <img src="~assets/images/dream.png" style="width:100%"> -->
                        <a class="example-image-link" href="images/dream.png" data-lightbox="example-set" ><img class="example-image" src="~assets/images/dream.png" alt=""/></a>
                        <a class="example-image-link" href="images/dream.png" data-lightbox="example-set" ><img class="example-image" src="~assets/images/dream.png" alt=""/></a>
                        <a class="example-image-link" href="images/dream.png" data-lightbox="example-set" ><img class="example-image" src="~assets/images/dream.png" alt=""/></a>
                        <!--  <a href="images/dream.png" data-lightbox="mygallery" ><img src="~assets/images/dream.png"  class="photo-jerem" height="60px" alt=""/></a>
                         <a href="images/dream.png" data-lightbox="mygallery" ><img src="~assets/images/dream.png"  class="photo-jerem" height="60px" alt=""/></a> -->
                    </div>
                    <div class="blog_det_mobile">
                        <div class="left_cat_date">
                            By {{blog.author}} / {{blog.date}}
                        </div>
                        <div class="right_cat_date">
                            <a href="">{{blog.category_name}}</a>
                        </div>
                    </div>
                    <div class="single_content" v-html="blog.description">
                    </div>
                    <div class="well">
                      <div class="featured-heading">SHOP PRODUCTS</div>
                      <div class="col-md-11">
                         <client-only> <!-- important to add client-only-->
                          <carousel :items="3">
                            <template v-for="(item, index) in featuredProducts">
                              <div :key="index">
                                <div class="item" style="margin-right: 10px;">
                                  <a :href="'/product_detail/'+item.id">
                                  <template v-if="item.product_images && item.product_images.length > 0">
                                    <img  :src="IMAGE_URL+item.product_images[0].image_url"/>
                                  </template>
                                  <template v-else>
                                    <img  :src="IMAGE_URL+'/images/nopreview.jpg'"/>
                                  </template>
                                  <div class="brand_name">
                                     	<div class="brand_title"><b>LECATHVA</b></div>
                                     	<div class="brand_category">Sliver Black Wiz Mules Slip-ons</div>
                                     	<div class="productbrand_price">
                                            <div style="font-size: 12px; text-decoration:line-through;display:inline; padding: 0 8px; padding-left:0;">
                                                IDR 619,000
                                            </div>
                                            <span>IDR 619,000</span>
                                        </div>
                                     </div>
                                  </a>
                                </div>
                              </div>
                            </template>
                            </carousel>
                        </client-only>
                    </div>
                    </div><!--/well-->
                    <!-- The Modal -->
                    <div class="modal" id="proo_model"  aria-modal="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <!-- Modal Header -->
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">×</button>
                                </div>
                                <!-- Modal body -->
                                <div class="modal-body">
                                    <div class="col-sm-12 col-md-6 demo">
                                        <div class="flex-container">
                                            <div class="flexslider">
                                                <ul class="slides">
                                                    <li class="flex-active-slide" data-thumb-alt="" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;">
                                                        <a href="#"><img src="~assets/images/blog_slider.png" draggable="false"></a>
                                                    </li>
                                                    <li data-thumb-alt="" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;">
                                                        <img src="~assets/images/whiteman.png" draggable="false">
                                                    </li>
                                                    <li data-thumb-alt="" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;">
                                                        <img src="~assets/images/blog_slider.png" draggable="false">
                                                    </li>
                                                </ul>
                                                <ol class="flex-control-nav flex-control-paging"><li><a href="#" class="flex-active">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li></ol><ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#">Previous</a></li><li class="flex-nav-next"><a class="flex-next" href="#">Next</a></li></ul></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 demo">
                                        <div class="right_content">
                                            <div class="product_title_pop">
                                                Hooman Bags - Pink Bumb Bag
                                                <span>IDR 260,000</span>
                                            </div>
                                            <div class="pickerWrapper">
                                                <div class="colorPreview">
                                                    <!-- <div id="selectedColor" class="colorPicked"></div> -->
                                                    <div id="colorName" class="colorPickedName"></div>
                                                </div>
                                                <div class="colorWrapper">
                                                    <a href="javascript:;" id="color01" class="colorPick">
                                                        <!-- <img src="http://www.fruitactivewear.com/resources/images/swatches/large/kelly.jpg" />
                                                         -->
                                                        <span>Color:Red</span>
                                                        <div class="red"></div>
                                                    </a>
                                                    <a href="javascript:;" id="color02" class="colorPick">
                                                        <span>Color:Yellow</span>
                                                        <div class="yellow"></div>
                                                    </a>
                                                    <a href="javascript:;" id="color03" class="colorPick">
                                                        <span>Color:Pink</span>
                                                        <div class="Pink"></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="product_size">
                                                <span>Size:</span>
                                                <!--  <ul class="size">
                                                    <li><a href="#">S</a></li>
                                                    <li><a href="#">M</a></li>
                                                    <li><a href="#">L</a></li>
                                                  </ul> -->
                                                <button type="button">XS</button>
                                                <button type="button">S</button>
                                                <button type="button">M</button>
                                                <button type="button">L</button>
                                            </div>
                                            <div class="qty">
                                                <span>Quality:</span>
                                                <select>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                            <button class="addcart">ADD TO CART</button>
                                            <div class="add_more">
                                                <a href="#">View Product Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Modal footer -->
                                <!--   <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  </div> -->
                            </div>
                        </div>
                    </div>
                    <!-- End Model -->
                </div>
               
                <div class="recent_blog">
                    <div class="col-sm-12 col-md-12">
                        <div class="rec_title">
                            READ OTHER BLOGS
                        </div>
                        <div class="col-sm-12 col-md-4 main">
                            <div class="recent_blog_img">
                                <img src="~assets/images/blog1.png">
                            </div>
                            <div class="single_blog_title">
                                <a href="#">A Chinese New Year Outfit Guide</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 main">
                            <div class="recent_blog_img">
                                <img src="~assets/images/asp.png">
                            </div>
                            <div class="single_blog_title">
                                <a href="#">A Chinese New Year Outfit Guide</a>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 main">
                            <div class="recent_blog_img">
                                <img src="~assets/images/blogg.png">
                            </div>
                            <div class="single_blog_title">
                                <a href="#">A Chinese New Year Outfit Guide</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    
    export default {
        name: "index",
        head:{
            link: [
                { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" }
            ]

        },
        data(){
            return{
                slideIndex : 1,
                IMAGE_URL: process.env.IMAGE_URL,
            }
        },
        computed:{
            ...mapGetters(['blog', 'featuredProducts'])
        },
        mounted(){
            // $('.owl-carousel').owlCarousel({
            //     loop: true,
            //     margin: 10,
            //     responsiveClass: true,
            //     navigation : true,
            //     responsive: {
            //         0: {
            //             items: 2,
            //             nav: true
            //         },
            //         600: {
            //             items: 3,
            //             nav: false
            //         },
            //         1000: {
            //             items: 6,
            //             nav: true,
            //             loop: false,

            //         }
            //     }
            // });

            this.showDivs(this.slideIndex);
            $(document).on('click', '.slicknav_btn', function() {
                $('body').toggleClass("overflow");

                var header = $('div#header .container').height();
                var header_top = $('div#header_top').height();
                var new_height = parseInt(header) + parseInt(header_top);
                var win_height = $(window).height();
                var final_height = parseInt(win_height) - parseInt(new_heght) + parseInt(7);

                setInterval(function(){
                    $('.slicknav_nav').css('height', final_height);
                }, 300);
            });


            setTimeout(function(){
                var tallness = $(".w3-display-container.mySlides").height();
                $(".col-sm-12.col-md-3").height(tallness);
            },1000);
        },
        methods:{
          check(data) {
            console.log(data)
          },
            plusDivs(n){
                this.showDivs(this.slideIndex += n);
            },
            showDivs(n){
                var i;
                var x = document.getElementsByClassName("mySlides");
                if (n > x.length) {this.slideIndex = 1}
                if (n < 1) {this.slideIndex = x.length}
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                x[this.slideIndex-1].style.display = "block";
            }
        },
        async fetch(context){

            if(context.store.getters.blogs.length > 0){
                context.store.dispatch('setBlogDetail',context.route.params.slug);
            }else{
                let response = await context.app.$axios.$get('blog/detail/'+context.route.params.slug);
                context.store.dispatch('setBlog',response.data);
            }

            context.app.$axios.defaults.baseURL = process.env.baseURL
						let featuredProducts = await context.app.$axios.$get('products/featuredproducts');

            context.store.dispatch('setfeaturedProducts', featuredProducts)


        }
    }
</script>

<style scoped>
    .well .owl-carousel.owl-theme.owl-loaded.owl-drag {
        float: left;
    }
    .share_single {
        width: 100%;
        height: auto;
        float: left;
        bottom: 10px;
    }

    .well .owl-prev {
        width: 15px;
        height: 100px;
        position: absolute;
        top:32%;
        margin-left: -20px;
        display: block !important;
        border:0px solid black;
    }
    .well .owl-theme .owl-nav [class*=owl-]:hover {
        background: transparent;
    }
    button.owl-next:focus {
        outline: none;
    }
    button.owl-prev:focus {
        outline: none;
    }
    .well .owl-next {
        width: 15px;
        height: 100px;
        position: absolute;
        top: 32%;
        background-color: #ccc;
        right: 0;
        display: block !important;
        border:0px solid}
    .well .owl-dots {
        display: none;
    }
    .brand_title {
    font-family: Open Sans;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.8;
    letter-spacing: 0.8px;
    color: #3d3d3d;
    padding-bottom: 10px;
    padding: 9px 0;
    padding-bottom: 0;
}
.brand_category {
    font-family: Open Sans;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.8;
    letter-spacing: 0.8px;
    color: #3d3d3d;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.productbrand_price {
    font-family: Open Sans;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 3;
    letter-spacing: 0.8px;
    color: #3d3d3d;
    padding-bottom: 6px;
}

.productbrand_price span {
    display: contents;
    /* float: right; */
    /* width: auto; */
    color: #d02f2f;
    padding: 0px 17px;
    /* padding-left: 0; */
    font-family: Open Sans;
    font-size: 12px;
    font-weight: normal;
}
    @media (min-width: 979px) and (max-width: 1800px) {
        .search_box {
            padding: 22px 0px;
            font-size: 8px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
            font-family: Lato;
            text-align: -webkit-right;
        }
    }
    @media only screen and (max-width: 786px) {

        .slicknav_btn {
            background-color: #ffffff;
            padding: 4px;

        }
    }
</style>