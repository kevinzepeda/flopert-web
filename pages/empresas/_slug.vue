<template>
  <base-landing :data="page" ></base-landing>
</template>

<script>
export default {
    layout: 'landing',
    async asyncData({ $content, params }){
        const page = await $content('empresas', params.slug || 'registro' ).fetch()
        return {page}
    },
}
</script>

<style>

</style>