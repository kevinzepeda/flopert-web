<template>
<!-- Hero Start -->
    <section class="bg-invoice border-bottom d-table w-100" id="home">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 col-md-12">
                    <div class="title-heading mt-4">
                        <div class="alert alert-light alert-pills shadow" role="alert">
                            <span class="badge badge-pill badge-danger mr-1">v1.5</span>
                            <span class="content"> Ahora ya puedes ser <span class="badge badge-pill badge-secondary">Proveedor</span> con nosotros - <nuxt-link class="text-primary" to="/proveedores/registro">Registrate aqui</nuxt-link></span>
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
                                        <input type="text" name="foodname" placeholder="¿Qué necesitas?" class="form-control big-search" required>
                                        <input type="text" name="s" placeholder="Dirección" class="form-control big-search" required>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary desktop submitBnt" type="submit">Buscar Ahora</button>
                                            <button class="btn btn-primary mobile submitBnt" type="submit"><i class="uil uil-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form><!--end form-->
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
            clientes: ['Restaurante', 'Corporativo','Negocio', 'Cocina', 'Hotel', 'Comedor', 'Oficina']
        }
    }
}
</script>

<style>
input.form-control.big-search{
    padding: 30px;
}
</style>