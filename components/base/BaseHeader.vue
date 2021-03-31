<template>
  <div>
        <!-- Bootstrap -->
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- Icons -->
        <link href="/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css">
        <!-- FLEXSLIDER -->
        <link href="/css/flexslider.css" rel="stylesheet" type="text/css" />
        <!-- Magnific -->
        <!-- Slider -->               
        <link rel="stylesheet" href="/css/owl.carousel.min.css"/> 
        <link rel="stylesheet" href="/css/owl.theme.default.min.css"/> 
        <!-- Main Css -->
        <link href="/css/style.css" rel="stylesheet" type="text/css" id="theme-opt" />
        <link href="/css/colors/default.css" rel="stylesheet" id="color-opt">

        <!-- Navbar STart -->
        <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                <!-- Logo container-->
                <div>
                    <nuxt-link class="logo" to="/">
                        <img src="/images/concept/flopert.png" height="40" alt="Logo de Flopert app">
                        <img src="/images/concept/mexico.png" height="20" alt="Bandera de México en Flopert.">
                    </nuxt-link>
                </div>   
                <button-link url="https://flopp.me/signup" action="Entrar" className="btn-primary" ></button-link>
                <button-link url="https://flopp.me/signup" action="Registrarse" className="btn-outline-primary" ></button-link>
                <div id="navigation">
                    <!-- Navigation Menu-->   
                    <ul class="navigation-menu">
                        <li><nuxt-link to="/">Inicio</nuxt-link></li>
                        <li class="has-submenu">
                            <a>Categorías</a><span class="menu-arrow"></span>
                            <ul class="submenu megamenu">
                                <li>
                                    <ul>
                                        <li><a target="_blank" href="https://flopp.me/cuisine/frutas"><i class="uil uil-align-alt"></i>Frutas</a></li>
                                        <li><a target="_blank" href="https://flopp.me/cuisine/verduras"><i class="uil uil-trees"></i>Verduras</a></li>
                                        <li><a>Muchos más <span class="badge badge-primary rounded">Próximamente</span></a></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><a target="_blank" href="https://flopp.me/cuisine/congelados"><i class="uil uil-snowflake"></i>Congelados</a></li>
                                        <li><a target="_blank" href="https://flopp.me/cuisine/deshidratados"><i class="uil uil-sun"></i>Deshidratados</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a target="_blank" href="https://flopp.me/cuisine/hierbas"><i class="uil uil-flower"></i>Hierbas y especias</a></li>
                                        <li><a target="_blank" href="https://flopp.me/cuisine/granos"><i class="uil uil-ellipsis-h"></i>Granos</a></li>
                                    </ul>
                                </li>   
                            </ul>
                        </li>
                        <li class="has-submenu">
                            <a>Empresas</a><span class="menu-arrow"></span>
                            <ul class="submenu">
                                <li class="has-submenu"><a>Vende <span class="badge badge-success rounded">ahora</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><nuxt-link to="/proveedores/registro" > Registro</nuxt-link></li>
                                        <li><nuxt-link to="/proveedores/beneficios" > ¿Cómo vender? </nuxt-link></li>
                                        <li><nuxt-link to="/proveedores/comisiones" >Comisiones</nuxt-link></li>
                                        <li><nuxt-link to="/proveedores/soporte" > Contacto</nuxt-link></li>
                                    </ul> 
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Transporta <span class="badge badge-primary rounded">ahora</span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><nuxt-link to="/transportistas/registro" >Registro</nuxt-link></li>
                                        <li><nuxt-link to="/transportistas/como-funciona" >¿Cómo funciona? </nuxt-link></li>
                                        <li><nuxt-link to="/transportistas/ganancias" >Ganancias </nuxt-link></li>
                                        <li><nuxt-link to="/transportistas/pagos" >Pagos</nuxt-link></li>
                                        <li><nuxt-link to="/transportistas/soporte" >Contacto</nuxt-link></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Compra <span class="badge badge-danger rounded">ahora</span> </a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><nuxt-link to="/empresas/registro" >Registro</nuxt-link></li>
                                        <li><nuxt-link to="/empresas/como-funciona" >¿Cómo funciona? </nuxt-link></li>
                                        <li><nuxt-link to="/empresas/descarga" >descarga </nuxt-link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                        <li class="has-submenu">
                            <a>Nosotros</a><span class="menu-arrow"></span>
                            <ul class="submenu">
                                <li><nuxt-link to="/empresa/nosotros">Nosotros</nuxt-link></li>
                                <li><nuxt-link to="/empresa/servicios">Servicios</nuxt-link></li>
                                <li><nuxt-link to="/empresa/cultura">Cultura</nuxt-link></li>
                                <li><nuxt-link to="/empresa/prensa">Prensa</nuxt-link></li>
                                <li><nuxt-link to="/empresa/empleos">Empleos</nuxt-link></li>
                                <li><nuxt-link to="/empresa/terminos">Términos</nuxt-link></li>
                                <li><nuxt-link to="/empresa/privacidad">Privacidad</nuxt-link></li>
                            </ul>
                        </li>
                    </ul><!--end navigation menu-->
                </div><!--end navigation-->
            </div><!--end container-->
        </header><!--end header-->
        <!-- Navbar End -->
        
  </div>
</template>

<script>
import button from '../buttons/buttonAction.vue'
import buttonLink from '../buttons/buttonLink.vue'
export default {
  components: { buttonLink },

}
</script>

<style>
#topnav {
    backdrop-filter: blur(5px);
    background-color: #ffffff63 !important;
}
@media (max-width: 375px){
    #topnav .buy-button {
        display: block !important;
    }
}
</style>