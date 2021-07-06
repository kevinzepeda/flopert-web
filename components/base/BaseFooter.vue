<template>
  <div>
              <!-- Footer Start -->
        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <a href="#" class="logo-footer">
                            <img src="/images/concept/envio2.png" height="100" alt="Flopp, Alimentos a futuro">
                        </a>
                        <p class="mt-4 text-muted">Compra productos cerca de ti y ahorra hasta 30% en todos tus ingredientes. Utiliza  productos frescos, directos del campo. Trabajamos bajo demanda, lo que nos permite no tener almacenes, dando como resultado que haya menos desperdicio de alimentos.</p>
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                            <li class="list-inline-item"><a target="_blank" href="https://www.facebook.com/FlopertApp/" class="rounded"><i class="uil uil-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a target="_blank" href="https://www.instagram.com/FlopertApp/" class="rounded"><i class="uil uil-instagram"></i></a></li>
                            <li class="list-inline-item"><a target="_blank" href="https://www.youtube.com/channel/UCfKdGJnVchYB8fkHBxTEs6Q" class="rounded"><i class="uil uil-youtube"></i></a></li>
                            <li class="list-inline-item"><a target="_blank" href="https://twitter.com/FlopertApp" class="rounded"><i class="uil uil-twitter-alt"></i></a></li>
                        </ul><!--end icon-->
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-dark footer-head">Empresa</h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><nuxt-link to="/empresa/nosotros" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Nosotros</nuxt-link></li>
                            <li><nuxt-link to="/empresa/cultura" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Cultura</nuxt-link></li>
                            <li><nuxt-link to="/empresa/prensa" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Prensa</nuxt-link></li>
                            <li><nuxt-link to="/empresa/empleos" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Empleos</nuxt-link></li>
                            <li id="hidden"><nuxt-link to="/not-found" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Not found</nuxt-link></li>
                            <li><nuxt-link to="/empresa/terminos" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Términos</nuxt-link></li>
                            <li><nuxt-link to="/empresa/privacidad" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Privacidad</nuxt-link></li>
                            <li><nuxt-link to="/empresa/cookies" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Cookies</nuxt-link></li>
                        </ul>
                    </div><!--end col-->
                    
                    <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-dark footer-head">Proveedores</h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><nuxt-link to="/proveedores/registro" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Registro</nuxt-link></li>
                            <li><nuxt-link to="/proveedores/distribuidores" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Distribuidores</nuxt-link></li>
                            <li><nuxt-link to="/proveedores/productores" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Productores</nuxt-link></li>
                        </ul>
                        <br>
                        <h4 class="text-dark footer-head">Clientes</h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><nuxt-link to="/empresas/app" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Descargar App</nuxt-link></li>
                            <li><nuxt-link to="/empresas/como-funciona" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Como funciona</nuxt-link></li>
                            <li><nuxt-link to="/empresas/registro" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Registro</nuxt-link></li>
                        </ul>
                    </div><!--end col-->

                    <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-dark footer-head">Transportistas</h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><nuxt-link to="/transportistas/registro" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Registro</nuxt-link></li>
                            <li><nuxt-link to="/transportistas/empresas" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Empresas</nuxt-link></li>
                            <li><nuxt-link to="/transportistas/pymes" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Pymes</nuxt-link></li>
                            <li><nuxt-link to="/transportistas/envios" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Hacer envios</nuxt-link></li>
                            <li><nuxt-link to="/transportistas/logistica" class="text-muted"><i class="mdi mdi-chevron-right mr-1"></i> Herramientas de logística.</nuxt-link></li>
                        </ul>
                    </div><!--end col-->

                </div><!--end row-->
            </div><!--end container-->
        </footer><!--end footer-->
        <footer class="footer footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-left">
                            <p class="mb-0">© {{ new Date().getFullYear() }} Flopert Logistis S.A.S Todos los derechos reservados.<br> Hencho con <i class="mdi mdi-heart text-danger"></i> en México.</p>
                        </div>
                    </div><!--end col-->

                    <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul class="list-unstyled text-sm-right mb-0">
                            <li class="list-inline-item"><a><img src="/images/payments/american-ex.png" class="avatar avatar-ex-sm" title="American Express" alt=""></a></li>
                            <li class="list-inline-item"><a><img src="/images/payments/discover.png" class="avatar avatar-ex-sm" title="Discover" alt=""></a></li>
                            <li class="list-inline-item"><a><img src="/images/payments/master-card.png" class="avatar avatar-ex-sm" title="Master Card" alt=""></a></li>
                            <li class="list-inline-item"><a><img src="/images/payments/paypal.png" class="avatar avatar-ex-sm" title="Paypal" alt=""></a></li>
                            <li class="list-inline-item"><a><img src="/images/payments/visa.png" class="avatar avatar-ex-sm" title="Visa" alt=""></a></li>
                        </ul>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </footer><!--end footer-->
        <!-- Footer End -->
  </div>
</template>

<script>
import buttonAction from '../buttons/buttonAction.vue'
export default {
  components: { buttonAction },

}
</script>

<style>
#hidden{
    display: none;
}
</style>