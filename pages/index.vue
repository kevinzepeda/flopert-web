<template>
<div>
    <home-hero/>
    <home-features/>
    <home-products/>
    <home-form/>
</div>
</template>

<script>
import HomeFeatures from '../components/home/HomeFeatures.vue'
import HomeForm from '../components/home/HomeForm.vue'
import HomeHero from '../components/home/HomeHero.vue'
import HomeProducts from '../components/home/HomeProducts.vue'
export default {
  components: { HomeFeatures, HomeProducts, HomeHero, HomeForm },

}
</script>

<style>

</style>