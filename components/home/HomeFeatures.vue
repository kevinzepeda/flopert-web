<template>
  <div>
        <!-- Features Start -->
        <div class="container-fluid mt-5 pt-2">
            <div class="row">
                <div class="col-md-4">
                    <div class="py-5 rounded shadow bg-feature" id="ordenar">
                        <div class="p-4">
                            <h3>Comprá todo<br> bajo demanda</h3>
                            <a href="#" class="btn btn-sm btn-soft-primary mt-2">Realizar Pedido</a>
                        </div>
                    </div>
                </div><!--end col-->
                
                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="py-5 rounded shadow bg-feature" id="entregas">
                        <div class="p-4">
                            <h3>Entregas <br> Inteligentes</h3>
                            <a href="#" class="btn btn-sm btn-soft-primary mt-2">Realizar Pedido</a>
                        </div>
                    </div>
                </div><!--end col-->
                
                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="py-5 rounded shadow bg-feature" id="facil">
                        <div class="p-4">
                            <h3>Alimentos sin <br> desperdicio</h3>
                            <a href="#" class="btn btn-sm btn-soft-primary mt-2">Realizar Pedido</a>
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
    background-image:linear-gradient(90deg, #ffffff 0%, #ffffff70 100%), url(/images/concept/camion-montacaraga.png);
}
#entregas {
    background-image:linear-gradient(90deg, #ffffff 0%, #ffffff70 100%), url(/images/concept/midle.png);
}
#facil {
    background-image:linear-gradient(90deg, #ffffff 0%, #ffffff70 100%), url(/images/concept/carga.png);
}
</style>