<template>
    <div class="buy-button">
        <a :href="url" target="_blank" class="btn" :class="className"> {{ action }} </a>
    </div>
</template>

<script>
export default {
    props: ['url', 'action','className']
}
</script>

<style>

</style>