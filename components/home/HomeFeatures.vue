<template>
  <div>
        <!-- Features Start -->
        <div class="container-fluid mt-5 pt-2">
            <div class="row">
                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="py-5 rounded shadow bg-feature" id="facil">
                        <div class="p-4">
                            <h2>Distribuye tu producto con nosotros</h2>
                            <p>Forma parte de nuestros proveedores y alcanza miles de clientes de forma fácil.</p>
                            <nuxt-link to="/proveedores/registro" class="btn-sm btn-soft-primary mt-2">Comenzar a vender</nuxt-link>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="py-5 rounded shadow bg-feature" id="entregas">
                        <div class="p-4">
                            <h2>Entregas periódicas<br>Inteligentes</h2>
                            <p>Tus pedidos ahora en el tiempo que tu las necesites y como las necesites.</p>
                            <button-link url="https://flopp.me/signup" action="Registrarme" className="btn-sm btn-soft-primary mt-2"></button-link>
                        </div>
                    </div>
                </div><!--end col-->
                
                <div class="col-md-4">
                    <div class="py-5 rounded shadow bg-feature" id="ordenar">
                        <div class="p-4">
                            <h2>Realiza envíos<br> de forma sencilla </h2>
                            <p>Registra tu transporte en flopert <br>y genera ingresos con tus camiones.</p>
                            <nuxt-link to="/transportistas/registro" class="btn-sm btn-soft-primary mt-2">Registrar empresa</nuxt-link>
                        </div>
                    </div>
                </div><!--end col-->
                
            </div><!--end row-->
        </div><!--end container-->
        <!-- Features End -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-feature {
    background-size:contain;
    background-position:center right;
    background-repeat:no-repeat
}
#ordenar {
    background-image:linear-gradient(90deg, #ffffff 0%, #ffffff70 100%), url(/images/concept/camion-montacarga.png);
}
#entregas {
    background-image:linear-gradient(90deg, #ffffff 0%, #ffffff70 100%), url(/images/concept/midle.png);
}
#facil {
    background-image:linear-gradient(90deg, #ffffff 0%, #ffffff70 100%), url(/images/concept/carga.png);
}
</style>