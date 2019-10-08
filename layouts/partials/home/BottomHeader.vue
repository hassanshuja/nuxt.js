<template>
    <div id="header_btm" v-if="categoryList">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="header_menu_cat">
                        <ul>
                            <li v-for="(category,index) in categoryList" v-bind:key="index">
                                <nuxt-link :to="$i18n.path(url+category.parent_id)" exact>
                                    {{ category.parent_name }}
                                </nuxt-link>
                            </li>
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
        props:['categoryList','url']
    }
</script>

<style scoped>

</style>
