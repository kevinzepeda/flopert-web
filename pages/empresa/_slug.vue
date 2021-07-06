<template>
  <base-content :data="page" ></base-content>
</template>

<script>
export default {
    async asyncData({ $content, params }){
        const page = await $content('empresa', params.slug || 'nosotros' ).fetch()
        return {page}
    },
}
</script>

<style>

</style>