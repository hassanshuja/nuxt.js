<template>
  <div>
    <HomeTopOffer></HomeTopOffer>
    <HomeHeader></HomeHeader>
    <BottomHeader></BottomHeader>
    <nuxt />
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
    import HomeHeader from "./partials/home/Header";
    import HomeFooter from "./partials/home/Footer";
    import HomeTopOffer from "./partials/home/TopOffer";
    import BottomHeader from "./partials/home/BottomHeader";
    export default {
        components: {HomeTopOffer, HomeFooter, HomeHeader, BottomHeader},
        mounted(){
          this.setCookie()
        },
        methods: {
          setCookie(){
            document.cookie = 'same-site-cookie=samesite; SameSite=None; Secure';
          }
        }
    }
</script>

