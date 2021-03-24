<template>
<div>
  <base-hero :data="page"/>
        <!-- Feature Start -->
        <section class="section">
            <div class="container">
                <div class="row">                    
                    <div class="col-md-4 col-12 mt-5" v-for="category in categories" :key="category.name">
                        <nuxt-link :to="category.path" class="features">
                            <div class="image position-relative d-inline-block">
                                <i id="icon-category" class="uil"  :class="category.icon"></i>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">{{ category.name }}</h4>
                            </div>
                        </nuxt-link>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h4 class="title mb-4">Client Reviews</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->

            </div><!--end container-->
        </section><!--end section-->
        <!-- Feature Start -->
</div>
</template>

<script>
import BaseHero from '../../components/base/BaseHero.vue'
export default {
  components: { BaseHero },
  data(){
      return {
          page: {
              title: 'Categorías',
              page: 'categorias',
              category: ''
          },
          categories: []
      }
  },
  async fetch(){
      this.categories = await this.$content('categorias').fetch()
  }

}
</script>

<style>
#icon-category{
    font-size: 60px;
}
.features{
    color: #000;
}
</style>