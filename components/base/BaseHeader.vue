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
                        <li><nuxt-link to="/">Comprar</nuxt-link></li>
                        <li><nuxt-link to="/">Vender</nuxt-link></li>
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