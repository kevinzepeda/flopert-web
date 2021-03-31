<template>
  <div>
        <!-- Features Start -->
        <div class="container-fluid mt-5 pt-2">
            <div class="row">
                <div class="col-md-4">
                    <div class="py-5 rounded shadow bg-feature" id="ordenar">
                        <div class="p-4">
                            <h3>Realiza envíos<br> de forma sencilla </h3>
                            <p>
                                Registra tu empresa y genera<br>ingresos con tus camiones.
                            </p>
                            <button-link url="https://flopp.me/merchantsignup" action="Registrar mi flotilla" className="btn-sm btn-soft-primary mt-2"></button-link>
                        </div>
                    </div>
                </div><!--end col-->
                
                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="py-5 rounded shadow bg-feature" id="entregas">
                        <div class="p-4">
                            <h3>Entregas periódicas<br>Inteligentes</h3>
                            <p>
                                Ordena tus alimentos a<br>un mejor precio.
                            </p>
                            <button-link url="https://flopp.me" action="Realizar compra" className="btn-sm btn-soft-primary mt-2"></button-link>
                        </div>
                    </div>
                </div><!--end col-->
                
                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="py-5 rounded shadow bg-feature" id="facil">
                        <div class="p-4">
                            <h3>Tu distribución<br>de forma fácil!</h3>
                            <p>
                                Registrate como proveedor <br>y genera más ventas.
                            </p>
                            <button-link url="https://flopp.me/merchantsignup" action="Registrar mi empresa" className="btn-sm btn-soft-primary mt-2"></button-link>
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