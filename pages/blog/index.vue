<template>
  <div>
      <base-hero :data="blog"/>
        <!-- Start Articles -->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="card border-0 sidebar sticky-bar">
                            <div class="card-body p-0">
                                <!-- SEARCH -->
                                <div class="widget">
                                    <div id="search2" class="widget-search mb-0">
                                        <h2 class="widget-title"> Buscar</h2>
                                        <form role="search" method="get" id="searchform" class="searchform">
                                            <div>
                                                <input type="text" class="border rounded" v-model="query" @input="search" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!-- SEARCH -->

                                <!-- CATAGORIES -->
                                <div class="widget mt-4 pt-2">
                                    <h4 class="widget-title">Catagorías</h4>
                                    <ul class="list-unstyled mt-4 mb-0 blog-catagories">
                                        <li v-for="category in categories" :key="category.name"><nuxt-link :to="category.path">{{ category.name }}</nuxt-link></li>
                                    </ul>
                                </div>
                                <!-- CATAGORIES -->

                                <!-- Ultímos Posts -->
                                <div class="widget mt-4 pt-2">
                                    <h4 class="widget-title">Últimos Posts</h4>
                                    <ul class="list-unstyled mt-4 mb-0">
                                        <li class="media align-items-center mt-2" v-for="(post, index) in posts" :key="post.title">
                                            <template v-if="index <= 2">
                                                <nuxt-link :to="post.slug">
                                                    <img :src="post.img" class="img-fluid avatar avatar-small rounded shadow" style="height:auto;" :alt="post.title">
                                                </nuxt-link>
                                                <div class="content ml-3">
                                                    <nuxt-link :to="post.page + '/' + post.slug" class="text-dark h6">{{ post.title }}</nuxt-link>
                                                    <h6 class="text-muted small font-italic mb-0 mt-1">{{ post.date}}</h6>
                                                </div>
                                            </template>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-9 col-md-8 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
                        <div class="row align-items-center">
                            <div class="col-lg-9 col-md-7">
                                <div class="section-title">
                                    <h5 class="mb-0">Mostrando {{ articles.length }} de {{ posts.length }} artículos</h5>
                                </div>
                            </div><!--end col-->
        
                            <div class="col-lg-3 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div class="form custom-form">
                                    <div class="form-group mb-0">
                                        <select class="form-control custom-select" id="Sortbylist-job" v-model="sortBy" @change="$fetch">
                                            <option v-for="sort in sorts" :key="sort.name" :value="sort">{{ sort.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div><!--end col-->
                        </div><!--end row-->
                <div class="row">
                    <div v-for="article in articles" :key="article.title" class="col-lg-4 col-md-6 mb-4 pb-2">
                        <div class="card blog rounded border-0 shadow overflow-hidden">
                            <div class="position-relative">
                                <img :src="article.img" class="card-img-top" :alt="article.description">
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="card-body content">
                                <h5><nuxt-link :to="article.page + '/' +article.slug" class="card-title title text-dark">{{ article.title }}</nuxt-link></h5>
                                <div class="post-meta d-flex justify-content-between mt-3">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item mr-2 mb-0"><nuxt-link :to="article.page + '/' + article.slug" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>0</nuxt-link></li>
                                        <li class="list-inline-item"><nuxt-link :to="article.page + '/' + article.slug" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>0</nuxt-link></li>
                                    </ul>
                                    <nuxt-link :to="article.page + '/' + article.slug" class="text-muted readmore">leer <i class="mdi mdi-chevron-right"></i></nuxt-link>
                                </div>
                            </div>
                            <div class="author">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i>{{ article.author }}</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i>{{ article.date }}</small>
                            </div>
                        </div>
                    </div><!--end col-->

                    <!-- PAGINATION START -->
                    <div class="col-12">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item"><span v-show="skip > 0" class="page-link" @click="previusPage" aria-label="Previous">Anterior</span></li>
                            <li class="page-item" :class="page == item ? 'active' : ''" v-for="item in pages" :key="item"><span class="page-link" @click="goToPage(item)">{{ item }}</span></li>
                            <li class="page-item"><span v-show="skip + postPerPage < posts.length" class="page-link"  @click="nextPage" aria-label="Next">Siguiente</span></li>
                        </ul>
                    </div><!--end col-->
                    <!-- PAGINATION END -->
                </div><!--end row-->
                        <!-- <div class="row">

                        </div> -->
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Articles -->
        
  </div>
</template>

<script>
import BaseHero from '../../components/base/BaseHero.vue'
export default {
  components: { BaseHero },
  data(){
      return {
          blog: {
              title: 'Blog',
              page: 'blog',
          },
          query: '',
          sortBy: {
              name: 'Últimos artículos',
              key: 'createdAt',
              order: 'desc'
          },
          articles: [],
          postPerPage: 1,
          skip: 0,
          isActive: true,
          sorts: [
              {
                  name: 'Últimos artículos',
                  key: 'createdAt',
                  order: 'desc'
              },
              {
                  name: 'Orden cronologíco',
                  key: 'createdAt',
                  order: 'asc'
              },
              {
                  name: 'Ordenar por autor',
                  key: 'author',
                  order: 'desc'
              },
              {
                  name: 'Orden Alfabetico A-Z',
                  key: 'title',
                  order: 'asc'
              },
              {
                  name: 'Orden Alfabetico Z-A',
                  key: 'title',
                  order: 'desc'
              }
          ]
      }
  },
  computed: {
      pages(){
          const pages = this.posts.length / this.postPerPage
          if (pages % 1 == 0){
              return pages
          }
          else{
              return (pages - pages % 1) + 1
          }
      },
      page(){
          return (this.skip / this.postPerPage) + 1
      }
  },
    async fetch () {
        this.articles = await this.$content('articles')
        .only(['title', 'description', 'slug', 'date', 'img', 'author', 'category', 'contact', 'createdAt', 'page'])
        .sortBy(this.sortBy.key,this.sortBy.order)
        .skip(this.skip)
        .search(this.query)
        .limit(this.postPerPage)
        .fetch()
    },
    async asyncData({ $content }){
        const posts = await $content('articles')
        .only(['title', 'img', 'slug', 'page', 'date'])
        .sortBy('createdAt','desc')
        .fetch()

        const categories = await $content('categorias').fetch()
        return { posts, categories }
    },
    methods: {
        nextPage(){
            this.skip += this.postPerPage
            this.scrollToTop()
            this.$fetch()
        },
        previusPage(){
            this.skip -= this.postPerPage
            this.scrollToTop()
            this.$fetch()
        },
        goToPage(page){
            this.skip = (page - 1) * this.postPerPage 
            this.scrollToTop()
            this.$fetch()
        },
        search(){
            this.skip = 0
            this.$fetch()
        },
        scrollToTop() {
                window.scrollTo(0,0)
        }
    }
}
</script>

<style>

</style>