<template>
    <div class="buy-button">
        <nuxt-link :to="place" class="btn" :class="className"><i class="mdi" :class="icon"></i> {{ action }}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: "buttonAction",
    props: ['action', 'place', 'className', 'icon']
}
</script>

<style>

</style>