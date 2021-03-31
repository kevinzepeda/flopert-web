<template>
  <div>
    <!-- ERROR PAGE -->
    <section class="bg-home d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 text-center">
                    <img src="/images/concept/envio2.png" class="img-fluid" alt="Pagory página no encontrada" height="260">
                    <div class="text-uppercase mt-4 display-3">404</div>
                    <div class="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                    <p class="text-muted para-desc mx-auto">La página a la que intentas acceder <span class="text-primary font-weight-bold">no existe</span> o tal vez fue eliminada.</p>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row">
                <div class="col-md-12 text-center">  
                    <button @click="back" class="btn btn-outline-primary mt-4">Regresar</button>
                    <nuxt-link to='/' class="btn btn-primary mt-4 ml-2">Ir al Inicio</nuxt-link>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- ERROR PAGE -->
  </div>
</template>

<script>
  export default {
    props: ['error'],
    // layout: 'clean', // you can set a custom layout for the error page
    methods: {
        back(){
            this.$router.go(-1)
        }
    }
  }
</script>
