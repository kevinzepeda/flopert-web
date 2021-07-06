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
            </div><!--end container-->
        </header><!--end header-->
        <!-- Navbar End -->
        
  </div>
</template>

<script>
export default {

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