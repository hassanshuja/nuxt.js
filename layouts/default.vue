<template>
  <div>
    <HomeTopOffer></HomeTopOffer>
    <HomeHeader></HomeHeader>
    <nuxt />
    <HomeFooter></HomeFooter>
  </div>
</template>
<script>
    import HomeHeader from "./partials/home/Header";
    import HomeFooter from "./partials/home/Footer";
    import HomeTopOffer from "./partials/home/TopOffer";
    export default {
        components: {HomeTopOffer, HomeFooter, HomeHeader}
    }
</script>