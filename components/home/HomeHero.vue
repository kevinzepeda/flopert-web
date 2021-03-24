<template>
<!-- Hero Start -->
    <section class="bg-half-170 border-bottom d-table w-100" id="home">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-7">
                    <div class="title-heading mt-4">
                        <div class="alert alert-light alert-pills shadow" role="alert">
                            <span class="badge badge-pill badge-danger mr-1">v1.5</span>
                            <span class="content"> Nuevo <span class="text-primary">servicio</span> 24/7 - Todos los días.</span>
                        </div>
                        <vue-typed-js 
                        :strings="clientes"
                        :typeSpeed="50"
                        :backSpeed="50"
                        :backDelay="2000"
                        :smartBackspace="true"
                        :loop="true"
                        >
                            <h1 class="heading mb-3">Alimentos frescos para tu <span class="element text-primary typing"></span><br> todos los días</h1>
                        </vue-typed-js>
                        <p class="para-desc text-muted">Comprá productos cerca de ti y ahorra hasta 30% en todos tus ingredientes, con productos frescos, directos del campo. Trabajamos bajo demanda, lo que nos permite no tener almacenes y por lo tanto hay menos desperdicio de alimentos.</p>
                        <div class="mt-4">
                            <a href="#descarga" class="btn btn-primary"><i data-feather="smartphone"></i> Descarga nuestra app</a>
                        </div>
                    </div>
                </div><!--end col-->
                <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="position-relative">
                        <img src="images/store/papa-hortalizas.jpg" class="rounded img-fluid mx-auto d-block" alt="">
                        <div class="play-icon">
                            <a href="http://vimeo.com/287684225" class="play-btn video-play-icon">
                                <i class="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                            </a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container--> 
    </section><!--end section-->
    <!-- Hero End -->
</template>

<script>
export default {
    data(){
        return {
            clientes: ['Restaurante', 'Negocio', 'Cocina', 'Hotel', 'Comedor']
        }
    }
}
</script>

<style>

</style>