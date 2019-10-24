<template>
    <div id="header_btm" v-if="categoryList">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="header_menu_cat">
                        <ul>
                            <li>
                                <nuxt-link  :to="$i18n.path(custom_url+'newarrivals/-1')" >
                                New Arrivals
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link  :to="$i18n.path(custom_url+'sustainable/-2')" >
                                Sustainable products
                                </nuxt-link>
                            </li>
                            <template v-for="(category,index) in categoryList">
                            <li  v-bind:key="index">
                                <nuxt-link  :to="$i18n.path(url+category.parent_id)" exact>
                                    {{ category.parent_name }}
                                </nuxt-link>
                            </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomHeader",
        props:['categoryList','url', 'custom_url'],
        watch:{
            $route(to, from ){
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
            }
            
        }
    }
</script>

<style scoped>
.dropdown-demo {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    margin: 38px 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    border: 1px solid rgba(9, 7, 9, 0.08);
    float: left;
    width: 264px;
    right: 10px;
    height: auto;
    max-height: 350px;
    overflow-y: scroll;
}
.dropdown-demo .add_message {font-family: Lato;font-size: 10px;font-weight: 900;
font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;
color: #4c4988;border-bottom: 1px solid rgba(9, 7, 9, 0.08);padding: 11px 0;
padding-top: 0;}
button.check_cartpro:hover {
    background-color: #3d3987 !important;
}
.dropdown-demo .add_message span.right img { height: 10px;}
.dropdown-demo .add_message span.right {float: right;}
.check_cart button.check_cartpro {float: left;width: 100%;background-color: #4c4988;
border: none;font-family: Lato;cursor: pointer;font-weight: 900;font-style: normal;
font-stretch: normal;line-height: 2.67;letter-spacing: 1px;text-align: center;
color: #ffffff;font-size: 10px;padding: 10px 0;}
.check_cart button.check_cartpro {float: left;width: 100%;}
.check_cart {float: left;width: 100%;}
span.addcart_name {float: left;padding: 0 10px;font-weight: 900;}
span.addcart_color {float: left;padding: 0 10px;}
.dropdown-demo span.item_main span.item_description span {
float: left;padding: 0px 9px;padding-bottom: 0;}
.dropdown-demo span.item_main span.item_description span {float: left;
width: 150px;padding: 0 17px;padding: 0px 10px !important;line-height: 1;}
span.addcart_price {float: left;padding: 0 10px;padding-bottom: 16px;}
.dropdown-demo span.item_main span.item_description {float: none;
width: auto;font-size: 10px;font-family: open Sans;font-weight: normal;
font-style: normal;font-stretch: normal;line-height: normal;letter-spacing: normal;
color: #3d3d3d;}
.dropdown-demo span.item_main span.item_description span {float: left;width: 61%;
padding: 0 17px;}
.cart_icon {position: relative;display: inline-block;}
.dropdown-demo span.item_main span.item-info {
float: none;font-size: 10px;width: auto;font-family: Lato;
display: block;font-weight: normal;font-style: normal;font-stretch: normal;
line-height: normal;letter-spacing: normal;color: #3d3d3d;}
.dropdown-demo span.item_main span.item-left img {float: left;height: 93px;
width: 62px;}
.dropdown-demo span.item_main {float: left;width: 100%;padding-bottom: 15px;}
.dropdown-demo span.item_main span.item-left {float: left;width: 100%;padding-top: 10px;
}


.cart_icon:hover .dropdown-demo {display: block; cursor:grab;}

.dropdown-demo:hover .dropdown-demo {
    display:block;
    cursor:grab;
}
.select-selected:after {content: url(~assets/images/arrow_down_black.svg);
float: right;width: 100%;margin-left: 5px;font-weight: 600;
width: 14px;position: absolute; right: 10px;}
.quality_pro span {font-family: Open sans;font-size: 11px;font-weight: normal;
font-style: normal;font-stretch: normal;line-height: 2.4;letter-spacing: normal;
color: #3d3d3d;}
.quality_pro {float: left;width: 100%;padding: 10px 0;padding-bottom: 0;}
svg.red path {fill: #4c4988;}
.custom-drop {position: relative;font-family: Arial;}
.custom-drop select {
  display: none; /*hide original SELECT element:*/
}
</style>
