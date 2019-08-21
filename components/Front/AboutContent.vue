<template>
    <div id="about_part">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="about_title">
                        {{common.about_title}}
                        <p>{{common.about_content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutContent",
        props: {
            common: {
                required: true,
                type: Object
            }
        }

    }
</script>

<style scoped>

</style>