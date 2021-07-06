<template>
  <div>
    <LandingHeader/>
        <Nuxt />
    <BaseFooter class="footer-die" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (max-width: 628px) {
  .footer-die{
    display: none ;
  }
}
</style>