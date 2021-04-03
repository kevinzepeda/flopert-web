<template>
<!-- Hero Start -->
    <section class="bg-invoice border-bottom d-table w-100" id="home">
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
                            :loop="true">
                            <h1 class="heading mb-3">Alimentos frescos para tu <span class="element text-primary typing"></span><br> todos los días, con flopert.</h1>
                        </vue-typed-js>
                            <div class="pt-4 pb-4">
                                <form action="https://flopp.me/searcharea" target="_blank">
                                    <div class="form-group mb-0 position-relative">
                                        <div class="input-group">
                                            <input type="text" name="foodname" placeholder="¿Qué necesitas?" class="form-control" required>
                                            <div class="input-group-append">
                                                <button class="btn btn-primary submitBnt" type="submit">Buscar Ahora</button>
                                            </div>
                                        </div>
                                    </div>
                                </form><!--end form-->
                            </div>
                        <p class="para-desc text-muted">Comprá productos cerca de ti y ahorra hasta 30% en todos tus ingredientes, con productos frescos, directos del campo. En flopert trabajamos bajo demanda, lo que nos permite no tener almacenes y por lo tanto hay menos desperdicio de alimentos.</p>
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
            <div class="container" id="categorias">
                <div class="row">
                      <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                        <div class="card explore-feature border-0 rounded text-center bg-white">
                            <a href="https://flopp.me/cuisine/frutas" class="text-dark" target="_blank">
                                <div class="card-body">
                                    <div class="icon rounded-circle shadow-lg d-inline-block h2">
                                        <i class="uil uil-align-alt"></i>
                                    </div>
                                    <div class="content mt-3">
                                        <p class="mb-0 title text-dark">Frutas</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                        <div class="card explore-feature border-0 rounded text-center bg-white">
                            <a href="https://flopp.me/cuisine/verduras"  class="text-dark" target="_blank">
                                <div class="card-body">
                                    <div class="icon rounded-circle shadow-lg d-inline-block h2">
                                        <i class="uil uil-trees"></i>
                                    </div>
                                    <div class="content mt-3">
                                        <p class="mb-0 title text-dark">Verduras</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                        <div class="card explore-feature border-0 rounded text-center bg-white">
                            <a href="https://flopp.me/cuisine/congelados"  class="text-dark" target="_blank">
                                <div class="card-body">
                                    <div class="icon rounded-circle shadow-lg d-inline-block h2">
                                        <i class="uil uil-snowflake"></i>
                                    </div>
                                    <div class="content mt-3">
                                        <p class="mb-0 title text-dark">Congelados</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                        <div class="card explore-feature border-0 rounded text-center bg-white">
                            <a href="https://flopp.me/cuisine/deshidratados"  class="text-dark" target="_blank">
                                <div class="card-body">
                                    <div class="icon rounded-circle shadow-lg d-inline-block h2">
                                        <i class="uil uil-sun"></i>
                                    </div>
                                    <div class="content mt-3">
                                        <p class="mb-0 title text-dark">Deshidratados</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                        <div class="card explore-feature border-0 rounded text-center bg-white">
                            <a href="https://flopp.me/cuisine/hierbas"  class="text-dark" target="_blank">
                                <div class="card-body">
                                    <div class="icon rounded-circle shadow-lg d-inline-block h2">
                                        <i class="uil uil-flower"></i>
                                    </div>
                                    <div class="content mt-3">
                                        <p class="mb-0 title text-dark">Hierbas y Especias</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-4 col-6 mt-4 pt-2">
                        <div class="card explore-feature border-0 rounded text-center bg-white">
                            <a href="https://flopp.me/cuisine/granos"  class="text-dark" target="_blank">
                                <div class="card-body">
                                    <div class="icon rounded-circle shadow-lg d-inline-block h2">
                                        <i class="uil uil-ellipsis-h"></i>
                                    </div>
                                    <div class="content mt-3">
                                        <p class="mb-0 title text-dark">Granos</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </div><!--end container--> 
    </section><!--end section-->
    <!-- Hero End -->
</template>

<script>
import buttonLink from '../buttons/buttonLink.vue'
export default {
  components: { buttonLink },
    data(){
        return {
            clientes: ['Restaurante', 'Negocio', 'Cocina', 'Hotel', 'Comedor']
        }
    }
}
</script>

<style>

</style>