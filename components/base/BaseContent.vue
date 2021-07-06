<template>
<div>
<!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title"> {{data.title}} </h4>
                        <div class="page-next">
                            <nav aria-label="breadcrumb" class="d-inline-block">
                                <ul class="breadcrumb bg-white rounded shadow mb-0">
                                    <li class="breadcrumb-item"><nuxt-link to="/">Inicio</nuxt-link></li>
                                    <li class="breadcrumb-item"><nuxt-link :to="'/'+data.slug1">{{data.page1}}</nuxt-link></li>
                                    <li class="breadcrumb-item active"><nuxt-link :to="'/'+ data.slug2">{{data.page2}}</nuxt-link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>  <!--end col-->
            </div><!--end row-->
        </div> <!--end container-->
    </section><!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
        <div class="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    <!--Shape End-->        
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="row">
                        <div class="col-md-2 d-none d-md-block">
                            <ul class="list-unstyled text-center sticky-bar social-icon mb-0">
                                <li class="mb-3 h6">Compartir</li>
                                <li><a :href="facebook_url" class="rounded"><i class="uil uil-facebook-f"></i></a></li>
                                <li><a :href="twitter_url" class="rounded"><i class="uil uil-twitter-alt"></i></a></li>
                                <li><a :href="linkedin_url" class="rounded"><i class="uil uil-linkedin-alt"></i></a></li>
                                <li><a :href="whatsapp_url" class="rounded"><i class="uil uil-whatsapp"></i></a></li>
                            </ul><!--end icon-->
                        </div>

                        <div class="col-md-10">
                            <nuxt-content :document="data"></nuxt-content>
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
    props: ['data'],
    data(){
        return{
            facebook_url: 'https://www.facebook.com/sharer/sharer.php?u=' + this.data.url,
            twitter_url: 'https://twitter.com/intent/tweet?url=' + this.data.url,
            linkedin_url: 'https://www.linkedin.com/shareArticle?mini=true&url=' + this.data.url,
            whatsapp_url: 'https://api.whatsapp.com/send?phone=&text=' + encodeURIComponent(this.data.url),
        }
    }
}
</script>

<style>

</style>