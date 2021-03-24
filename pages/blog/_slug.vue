<template>
  <div>
      <base-hero :data="article"/>
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-md-2 d-none d-md-block">
                                <ul class="list-unstyled text-center sticky-bar social-icon mb-0">
                                    <li class="mb-3 h6">Share</li>
                                    <li><a href="javascript:void(0)" class="rounded"><i class="uil uil-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0)" class="rounded"><i class="uil uil-instagram"></i></a></li>
                                    <li><a href="javascript:void(0)" class="rounded"><i class="uil uil-twitter-alt"></i></a></li>
                                    <li><a href="javascript:void(0)" class="rounded"><i class="uil uil-linkedin-alt"></i></a></li>
                                </ul><!--end icon-->
                            </div>
                            <div class="col-md-10">  
                                <p> {{ article.description }} </p>                         
                                <ul class="list-unstyled d-flex justify-content-between mt-4">
                                    <li class="list-inline-item user mr-2"><a :href="article.contact" _target="blank" class="text-muted"><i class="uil uil-user"></i>{{article.author}}</a></li>
                                    <li class="list-inline-item date text-muted"><i class="uil uil-calendar-alt"></i>{{article.date}}</li>
                                </ul>
                                <img :src="article.img" class="img-fluid rounded-md shadow" alt="">
                                <br>
                                <nuxt-content :document="article" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
}
</script>

<style>
.img-fluid {
    margin-bottom: 30px;
}
</style>