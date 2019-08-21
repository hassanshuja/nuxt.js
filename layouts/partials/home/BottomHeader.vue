<template>
    <div id="header_btm">

        <div class="container-fluid">

            <div class="row">

                <div class="col-sm-12 col-md-12">

                    <div class="header_menu_cat">

                        <ul>

                            <li v-for="(category,index) in categoryList">
                                <nuxt-link :to="$i18n.path(url+category.slug)" exact>
                                    {{ category.name }}
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
